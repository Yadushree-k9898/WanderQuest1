import React, { useState } from "react";
import { bookPackage } from "../services/api";

const BookingForm = ({ packageId }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    numTravelers: 1,
    specialRequests: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const bookingData = await bookPackage(formData, packageId);
      alert("Booking Successful");
      setFormData({
        name: "",
        email: "",
        phone: "",
        numTravelers: 1,
        specialRequests: "",
      });
    } catch (err) {
      setError("Booking failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-sageGreen p-6 rounded-lg shadow-md space-y-4">
      {error && <div className="text-red-600">{error}</div>}

      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        className="border border-gunmetalGray p-2 w-full rounded"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        className="border border-gunmetalGray p-2 w-full rounded"
        required
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
        className="border border-gunmetalGray p-2 w-full rounded"
        required
      />
      <input
        type="number"
        name="numTravelers"
        placeholder="Number of Travelers"
        value={formData.numTravelers}
        onChange={handleChange}
        min="1"
        className="border border-gunmetalGray p-2 w-full rounded"
        required
      />
      <textarea
        name="specialRequests"
        placeholder="Special Requests"
        value={formData.specialRequests}
        onChange={handleChange}
        className="border border-gunmetalGray p-2 w-full rounded"
      />
      <button
        type="submit"
        className="bg-charcoal text-white p-2 rounded hover:bg-gunmetalGray"
        disabled={loading}
      >
        {loading ? "Booking..." : "Submit"}
      </button>
    </form>
  );
};

export default BookingForm;
