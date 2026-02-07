import { query } from "../db/db.js";

/**
 * Inserts a new poll question into the database.
 * question - The poll question text.
 * userId - The ID of the user creating the poll.
 */

export const createNewPoll = async (question, userId) => {
    const sql = `
    INSERT INTO polls (question, user_id)
    VALUES ($1, $2)
    RETURNING *
    `;

    const values = [question, userId];

    const result = await query(sql, values);
    return result.rows[0];
};


/**
 * Retrieves all polls from the database, joining them with their respective options.
 * Uses JSON aggregation to nest options within each poll object.
 */

export const getAllPollsWithOptions = async () => {
    const sql = `
    SELECT
    p.id,
    p.question,
    p.created_at,
    p.is_active,
    p.user_id AS creator_id,
    json_agg(
    json_build_object(
    'id', o.id,
    'option_text', o.option,
    'votes', o.votes_count
    )
    ) AS options
    FROM polls p
    LEFT JOIN options o ON p.id = o.poll_id
    GROUP BY p.id
    ORDER BY p.created_at DESC;
    `;

    const result = await query (sql);
    return result.rows;
};


/**
 * Fetches all polls created by a specific user.
 * Useful for the "My Dashboard" section of the frontend.
 */

export const getPollsByUserId = async (userId) => {
    const sql = `
    SELECT
        p.id,
        p.question,
        p.created_at,
        p.is_active,
        json_agg(
            json_build_object(
                'id', o.id,
                'option_text', o.option,
                'votes', o.votes_count
            )
        ) AS options
    FROM polls p
    LEFT JOIN options o ON p.id = o.poll_id
    WHERE p.user_id = $1
    GROUP BY p.id
    ORDER BY p.created_at DESC;
    `;
    const result = await query(sql, [userId]);
    return result.rows;
};


/**
 * Deletes a poll by ID. 
 * Includes user_id check to ensure only the owner can perform this action.
 */

export const deletePollbyId = async (pollId, userId) => {
    const sql = `
    DELETE FROM polls
    WHERE id = $1 AND user_id = $2
    RETURNING *;
    `;

    const result = await query(sql, [pollId, userId]);

    return result.rowCount > 0;
};


/**
 * Retrieves a single poll and its options by the poll ID.
 */

export const getPollbyId = async (pollId) => {
    const sql = `
    SELECT 
        p.id, 
        p.question, 
        p.created_at,
        p.is_active,
        p.user_id AS creator_id,
        u.username AS creator_username,
        json_agg(
            json_build_object(
                'id', o.id, 
                'option_text', o.option, 
                'votes', o.votes_count
            )
        ) AS options
    FROM polls p
    JOIN users u ON p.user_id = u.id
    LEFT JOIN options o ON p.id = o.poll_id
    WHERE p.id = $1
    GROUP BY p.id, u.username;
    `;

    const result = await query(sql, [pollId]);
    return result.rows[0];
};


/**
 * Flips the is_active boolean (Active <-> Closed) while checking ownership.
 */

export const togglePollStatus = async (pollId, userId) => {
    const sql = `
    UPDATE polls
    SET is_active = NOT is_active
    WHERE id = $1 AND user_id = $2
    RETURNING is_active;
    `;

    const result = await query(sql, [pollId, userId]);
    return result.rows[0];
}





