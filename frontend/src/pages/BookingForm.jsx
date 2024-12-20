
import React, { useState } from "react";
import { bookPackage } from "../services/api"; // Ensure the API service exists and works correctly

const BookingForm = ({ packageId }) => {
  const [userData, setUserData] = useState({ name: "", email: "" });
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    if (!userData.name.trim() || !userData.email.trim()) {
      setStatus("Name and email are required.");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(userData.email)) {
      setStatus("Please enter a valid email address.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");
    if (!validateForm()) return;

    setIsSubmitting(true);
    setStatus("Booking in progress...");

    try {
      const result = await bookPackage(packageId, userData);

      if (result && result.message === "Package booked successfully") {
        setStatus("Booking successful!");
        setUserData({ name: "", email: "" }); // Clear form
      } else {
        setStatus("Booking failed. Please try again.");
      }
    } catch (error) {
      setStatus("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium">
          Name:
        </label>
        <input
          type="text"
          id="name"
          value={userData.name}
          onChange={(e) => setUserData({ ...userData, name: e.target.value })}
          className="block w-full mt-1 p-2 border rounded"
          placeholder="Enter your name"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium">
          Email:
        </label>
        <input
          type="email"
          id="email"
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
          className="block w-full mt-1 p-2 border rounded"
          placeholder="Enter your email"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Booking..." : "Book Now"}
      </button>
      <p className="mt-2 text-sm text-red-600">{status}</p>
    </form>
  );
};

export default BookingForm;
