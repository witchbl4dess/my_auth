const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://root:root@hub.rl94jd0.mongodb.net/?retryWrites=true&w=majority");
        console.log("connected to database");
    } catch (error) {
        console.error("database error", error);
        process.exit(1);
    }
};

module.exports = connectDB;
