import { castVote } from "../models/voteModel.js";
import { getPollbyId } from "../models/pollModel.js";

/**
 * Controller to handle casting a vote.
 * Coordinates between the authenticated user and the transactional vote model.
 */

export const voteOnPoll = async (req, res) => {
    try {
        const { pollId, optionId } = req.body;
        const userId = req.user.id; // Extracted from the protect middleware

        // Guard Clause: Ensure all necessary data is present
        if(!pollId || !optionId){
            return res.status(400).json({ message: "Poll ID and Option ID are required" });
        }

        const poll = await getPollbyId(pollId);

        if(!poll){
            return res.status(404).json({ message: "Poll not found" });
        }

        if(poll.is_active === false){
            return res.status(403).json({ message: "Voting is closed for this poll." });
        }

        // Execute the atomic vote transaction
        await castVote(userId, pollId, optionId);

        res.status(200).json({ message: "Vote cast successfully!" });
    } catch (error) {
        // Log the technical error for the developer
        console.error("Voting Error:", error.message);

        // Handle the specific business logic error for duplicate voting
        if(error.message === "You have already voted on this poll."){
            return res.status(400).json({ message: error.message });
        }

        res.status(500).json({ message: "Server error while casting vote" });
    }
};