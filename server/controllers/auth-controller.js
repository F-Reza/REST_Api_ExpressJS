   const User = require('../models/user-model'); // Import User model here
   const bcrypt = require('bcryptjs'); // Import bcrypt for password hashing

// *-------------------
// Home Logic
// *-------------------
const home = async (req, res) => {
  try {
    res.status(200).json({ msg: "Welcome to our home page" });
  } catch (error) {
    console.log(error);
  }
};

// *-------------------
// Registration Logic
// *-------------------
const register = async (req, res) => {
  try {

    console.log("Registering user...");
    const { name, email, phone, address, password } = req.body;

    // Validate input
    if (!name || !email || !phone || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    // Check if user already exists
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password before saving (optional but recommended)
    const hashedPassword = await bcrypt.hash(password, 10);
    // Create new user
    const newUser = new User({
      name,
      email,
      phone,
      address,
      password, 
      //password: hashedPassword, // In a real application, you should hash the password before saving it
    });
    // Save the new user to the database
    const data = await newUser.save();
    // Respond with success message
    res.status(201).json({ 
      message: "User registered successfully", 
      // data: data, 
      token: await newUser.generateAuthToken(),
      userId: newUser._id // Include user ID in the response
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};


// *-------------------
// // Profile Logic
// *-------------------
const profile = async (req, res) => {
  try {
    const userId = req.body.userId; // Assuming user ID is sent in the request body
    // Here you would typically fetch user data from a database
    res.status(200).json({ message: `Profile data for user ${userId}` });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};


// *-------------------
// // Update Logic
// *-------------------
const update = async (req, res) => {
  try {
    const userId = req.body.userId; // Assuming user ID is sent in the request body
    const updatedData = req.body.data; // Assuming updated data is sent in the request body
    // Here you would typically update user data in a database
    res.status(200).json({ message: `User ${userId} updated successfully`, data: updatedData });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};



module.exports = { home, register, profile, update };