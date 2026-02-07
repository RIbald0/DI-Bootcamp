import express from "express";
import { register, login, logout, refreshToken} from "../controllers/authController.js";

// Initialize the Express router to group related authentication endpoints
const router = express.Router();

/**
 * Authentication Routes
 * Base Path: /api/auth
 */


// Public: Create a new account
router.post("/register", register);

// Public: Authenticate user and issue tokens
router.post("/login", login);

// Private/Public: Invalidate session and clear cookies
router.post("/logout", logout);

// Public: Exchange a refresh token for a new access token
router.post("/refresh-token", refreshToken);


export default router;