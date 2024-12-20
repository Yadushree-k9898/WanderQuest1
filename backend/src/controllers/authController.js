

const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const validator = require('validator'); // To validate email format

// Helper function to generate JWT token
const generateToken = (userId) => {
  if (!process.env.JWT_SECRET) {
    throw new Error('JWT_SECRET environment variable is not set');
  }
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: '7d' });
};

// Signup function
exports.signup = async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;

  // Validate input fields
  if (!name || !email || !password || !confirmPassword) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  // Validate email format
  if (!validator.isEmail(email)) {
    return res.status(400).json({ message: 'Invalid email format' });
  }

  // Validate password match
  if (password !== confirmPassword) {
    return res.status(400).json({ message: 'Passwords do not match' });
  }

  // Password strength validation: At least 6 characters, must contain letters and numbers
  if (password.length < 6) {
    return res.status(400).json({ message: 'Password must be at least 6 characters long' });
  }

  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/; // Letter and number validation
  if (!passwordRegex.test(password)) {
    return res.status(400).json({
      message: 'Password must contain at least one letter and one number',
    });
  }

  try {
    // Check if email is already in use
    const emailTaken = await User.findOne({ email });
    if (emailTaken) {
      return res.status(400).json({ message: 'Email is already in use' });
    }

    // Hash password before saving
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user instance
    const newUser = new User({ name, email, password: hashedPassword });

    // Save user to the database
    await newUser.save();

    // Generate a JWT token for the new user
    const token = generateToken(newUser._id);

    // Respond with success message and token
    res.status(201).json({
      message: 'User created successfully',
      userId: newUser._id,
      token,
    });
  } catch (error) {
    console.error('Error during signup:', error);
    res.status(500).json({ message: 'Error during signup', error: error.message });
  }
};
