const mongoose = require("mongoose");
const URILocal = "mongodb://127.0.0.1:27017/server_admin";

const URI = process.env.MONGODB_URI;

const connectDB = async () => {
     try {
        await mongoose.connect(URILocal);
        console.log("Connection successful to DB.");
    } catch (error) {
        console.error("Database connection failed:", error.message);
        console.error("Please make sure:");
        console.error("1. Your IP is whitelisted in MongoDB Atlas");
        console.error("2. Your credentials are correct");
        console.error("3. Your network isn't blocking the connection");
        process.exit(1);
    }
}

module.exports = connectDB;
