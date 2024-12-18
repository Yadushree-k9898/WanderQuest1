const mongoose = require("mongoose");

const PackageSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  availableDates: {
    type: [
      {
        startDate: { type: Date, required: true },
        endDate: { type: Date, required: true },
      },
    ],
    required: true,
    validate: {
      // Validate that each date in availableDates is a valid Date object and that endDate >= startDate
      validator: function (dates) {
        return dates.every(
          (date) =>
            date.startDate instanceof Date &&
            date.endDate instanceof Date &&
            date.endDate >= date.startDate // Ensure endDate is greater than or equal to startDate
        );
      },
      message: "Each date in availableDates must be a valid Date object, and endDate must be after or equal to startDate.",
    },
  },
  image: { type: String, required: true },
});

// Middleware to ensure dates are always stored as Date objects
PackageSchema.pre("save", function (next) {
  if (this.availableDates && Array.isArray(this.availableDates)) {
    this.availableDates = this.availableDates.map((date) => ({
      startDate: new Date(date.startDate), // Convert to Date object if not already
      endDate: new Date(date.endDate),
    }));
  }
  next();
});

// Create and export the model
module.exports = mongoose.model("Package", PackageSchema);
