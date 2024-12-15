
// AddPackageForm.js
import React from "react";
import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-sageGreen via-beige to-charcoal p-8 flex flex-col items-center justify-center">
      <div className="container mx-auto max-w-3xl bg-beige p-8 rounded-3xl shadow-xl transform transition-all duration-500 hover:scale-105">
        <h1 className="text-4xl font-extrabold text-charcoal mb-8 text-center tracking-wide">
          Admin Panel
        </h1>
        <div className="space-y-6">
          <Link
            to="/admin/packages"
            className="block text-2xl font-semibold text-gunmetalGray hover:text-charcoal hover:underline transition duration-300 transform hover:scale-105"
          >
            Manage Packages
          </Link>
          <Link
            to="/admin/bookings"
            className="block text-2xl font-semibold text-gunmetalGray hover:text-charcoal hover:underline transition duration-300 transform hover:scale-105"
          >
            View Bookings
          </Link>
        </div>
        <footer className="mt-12 text-center text-gunmetalGray text-sm">
          <p>&copy; 2024 Travel Agency | Admin Panel</p>
        </footer>
      </div>
    </div>
  );
};

export default Admin;
