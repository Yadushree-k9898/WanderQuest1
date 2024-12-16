// 

// packageRoutes.js

const express = require('express');
const router = express.Router();
const Package = require('../models/Package'); // Ensure path is correct

// POST route: Add a new package
router.post('/packages', async (req, res) => {
  try {
    const newPackage = new Package(req.body);
    const savedPackage = await newPackage.save();
    res.status(201).json(savedPackage);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// PUT route: Update a package by ID
router.put('/packages/:id', async (req, res) => {
  try {
    const updatedPackage = await Package.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedPackage) {
      return res.status(404).json({ error: 'Package not found' });
    }
    res.json(updatedPackage);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE route: Delete a package by ID
router.delete('/packages/:id', async (req, res) => {
  try {
    const deletedPackage = await Package.findByIdAndDelete(req.params.id);
    if (!deletedPackage) {
      return res.status(404).json({ error: 'Package not found' });
    }
    res.json({ message: 'Package deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
