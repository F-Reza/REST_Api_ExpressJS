const mongoose = require("mongoose");
const UrlLocal = "mongodb://127.0.0.1:27017/server_admin";

const connectDB = async () => {
    try {
        await mongoose.connect(UrlLocal, {
            serverSelectionTimeoutMS: 5000, // Timeout after 5 seconds
        });
        
        console.log("MongoDB Connected successfully");
        
        mongoose.connection.on('connected', () => {
            console.log('Mongoose is connected');
        });
        
        mongoose.connection.on('error', (err) => {
            console.error('Mongoose connection error:', err);
        });
        
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

//  {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         }