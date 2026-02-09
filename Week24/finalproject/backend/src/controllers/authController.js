import bcrypt from "bcrypt";
import { createUser, findUserByEmail, findUserById, updateRefreshToken, clearRefreshToken } from "../models/userModel.js";
import jwt from "jsonwebtoken";

/**
 * Handles new user registration.
 * Validates input, hashes password, saves user, and issues initial tokens.
 */

export const register = async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password){
        return res.status(400).json({ message: "All fields are required." });
    };

    try {
        // Check if user already exists
        const existingUser = await findUserByEmail(email);
        if(existingUser){
            return res.status(400).json({ message: "Email already in use" });
        }

        // Securely hash the password before saving
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const newUser = await createUser(username, email, hashedPassword);

        // Generate Short-lived Access Token
        const accessToken = jwt.sign(
            { userId: newUser.id },
            process.env.JWT_ACCESS_SECRET,
            { expiresIn: "15m" }
        );

        // Generate Long-lived Refresh Token
        const refreshToken = jwt.sign(
            { userId: newUser.id },
            process.env.JWT_REFRESH_SECRET,
            { expiresIn: "7d" }
        );

        // Store refresh token in database for session validation
        await updateRefreshToken(newUser.id, refreshToken);

        // Set refresh token in an HTTP-only cookie for security
        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
            path: '/',
            maxAge: 7 * 24 * 60 * 60 * 1000 //7 days
        })

        return res.status(201).json({
            message: "User created successfully",
            user: newUser,
            accessToken
        });

    } catch (error) {
        console.error("Registration Error", error);
        res.status(500).json({ message: "Server error during registration" });
    }
};


/**
 * Handles user login.
 * Verifies credentials and issues a new set of tokens.
 */

export const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password){
        return res.status(400).json({ message: "All fields are required." });
    };

    try {
        const user = await findUserByEmail(email);

        if(!user){
            return res.status(401).json({ message: "Invalid email or password" });
        }

        // Compare provided password with hashed password in database
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(401).json({ message: "Invalid email or password" });
        }

        const accessToken = jwt.sign(
            { userId: user.id },
            process.env.JWT_ACCESS_SECRET,
            { expiresIn: "15m" }
        );

        const refreshToken = jwt.sign(
            { userId: user.id },
            process.env.JWT_REFRESH_SECRET,
            { expiresIn: "7d" }
        );
        
        await updateRefreshToken(user.id, refreshToken);

        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
            path: '/',
            maxAge: 7 * 24 * 60 * 60 * 1000 //7 days
        })

        return res.json({
            message: "Login successful",
            user: {
                id: user.id,
                username: user.username,
                email: user.email
            },
            accessToken
        });


    } catch (error) {
        console.error("Login Error:", error);
        res.status(500).json({ message: "Server error during login"});
    }
};


/**
 * Handles user logout.
 * Clears the refresh token from both the database and the browser cookies.
 */

export const logout = async (req, res) => {
    const { refreshToken } = req.cookies;

    try {
        if(refreshToken){
            await clearRefreshToken(refreshToken);
        }

        res.clearCookie("refreshToken", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
            path: '/'
        });

        return res.status(200).json({ message: "Logged out successfully" });
    } catch (error) {
        console.error("Logout Error", error);
        res.status(500).json({ message: "Server error during logout" });
    }
};


/**
 * Generates a new Access Token using a valid Refresh Token.
 * Allows users to stay logged in without re-entering credentials.
 */

export const refreshToken = async (req, res) => {
    const { refreshToken } = req.cookies;

    if(!refreshToken) return res.status(401).json({ message: "Not authenticated" });

    try {
        const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);

        const user = await findUserById(decoded.userId)

        // Verify the token exists and matches the one in our database
        if(!user || user.refresh_token !== refreshToken){
            return res.status(403).json({ message: "invalid refresh token" });
        }

        const newAccessToken = jwt.sign(
            { userId: user.id },
            process.env.JWT_ACCESS_SECRET,
            { expiresIn: "15m" }
        );

        return res.json({ accessToken: newAccessToken, user: { id: user.id, username: user.username, email: user.email } });
    } catch (error) {
        console.error("Refresh Error:", error);
        return res.status(403).json({ message: "Session expired" });
    }
};