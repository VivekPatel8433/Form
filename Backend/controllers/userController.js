const User = require('../models/user');
const bcrypt = require("bcryptjs");


// Handles Registration 
const registerUser = async (req, res) => {
    try {
     const { firstName, lastName, dateOfBirth, email, password } = req.body

    // Validation 
   if(!firstName || !lastName || !dateOfBirth || !email || !password) {
      return res.status(400).json({message: 'All fields are required'});
    } 

    // Check if user exists
    const checkExists = await User.findOne({ email });
    if(checkExists) {
        return res.status(400).json({message: 'User already exists'});
    }

    // Hash Password
    const hashedPassword = await bcrypt.hash(password,10);

    // Create New User
    const newUser = await User.create({
        firstName,
        lastName,
        dateOfBirth,
        email,
        password : hashedPassword
    });

    // Send success response
     res.status(201).json({
        message:'User Registered Successfully',
        user: {
            id: newUser._id,
            email: newUser.email 
        }
     });
  } catch(error) {
    console.error(error);
    res.status(500).json({message: "Server error"});
  }
}; 

module.exports = { registerUser }; 