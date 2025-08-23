require("dotenv").config();
const cors = require("cors");
const express = require("express");
const connectDB = require("./config/db");
const authRoutes = require('./routes/authroutes');

const app = express();
const PORT = process.env.PORT || 3002; 

app.use(
  cors({
    origin: "https://vivekpatel8433.github.io",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// 1️⃣ Parse JSON bodies
app.use(express.json());

// 2️⃣ Parse URL-encoded bodies (for form submissions)
app.use(express.urlencoded({ extended: true }));

// Connect DB
connectDB(); 

app.use('/api/auth',authRoutes); // authRoutes will start with api/auth


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});