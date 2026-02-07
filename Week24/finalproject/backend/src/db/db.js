import { Pool } from "pg";
import "dotenv/config"; // Loads environment variables from the .env file

/**
 * Creates a connection pool to manage multiple database connections efficiently.
 */

const pool = new Pool({
    // The secret connection string provided by Neon/PostgreSQL
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false // Required for secure cloud database connections (Neon/Render)
    }
});

/**
 * Global helper function to execute SQL queries.
 * text - The SQL query string.
 * params - The values to be injected into the query.
 */

export const query = (text, params) => pool.query(text, params);