const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: {type: String},
    lastName: {type: String}, 
    dateOfBirth: {type: Date},
    email: {type: String},
    password: {type: String},
}); 

module.exports = mongoose.model("User", userSchema);

