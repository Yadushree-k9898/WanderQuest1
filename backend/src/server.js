


const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
require("express-async-errors"); // Automatically handles async errors globally

// Import routes
const packageRoutes = require("./routes/packageRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Allow Cross-Origin Resource Sharing
app.use(express.json()); // Parse incoming JSON requests

// Validate required environment variables
if (!process.env.MONGO_URI || !process.env.JWT_SECRET) {
  console.error("❌ Missing required environment variables.");
  process.exit(1); // Exit if any required environment variable is missing
}

// MongoDB Connection with Retry Logic
const connectWithRetry = (retries = 5) => {
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000, // Timeout for server selection
    })
    .then(() => {
      console.log("✅ MongoDB Connected");
    })
    .catch((error) => {
      if (retries === 0) {
        console.error(
          "❌ Failed to connect to MongoDB after multiple retries:",
          error.message
        );
        process.exit(1); // Exit if all retries fail
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
app.use("/api/packages", packageRoutes); // Route for package-related operations
app.use("/api/auth", authRoutes); // Route for authentication (signup/login)

// Root Route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the backend API" });
});

// 404 Middleware - Handling non-existing routes
app.use((req, res) => {
  console.error(`🚫 Route not found: ${req.originalUrl}`);
  res.status(404).json({ error: "Route not found" });
});

// Global Error Handling Middleware
app.use((err, req, res, next) => {
  console.error("🔥 Unhandled Error:", err.stack || err.message);

  // Specific error handling for validation errors
  if (err.name === "ValidationError") {
    const errorMessages = Object.values(err.errors).map((e) => e.message);
    return res.status(400).json({
      error: "Validation Error",
      details: errorMessages,
    });
  }

  // Handle duplicate data error (e.g., unique constraint violation)
  if (err.name === "MongoError" && err.code === 11000) {
    return res.status(400).json({
      error: "Duplicate Data Error",
      details: err.keyValue,
    });
  }

  // Default error response for other errors
  return res.status(500).json({
    error: "Internal Server Error",
    message: err.message || "An unexpected error occurred.",
  });
});

// Graceful shutdown
const shutdown = () => {
  console.log("\n🔴 Shutting down gracefully...");
  mongoose.connection.close(() => {
    console.log("Mongoose connection closed.");
    process.exit(0); // Exit with a success code
  });
};

process.on("SIGINT", shutdown); // Handles Ctrl+C
process.on("SIGTERM", shutdown); // Handles termination signal (e.g., from Docker or cloud platforms)

// Start the Server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
