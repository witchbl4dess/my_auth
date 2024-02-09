const User = require('../model/userModel');

exports.createUser = async (req, res) => {
    try {
        const { firstname, lastname, email, password } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "this id already exist" })
        }
        const newUser = new User({ firstname, lastname, email, password });
        await newUser.save();
        res.status(201).json({ message: "user created" });
    } catch (error) {
        console.error("error when i try to create user", error);
        res.status(500).json({ message: "server error" });
    }
};

exports.getAllUser = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        console.error("error when i try to get users", error);
        res.status(500).json({ message: "server error" });
    }
};

exports.getUserById = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "user not found" });
        }
        res.status(200).json(user);
    } catch (error) {
        console.error("error when trying to get user by id", error);
        res.status(500).json({ message: "server error" });
    }
};

exports.updateUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const { firstname, lastname, email, password } = req.body;
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "user not found" });
        }
        if (email !== user.email) {
            const existingUser = await User.findOne({ email });
            if (existingUser) {
                return res.status(400).json({ message: "email already exists" });
            }
        }
        user.firstname = firstname;
        user.lastname = lastname;
        user.email = email;
        user.password = password;
        await user.save();
        res.status(200).json({ message: "user updated" });
    }
    catch (error) {
        console.error("error when trying to update user", error);
        res.status(500).json({ message: "server error" });
    }
}



exports.deleteUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "user not found" });
        }
        await user.deleteOne();
        res.status(200).json({ message: "user deleted" });
    } catch (error) {
        console.error("error when trying to delete user", error);
        res.status(500).json({ message: "server error" });
    }
};

