const jwt = require("jsonwebtoken");
const User = require("../models/user-model");



const authMiddlewarw = async (req, res, next) => {
  // Logic to check if the user is authenticated
  const token = req.headers.authorization;

  if (token) {

    // const jwtToken = token.replace("Bearer ", "").trim();
    const jwtToken = token.split(" ")[1];
    const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET);
    console.log(isVerified);
    
    const userData = await User.findOne({ _id: isVerified.id }).
    select({ password: 0 });
    
    req.profile = userData;
    // req.token = token;
    // req.userId = userData.id;

    next(); 
  } else {
    res.status(401).json({ message: "Unauthorized" }); 
  }
}

module.exports = authMiddlewarw;
