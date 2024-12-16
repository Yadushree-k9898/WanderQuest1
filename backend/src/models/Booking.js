const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    numTravelers: { type: Number, required: true },
    specialRequests: { type: String },
    packageId: { type: mongoose.Schema.Types.ObjectId, ref: 'Package', required: true },
    bookingDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Booking', BookingSchema);
