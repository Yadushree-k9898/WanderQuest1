import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchPackages, deletePackage } from "../services/api"; // Make sure deletePackage is in api.js

const ManagePackages = () => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getPackages = async () => {
      try {
        const data = await fetchPackages(); // Fetch all packages
        setPackages(data);
      } catch (err) {
        setError("Failed to load packages.");
      } finally {
        setLoading(false);
      }
    };

    getPackages();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deletePackage(id); // Call deletePackage from api.js
      setPackages(packages.filter(pkg => pkg._id !== id)); // Remove deleted package from the state
    } catch (err) {
      setError("Failed to delete the package.");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Manage Packages</h1>
      <div className="mb-4">
        <Link
          to="/admin/add-package"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Add New Package
        </Link>
      </div>

      {/* Packages List */}
      <div className="overflow-x-auto shadow-lg rounded-lg bg-white">
        <table className="min-w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100">
            <tr>
              <th className="px-6 py-3">Title</th>
              <th className="px-6 py-3">Price</th>
              <th className="px-6 py-3">Available Dates</th>
              <th className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {packages.map((pkg) => (
              <tr key={pkg._id} className="border-b">
                <td className="px-6 py-4">{pkg.title}</td>
                <td className="px-6 py-4">{pkg.price}</td>
                <td className="px-6 py-4">{pkg.availableDates}</td>
                <td className="px-6 py-4">
                  <Link
                    to={`/admin/package/${pkg._id}`}
                    className="text-blue-600 hover:underline mr-4"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(pkg._id)}
                    className="text-red-600 hover:underline"
                  >
                    Delete
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

export default ManagePackages;
