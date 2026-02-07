import { query } from "../db/db.js";

/**
 * Creates a new option for a specific poll.
 * Automatically initializes the votes_count to 0.
 * optionText - The text displayed for the poll option.
 * pollId - The ID of the poll this option belongs to.
 */

export const createNewOption = async (optionText, pollId) => {
    const sql = `
    INSERT into options (option, poll_id, votes_count)
    VALUES ($1, $2, 0)
    RETURNING *
    `;
    
    const values = [optionText, pollId];
    const result = await query(sql, values);
    return result.rows[0];
};