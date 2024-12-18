

// server.js

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const packageRoutes = require("./routes/packageRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());  // Allow Cross-Origin Resource Sharing
app.use(express.json());  // Parse incoming JSON requests

// MongoDB Connection with Retry Logic
const connectWithRetry = (retries = 5) => {  // Adding a retry limit
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("✅ MongoDB Connected");
    })
    .catch((error) => {
      if (retries === 0) {
        console.error("❌ Error connecting to MongoDB after multiple retries:", error.message);
        process.exit(1);  // Exit if all retries fail
      } else {
        console.error("❌ Error connecting to MongoDB:", error.message);
        console.log(`🔄 Retrying MongoDB connection (${retries} retries left)...`);
        setTimeout(() => connectWithRetry(retries - 1), 5000); // Retry after 5 seconds
      }
    });
};

// Start MongoDB connection
connectWithRetry();

// Routes
app.use("/api/packages", packageRoutes);  // Route for package-related operations
app.use("/api/auth", authRoutes);  // Route for authentication (signup/login)

// Root Route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the backend API" });
});

// 404 Middleware - Handling non-existing routes
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// Global Error Handling Middleware
app.use((err, req, res, next) => {
  console.error("Unhandled Error:", err.message);
  res.status(500).json({ error: "Internal Server Error" });
});

// Start the Server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});

