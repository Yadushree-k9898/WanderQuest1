
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const packageRoutes = require("./routes/packageRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const adminRoutes = require("./routes/adminRoutes");
const authMiddleware = require("./controllers/authMiddleware");  // Ensure this is the correct path

const app = express();

// Connect to MongoDB
connectDB();  // Ensure the DB connection function is correct

// Middleware
app.use(express.json());  // Parses incoming JSON requests
app.use(cors());  // Enable Cross-Origin Resource Sharing

// Routes
app.use("/api/packages", packageRoutes);  // Route for packages
app.use("/api/bookings", bookingRoutes);  // Route for bookings
app.use("/api/admin", authMiddleware, adminRoutes);  // Admin route with authentication middleware

module.exports = app;
