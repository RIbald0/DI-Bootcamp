const users = require("../models/userModel");

exports.getProfile = (req , res) => {
    const user = users.find(u => u.id === req.user.id);

    if (!user) return res.status(404).json({ message: "User not found"});

    res.json({
        username: user.username,
        id: user.id,
        bio: user.bio || "No bio yet"
    });
};

exports.updateProfile = (req, res) => {
    const { username , bio } = req.body;
    const userId = req.user.id;

    const userIndex = users.findIndex(u => u.id === userId);
    if(userIndex === -1){
        return res.status(404).json({ message: "User not found" });
    }

    const user = users[userIndex];

    if(username && username !== user.username){
        const duplicate = users.find(u => u.username === username);
        if(duplicate){
            return res.status(409).json({ message: "Username already taken"});
        }

        user.username = username;
    }

    if(bio){
        user.bio = bio;
    }

    users[userIndex] = user;

    res.json({
        message: "Profile updated successfully",
        user: {
            id: user.id,
            username: user.username,
            bio: user.bio
        }
    })
};