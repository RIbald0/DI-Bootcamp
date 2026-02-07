import jwt from "jsonwebtoken";

/**
 * Middleware to protect private routes.
 * Checks for a valid JWT in the Authorization header.
 */

export const protect = async (req, res, next) => {

    // Look for the "Authorization" header (usually: Bearer <token>)
    const authHeader = req.headers.authorization;
    // Splits the "Bearer <token>" string to extract only the token part
    const token = authHeader && authHeader.split(' ')[1];
 
    // If no token is found, block access immediately
    if(!token){
        return res.status(401).json({ message: "Access denied. No token provided." });
    }
    
    try {
        // Verify the token against our secret key
        const verified = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
    
        // Attach the user ID to the request object so controllers can use it
        req.user = { id: verified.userId };
    
        // Move to the next function (the controller)
        next();      
    } catch (error) {
        // Log the specific error for debugging (e.g., token expired vs. fake token)
        console.error("JWT Verification Error:", error.message);
        return res.status(403).json({ message: "Invalid or expired token." })       
    }
};