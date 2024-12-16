//

// packageRoutes.js

const express = require("express");
const router = express.Router();
const Package = require("../models/Package"); // Ensure path is correct



// GET route: List all packages
router.get("/packages", async (req, res) => {
  try {
    const packages = await Package.find(); // Fetch all packages from the database
    res.json(packages); // Return the list of packages as JSON
  } catch (error) {
    res.status(400).json({ error: error.message }); // Handle errors
  }
});

// GET route: Get a single package by ID
router.get("/packages/:id", async (req, res) => {
  try {
    const package = await Package.findById(req.params.id); // Find the package by ID
    if (!package) {
      return res.status(404).json({ error: "Package not found" });
    }
    res.json(package); // Return the package data
  } catch (error) {
    res.status(400).json({ error: error.message }); // Handle errors
  }
});

module.exports = router;
