const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const users = require("../models/userModel");

const secretKey = process.env.JWT_SECRET || "bolino88";
const REFRESH_SECRET = "superSecretRefreshKey";

let refreshTokens = [];

exports.register = async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ message: "Username and password are required" });
        }

        const usernameRegex = /^[a-zA-Z0-9]+$/;
        if(username.length < 3){
            return res.status(400).json({ message: "Username must be at least 3 characters long" });
        }
        if (!usernameRegex.test(username)){
            return res.status(400).json({ message: "Username can only contain letters and numbers" });
        }

        const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;

        if(!passwordRegex.test(password)){
            return res.status(400).json({ message: "Password must be strong: At least 8 chars, 1 number, and 1 symbol (!@#$%^&*)"})
        }

        const existingUser = users.find(user => user.username === username);
        if (existingUser) {
            return res.status(409).json({ message: "Username already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = { id: users.length + 1, username, password: hashedPassword };
        users.push(newUser);

        const token = jwt.sign({ id: newUser.id, username: newUser.username }, secretKey, {
            expiresIn: "1h"
        });

        res.cookie("token", token, { httpOnly: true });
        res.status(201).json({ message: "User registered successfully" });

    } catch (error) {
        console.log("THE ERROR IS:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

exports.login = async (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username);

    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ message: "Invalid credentials" });
    }

    const accessToken = jwt.sign({ id: user.id, username: user.username }, secretKey, { expiresIn: "5m" });
    const refreshToken = jwt.sign({ id: user.id, username: user.username }, REFRESH_SECRET, { expiresIn: "7d" });

    refreshTokens.push(refreshToken);

    res.cookie("token", accessToken, { httpOnly: true });
    res.cookie("refreshToken", refreshToken, { httpOnly: true });
    res.status(200).json({ message: "Login successful" });
};

exports.refresh = (req, res) => {
    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken) return res.status(401).json({ message: "No refresh token provided" });
    if (!refreshTokens.includes(refreshToken)) return res.status(403).json({ message: "Invalid refresh token" });

    jwt.verify(refreshToken, REFRESH_SECRET, (err, user) => {
        if (err) return res.status(403).json({ message: "Token verification failed" });

        const newAccessToken = jwt.sign({ id: user.id, username: user.username }, secretKey, { expiresIn: "5m" });

        res.cookie("token", newAccessToken, { httpOnly: true });
        res.json({ message: "Access token refreshed" });
    });
};

exports.logout = (req, res) => {
    const refreshToken = req.cookies.refreshToken;
    refreshTokens = refreshTokens.filter(token => token !== refreshToken);

    res.clearCookie("token");
    res.clearCookie("refreshToken");

    res.status(200).json({ message: "Logout successful" });
};