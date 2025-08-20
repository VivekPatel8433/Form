require("dotenv").config();
const cors = require("cors");
const express = require("express");
const connectDB = require("./config/db");

const app = express();
const PORT = process.env.PORT || 3002; 

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});