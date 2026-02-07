import { query } from "../db/db.js";

/**
 * Creates a new user record in the database.
 * Returns the created user details (excluding password).
 */

export const createUser = async (username, email, hashedPassword) => {

    const sql = `
    INSERT INTO users (username, email, password)
    VALUES ($1, $2, $3)
    RETURNING id, username, email, created_at
    `;

    const values = [username, email, hashedPassword];

    const result = await query(sql, values);
    return result.rows[0];
};

/**
 * Retrieves a user record by their email address.
 * Used primarily for authentication and checking for existing accounts.
 */

export const findUserByEmail = async (email) => {

    const sql = "SELECT * FROM users WHERE email = $1";

    const result = await query (sql, [email]);

    return result.rows[0];
};

/**
 * Retrieves a user record by their unique ID.
 */

export const findUserById = async (id) => {
    const sql = "SELECT * FROM users WHERE id = $1";
    const result = await query(sql, [id]);
    return result.rows[0];
};

/**
 * Updates the stored refresh token for a specific user.
 * Part of the JWT lifecycle to maintain persistent sessions.
 */

export const updateRefreshToken = async (userId, token) => {
    const sql = "UPDATE users SET refresh_token = $1 WHERE id = $2";
    await query(sql, [token, userId]);
};

/**
 * Removes a refresh token from the database.
 * Used during logout to invalidate the current session.
 */

export const clearRefreshToken = async (token) => {
    const sql = "UPDATE users SET refresh_token = NULL WHERE refresh_token = $1";
    await query(sql, [token]);
};