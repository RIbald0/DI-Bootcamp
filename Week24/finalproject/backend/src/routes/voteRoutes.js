import express from "express";
import { voteOnPoll } from "../controllers/voteController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

/**
 * Voting Routes
 * Base Path: /api/votes
 */


// Protected: Requires a valid JWT to cast a vote.
// The 'protect' middleware ensures we have a userId to prevent duplicate voting.

// The POST request to the root (/) path triggers the vote logic after authentication
router.post("/", protect, voteOnPoll);

export default router;