const mongoose = require("mongoose");

const registerSchema = new mongoose.Schema({
    firstName: {type: String, required},
    lastName: {type: String, required}, 
    dateOfBirth: {type: Date, required},
    email: {type: String, unique, required},
    password: {type: String, required},
}); 

module.exports = mongoose.models("user", registerSchema);

