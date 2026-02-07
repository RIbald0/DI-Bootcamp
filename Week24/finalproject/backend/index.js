import express from "express";
import { query } from "./src/db/db.js";
import cors from "cors";
import "dotenv/config";
import cookieParser from "cookie-parser";
import authRoutes from "./src/routes/auth.js";
import pollRoutes from "./src/routes/pollRoutes.js";
import voteRoutes from "./src/routes/voteRoutes.js";

// Initialize the Express application and set the network port
const app = express();
const PORT = process.env.PORT || 5001;

/**
 * Global Middleware
 */

app.use(cors({
    origin: [process.env.FRONTEND_URL, 'http://localhost:5173'],
    credentials: true,
}));             // Allows the Frontend to communicate with this API
app.use(express.json());     // Parses incoming JSON requests
app.use(cookieParser());     // Parses cookies for secure Refresh Token handling


/**
 * Health Check / Database Connection Test
 */

app.get("/test-db", async (req, res) => {
    try {
        const result = await query("SELECT NOW()");
        res.json({ message: "Database connected successfully", time: result.rows[0] })
    } catch (error) {
        console.error("Database Connection Error:", error.message);
        res.status(500).send("Database connection failed");
    }
});

/**
 * API Routes
 */

app.use("/api/auth", authRoutes);
app.use("/api/polls", pollRoutes);
app.use("/api/votes", voteRoutes);

/**
 * Server Initialization
 */

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

