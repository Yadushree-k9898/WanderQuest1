
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const validator = require('validator');

// Define User Schema
const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, 'Full Name is required'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      lowercase: true,
      validate: {
        validator: (value) => validator.isEmail(value), // Ensure the email is valid
        message: '{VALUE} is not a valid email address',
      },
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      minlength: [6, 'Password must be at least 6 characters long'],
    },
    // Optionally add other fields like role, profile picture, etc.
  },
  { timestamps: true }
);

// Hash password before saving to the database (only if password is new or modified)
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next(); // Skip hashing if the password is not modified

  try {
    const salt = await bcrypt.genSalt(10); // Generate salt
    this.password = await bcrypt.hash(this.password, salt); // Hash the password
    next(); // Proceed to save
  } catch (error) {
    next(error); // Pass the error to the next middleware (global error handler)
  }
});

// Method to compare passwords
userSchema.methods.comparePassword = async function (candidatePassword) {
  try {
    const isMatch = await bcrypt.compare(candidatePassword, this.password); // Compare passwords
    return isMatch;
  } catch (error) {
    console.error('Error comparing passwords:', error); // Log error for debugging
    throw new Error('Error comparing passwords');
  }
};

// Add custom error handling for validation and unique constraint
userSchema.post('save', (error, doc, next) => {
  if (error.name === 'MongoError' && error.code === 11000) {
    next(new Error('Email is already in use')); // Handle unique email error
  } else if (error.name === 'ValidationError') {
    next(new Error(error.message)); // Handle general validation errors
  } else {
    next(error); // Other errors, pass them to the next handler
  }
});

// Export the User model
module.exports = mongoose.model('User', userSchema);
