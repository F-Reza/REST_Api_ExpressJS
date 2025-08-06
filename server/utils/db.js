const mongoose = require("mongoose");
const UrlLocal = "mongodb://127.0.0.1:27017/server_admin";

const UrlLive = "mongodb+srv://arko:<Password>@cluster0.k7vbf82.mongodb.net/server_admin?retryWrites=true&w=majority&appName=Cluster0";

const connectDB = async () => {
     try {
        await mongoose.connect(UrlLive);
        console.log("Connection successful to DB");
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
