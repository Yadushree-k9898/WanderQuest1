const Package = require('../models/Package');

// Get all packages
exports.getAllPackages = async (req, res) => {
    try {
        const packages = await Package.find();
        res.json(packages);
    } catch (err) {
        res.status(500).send('Server Error');
    }
};

// Get a single package
exports.getPackageById = async (req, res) => {
    try {
        const package = await Package.findById(req.params.id);
        if (!package) {
            return res.status(404).json({ msg: 'Package not found' });
        }
        res.json(package);
    } catch (err) {
        res.status(500).send('Server Error');
    }
};
