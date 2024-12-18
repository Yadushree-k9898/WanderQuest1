const express = require("express");
const router = express.Router();
const Package = require("../models/Package"); // Ensure the path to your Package model is correct

// GET route: List all packages
router.get("/", async (req, res) => {
  try {
    // Fetch all packages from the database
    const packages = await Package.find();
    
    // Check if packages exist
    if (packages.length === 0) {
      return res.status(404).json({ message: "No packages available" });
    }

    // Return the list of packages as JSON
    res.json(packages);
  } catch (error) {
    console.error("Error fetching packages:", error);
    res.status(500).json({ error: "Server error while fetching packages" });
  }
});

// GET route: Get a single package by ID
router.get("/:id", async (req, res) => {
  try {
    // Find the package by ID
    const pkg = await Package.findById(req.params.id);

    // Check if package exists
    if (!pkg) {
      return res.status(404).json({ error: "Package not found" });
    }

    // Return the package data
    res.json(pkg);
  } catch (error) {
    console.error("Error fetching package:", error);

    // Handle invalid ObjectId format
    if (error.kind === "ObjectId") {
      return res.status(400).json({ error: "Invalid package ID format" });
    }

    // General server error
    res.status(500).json({ error: "Server error while fetching package" });
  }
});

// POST route: Add a new package
router.post("/", async (req, res) => {
  try {
    // Create a new package based on the data in the request body
    const newPackage = new Package(req.body);
    await newPackage.save();

    // Return the newly created package as a JSON response
    res.status(201).json(newPackage);
  } catch (error) {
    console.error("Error adding package:", error);
    res.status(500).json({ error: "Server error while adding package" });
  }
});

module.exports = router;
