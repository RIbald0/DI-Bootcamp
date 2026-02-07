import { query } from "../db/db.js";

/**
 * Handles the voting logic using a SQL Transaction.
 * Ensures that both the vote record is created and the count is incremented,
 * or neither happens (maintaining data integrity).
 */

export const castVote = async (userId, pollId, optionId) => {
    try {
        // Start Transaction: All steps must succeed or the whole operation fails
        await query('BEGIN');

        // 1. Record the individual vote (unique constraint on user_id + poll_id)
        const sqlVote = `INSERT INTO votes (user_id, poll_id, option_id) VALUES ($1, $2, $3);`;
        await query(sqlVote, [userId, pollId, optionId]);

        // 2. Increment the aggregate vote count for the chosen option
        const sqlUpdateCount = `UPDATE options SET votes_count = votes_count + 1 WHERE id = $1;`;
        await query(sqlUpdateCount, [optionId]);

        // If both steps succeed, save changes to the database
        await query('COMMIT');
        
        return { success: true };
    } catch (error) {
        // If any step fails, undo all changes to keep data consistent
        await query('ROLLBACK');

        // PostgreSQL error code '23505' represents a Unique Violation
        if (error.code === '23505') {
            throw new Error("You have already voted on this poll.");
        }
        throw error;
    }
};