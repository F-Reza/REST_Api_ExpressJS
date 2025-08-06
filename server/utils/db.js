const mongoose = require("mongoose");
const URI = "mongodb://127.0.0.1:27017/server_admin";

const connectDB = async () => {
    try {
        console.log("connection successful to DB");
    } catch (error) {
        console.error("database connection failed");
        process.exit(0);
    }
}

module.exports = connectDB;