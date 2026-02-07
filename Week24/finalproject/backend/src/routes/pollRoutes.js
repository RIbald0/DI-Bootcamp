import express from "express";
import { createPoll, getPolls, getMyPolls, deletePoll, getSinglePoll, togglePoll} from "../controllers/pollController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

/**
 * Poll Management Routes
 * Base Path: /api/polls
 */


// Protected: Only logged-in users can create new polls
// The 'protect' middleware runs first to verify the user before 'createPoll' executes
router.post("/", protect, createPoll);

// Public: Anyone can view the list of all available polls
router.get("/", getPolls);

// Protected: Retrieve only the polls created by the logged-in user
router.get("/user", protect, getMyPolls);

// Public: Anyone can view a specific poll's details by ID
router.get("/:id", getSinglePoll);

// Protected: Only the owner of the poll can delete it
router.delete("/:id", protect, deletePoll);

//Protected: Only the owner can toggle the active/closed status
// PATCH is used here as we are performing a partial update to the poll's status
router.patch("/:id/toggle", protect, togglePoll);


export default router;