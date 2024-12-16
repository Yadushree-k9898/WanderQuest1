const Booking = require('../models/Booking');

// Create a booking
exports.createBooking = async (req, res) => {
    try {
        const { name, email, phone, numTravelers, specialRequests, packageId } = req.body;

        const newBooking = new Booking({
            name,
            email,
            phone,
            numTravelers,
            specialRequests,
            packageId
        });

        const booking = await newBooking.save();
        res.json(booking);
    } catch (err) {
        res.status(500).send('Server Error');
    }
};
