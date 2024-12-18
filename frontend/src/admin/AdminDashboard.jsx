import React from "react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Manage Packages Section */}
        <div className="card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl">
          <h2 className="text-xl font-semibold mb-4">Manage Tour Packages</h2>
          <p className="text-gray-700 mb-4">Add, update, or delete tour packages.</p>
          <Link
            to="/admin/manage-packages"
            className="text-blue-600 hover:underline"
          >
            Manage Packages
          </Link>
        </div>

        {/* Add New Package Section */}
        <div className="card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl">
          <h2 className="text-xl font-semibold mb-4">Add New Package</h2>
          <p className="text-gray-700 mb-4">Add new tour packages to the system.</p>
          <Link
            to="/admin/add-package"
            className="text-blue-600 hover:underline"
          >
            Add Package
          </Link>
        </div>

        {/* View Bookings Section */}
        <div className="card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl">
          <h2 className="text-xl font-semibold mb-4">View Bookings</h2>
          <p className="text-gray-700 mb-4">View and manage customer bookings.</p>
          <Link
            to="/admin/view-bookings"
            className="text-blue-600 hover:underline"
          >
            View Bookings
          </Link>
        </div>
      </div>

      {/* Optionally, add analytics or statistics section */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Analytics</h2>
        <p className="text-gray-700 mb-4">
          Monitor booking statistics, package popularity, and more.
        </p>
        {/* Placeholder for future analytics */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <p>Analytics and charts will be displayed here.</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
