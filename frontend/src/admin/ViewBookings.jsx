import React, { useEffect, useState } from "react";
import { fetchBookings } from "../services/api"; // Make sure fetchBookings is in api.js

const ViewBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch bookings on component mount
  useEffect(() => {
    const getBookings = async () => {
      try {
        const data = await fetchBookings(); // Fetch all bookings
        setBookings(data);
      } catch (err) {
        setError("Failed to load bookings.");
      } finally {
        setLoading(false);
      }
    };

    getBookings();
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter bookings based on the search term (e.g., by customer name or package)
  const filteredBookings = bookings.filter((booking) =>
    booking.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    booking.packageTitle.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">View Bookings</h1>

      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search by customer name or package"
          className="p-2 border rounded"
        />
      </div>

      {/* Bookings List */}
      <div className="overflow-x-auto shadow-lg rounded-lg bg-white">
        <table className="min-w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100">
            <tr>
              <th className="px-6 py-3">Customer Name</th>
              <th className="px-6 py-3">Package Title</th>
              <th className="px-6 py-3">Booking Date</th>
              <th className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredBookings.map((booking) => (
              <tr key={booking._id} className="border-b">
                <td className="px-6 py-4">{booking.customerName}</td>
                <td className="px-6 py-4">{booking.packageTitle}</td>
                <td className="px-6 py-4">{new Date(booking.bookingDate).toLocaleDateString()}</td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => alert("View details")} // Add logic to view booking details
                    className="text-blue-600 hover:underline mr-4"
                  >
                    View
                  </button>
                  <button
                    onClick={() => alert("Cancel booking")} // Add logic to cancel booking
                    className="text-red-600 hover:underline"
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewBookings;
