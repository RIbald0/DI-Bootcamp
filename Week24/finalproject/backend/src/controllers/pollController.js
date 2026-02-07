import { createNewPoll, deletePollbyId, getAllPollsWithOptions, getPollbyId, getPollsByUserId, togglePollStatus } from "../models/pollModel.js";
import { createNewOption } from "../models/optionModel.js";

/**
 * Creates a new poll along with its associated options.
 * Uses Promise.all to handle multiple asynchronous option insertions concurrently.
 */

export const createPoll = async (req, res) => {
    const { question, options } = req.body;
    const userId = req.user.id;

    try {
        // Validation: Ensure minimum data requirements are met
        if(!question || !options || options.length < 3) {
            return res.status(400).json({ message: "Question and at least 3 options are required." });
        }

        // 1. Create the parent Poll record
        const poll = await createNewPoll(question, userId);

        // 2. Create all associated options concurrently
        const optionPromises = options.map(opt => createNewOption(opt, poll.id));
        const savedOptions = await Promise.all(optionPromises);

        res.status(201).json({
            message: "Poll and options created successfully",
            poll,
            options: savedOptions
        });
    } catch (error) {
        console.error("Create Poll Error:", error);
        res.status(500).json({ message: "Server error creating poll" });
    }
};


/**
 * Retrieves all polls available in the system.
 */

export const getPolls = async (req, res) => {
    try {
        const polls = await  getAllPollsWithOptions();

        res.status(200).json(polls);

    } catch (error) {
        console.error("Get Polls Error:", error);
        res.status(500).json({ message: "Server error fetching polls" });
    }
};

/**
 * Retrieves polls created specifically by the authenticated user.
 */

export const getMyPolls = async (req, res) => {
    try {
        const userId = req.user.id

        const polls = await getPollsByUserId(userId);

        res.status(200).json(polls);
    } catch (error) {
        console.error("Get My Polls Error:", error);
        res.status(500).json({ message: "Server error fetching your polls" });
    }
};

/**
 * Deletes a specific poll.
 * Verification is handled at the model level to ensure the requester is the owner.
 */

export const deletePoll = async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.user.id;

        const success = await deletePollbyId(id, userId);

        if(!success){
            return res.status(403).json({
                message: "You don't have permission to delete this poll or it doesn't exist."
            });
        }

        res.status(200).json({ message: "Poll and all related data deleted." });
    } catch (error) {
        console.error("Delete Error:", error);
        res.status(500).json({ 
            message: "Delete failed",
            error:  error.message});
    }
};


/**
 * Fetches the details of a single poll by its ID.
 */

export const getSinglePoll = async (req, res) => {
    try {
        const { id } = req.params;
        const poll = await getPollbyId(id);

        if(!poll){
            return res.status(404).json({ message: "Poll not found" });
        }

        res.status(200).json(poll);
    } catch (error) {
        res.status(500).json({ message: "Error fetching poll" });
    }
};


/**
 * Toggles the poll's active status.
 * Verification is handled at the model level (pollId + userId check).
 */


export const togglePoll = async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.user.id;

        //To update the status of the poll
        const updatePoll = await togglePollStatus(id, userId);

        if(!updatePoll){
            return res.status(403).json({
                message: "You don't have permission to modify this poll or it doesn't exist."
            });
        }

        res.status(200).json({
            message: "Poll status updated.",
            is_active: updatePoll.is_active
        });
    } catch (error) {
        console.error("Toggle Status Error:", error);
        res.status(500).json({ message: "Server error toggling poll status" });
    }
};
