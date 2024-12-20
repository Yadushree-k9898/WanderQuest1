

const express = require('express');
const User = require('../models/User'); // Assuming User model is correct
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();

// Helper function to validate email format
const isValidEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return emailRegex.test(email);
};

// Helper function to validate password strength
const isValidPassword = (password) => {
  // Minimum 6 characters, must contain at least one letter and one number
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
  return passwordRegex.test(password);
};

// Ensure JWT_SECRET is set in the environment (Move this check inside the signup route)
const getJwtSecret = () => {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error('JWT_SECRET environment variable is not set');
  }
  return secret;
};

// Use express.json() middleware to parse JSON bodies
router.use(express.json());

// Signup route
router.post('/signup', async (req, res) => {
  const { fullName, email, password, confirmPassword } = req.body;

  // Debug log to see the request body (remove or replace with a logger in production)
  console.log('Request Body:', req.body);

  // Validate required fields
  if (!fullName || !email || !password || !confirmPassword) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  // Check if passwords match
  if (password !== confirmPassword) {
    return res.status(400).json({ message: 'Passwords do not match' });
  }

  // Check if email format is valid
  if (!isValidEmail(email)) {
    return res.status(400).json({ message: 'Invalid email format' });
  }

  // Password validation
  if (!isValidPassword(password)) {
    return res.status(400).json({
      message: 'Password must be at least 6 characters long and contain at least one letter and one number',
    });
  }

  try {
    // Check if the email is already registered
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already in use' });
    }

    // Hash the password before saving the user
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      fullName,
      email,
      password: hashedPassword,
    });

    // Save the new user to the database
    await newUser.save();

    // Generate JWT token for the new user
    const token = jwt.sign({ id: newUser._id }, getJwtSecret(), { expiresIn: '7d' });

    // Respond with success message and the token
    res.status(201).json({
      message: 'Signup successful',
      userId: newUser._id,
      token, // Send token in the response
    });
  } catch (error) {
    console.error('Signup error:', error);
    // Respond with a generic error message
    res.status(500).json({
      message: 'An error occurred during signup. Please try again later.',
    });
  }
});

module.exports = router;



