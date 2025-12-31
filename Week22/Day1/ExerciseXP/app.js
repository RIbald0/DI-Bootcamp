const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();

const authRoutes = require("./routes/auth");

const authMiddleware = require("./middleware/authMiddleware");

const userController = require("./controllers/userController")

const authLimiter = require("./middleware/rateLimitMiddleware")

app.use(express.json());
app.use(cookieParser());

const PORT = 5002;

app.use("/auth",authLimiter, authRoutes);

app.get("/", (req, res) => {
    res.send("Hello, JWT Authentication");
});

app.get("/profile", authMiddleware, userController.getProfile);

app.put("/profile", authMiddleware, userController.updateProfile);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
});