// const express = require("express");
// const router = express.Router();
// const Package = require("../models/Package");

// // POST route: Add a new package
// router.post("/packages", async (req, res) => {
//   try {
//     const newPackage = new Package(req.body);
//     const savedPackage = await newPackage.save();
//     res.status(201).json(savedPackage);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

// // PUT route: Update a package by ID
// router.put("/packages/:id", async (req, res) => {
//   try {
//     const updatedPackage = await Package.findByIdAndUpdate(
//       req.params.id,
//       req.body,
//       { new: true, runValidators: true }
//     );
//     if (!updatedPackage) {
//       return res.status(404).json({ error: "Package not found" });
//     }
//     res.json(updatedPackage);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

// // DELETE route: Delete a package by ID
// router.delete("/packages/:id", async (req, res) => {
//   try {
//     const deletedPackage = await Package.findByIdAndDelete(req.params.id);
//     if (!deletedPackage) {
//       return res.status(404).json({ error: "Package not found" });
//     }
//     res.json({ message: "Package deleted successfully" });
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// // });a

// module.exports = router;

const express = require("express");
const router = express.Router();
const {
  adminLogin,
  addPackage,
  updatePackage,
  deletePackage,
  get_all_packages,
  get_single_package,
} = require("../controllers/packageController"); // Ensure the path is correct

// Admin login route
router.post("/", adminLogin);

// Package routes (Admin only)
router.post("/packages", addPackage); // Add new package
router.put("/packages/:id", updatePackage); // Update an existing package
router.delete("/packages/:id", deletePackage); // Delete a package

// Public package routes (accessible to everyone)
router.get("/packages", get_all_packages); // Get all packages
router.get("/packages/:id", get_single_package); // Get a single package by ID

module.exports = router;
