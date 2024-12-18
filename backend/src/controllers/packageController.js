const Package = require("../models/Package");

// Admin credentials (in a real app, use a database and hashing for passwords)
const ADMIN_CREDENTIALS = { username: "admin", password: "password" };

// Admin login (simple login without token)
exports.adminLogin = (req, res) => {
  try {
    const { username, password } = req.body;
    if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
      res.json({ message: "Login successful" });
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Get all packages (No authentication needed for general users)
exports.getAllPackages = async (req, res) => {
  try {
    const packages = await Package.find();
    res.json(packages);
  } catch (err) {
    res.status(500).send("Server Error");
  }
};

// Get a single package (No authentication needed for general users)
exports.getPackageById = async (req, res) => {
  try {
    const pkg = await Package.findById(req.params.id);
    if (!pkg) {
      return res.status(404).json({ msg: "Package not found" });
    }
    res.json(pkg);
  } catch (err) {
    res.status(500).send("Server Error");
  }
};

// Middleware to authenticate admin
const authenticateAdmin = (req, res, next) => {
  const { username, password } = req.body;
  if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
    return next(); // Admin credentials are correct, proceed to next middleware or route handler
  } else {
    return res.status(401).json({ message: "Unauthorized access" });
  }
};

// Add a new package (Admin-only access)
exports.addPackage = async (req, res) => {
  try {
    const pkg = new Package(req.body);
    await pkg.save();
    res.json(pkg);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to create package", error: error.message });
  }
};

// Update an existing package (Admin-only access)
exports.updatePackage = async (req, res) => {
  try {
    const pkg = await Package.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!pkg) {
      return res.status(404).json({ message: "Package not found" });
    }
    res.json(pkg);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to update package", error: error.message });
  }
};

// Delete a package (Admin-only access)
exports.deletePackage = async (req, res) => {
  try {
    const pkg = await Package.findByIdAndDelete(req.params.id);
    if (!pkg) {
      return res.status(404).json({ message: "Package not found" });
    }
    res.json({ message: "Package deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to delete package", error: error.message });
  }
};

module.exports = {
  adminLogin,
  getAllPackages,
  getPackageById,
  addPackage,
  updatePackage,
  deletePackage,
  authenticateAdmin,
};
