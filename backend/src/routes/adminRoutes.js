const express = require('express');
const router = express.Router();

// Admin routes to manage packages (CRUD operations)
router.post('/packages', (req, res) => {
    // Logic to add a new package
});

router.put('/packages/:id', (req, res) => {
    // Logic to update a package
});

router.delete('/packages/:id', (req, res) => {
    // Logic to delete a package
});

module.exports = router;
