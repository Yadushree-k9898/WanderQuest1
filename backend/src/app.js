const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const packageRoutes = require('./routes/packageRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const adminRoutes = require('./routes/adminRoutes');
const authMiddleware = require('./middleware/authMiddleware');

const app = express();

connectDB(); // Connect to database
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/packages', packageRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/admin', authMiddleware, adminRoutes);

module.exports = app;
