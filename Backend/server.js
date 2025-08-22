require("dotenv").config();
const cors = require("cors");
const express = require("express");
const connectDB = require("./config/db");
const authRoutes = require('./routes/authroutes');

const app = express();
const PORT = process.env.PORT || 3002; 

// Connect DB
connectDB(); 

app.use('/api/auth',authRoutes); // authRoutes will start with api/auth


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});