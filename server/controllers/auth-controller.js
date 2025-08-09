// *----------------------
//* Controllers
// *----------------------

//? In an Express.js application, a "controller" refers to a part of your code that is responsible for handling the application's logic. Controllers are typically used to process incoming requests, interact with models (data sources), and send responses back to clients. They help organize your application by separating concerns and following the MVC (Model-View-Controller) design pattern.

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
    const data = req.body;
    console.log(req.body);
    res.status(201).json({ message: "User registered successfully", data: data });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};


// *-------------------// Profile Logic
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


// *-------------------// Update Logic
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



module.exports = { home, register };