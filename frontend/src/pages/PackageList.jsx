import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchAllPackages } from "../services/api";

const PackageList = () => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetching packages on component mount
  const getAllPackages = async () => {
    try {
      setLoading(true);
      const data = await fetchAllPackages();
      setPackages(data);
      setError(null); // Clear error on successful fetch
    } catch (error) {
      setError("Failed to fetch packages. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllPackages();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-dotted rounded-full animate-spin mb-4"></div>
          <span className="text-lg font-medium text-charcoal">Loading packages...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <div className="text-center">
          <p className="text-lg text-red-600 mb-4">{error}</p>
          <button
            onClick={getAllPackages}
            className="bg-sage-green text-white px-6 py-2 rounded-lg shadow-md hover:bg-sage-green-dark transition duration-300"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (packages.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <div className="text-center">
          <p className="text-lg text-gray-600">No packages found. Please check back later.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 max-w-6xl">
      <h1 className="text-4xl font-bold text-charcoal mb-8 text-center">
        Available Packages
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {packages.map((pkg) => (
          <div
            key={pkg._id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition hover:-translate-y-2"
          >
            {pkg.image ? (
              <img
                src={pkg.image}
                alt={pkg.title}
                className="w-full h-48 object-cover"
              />
            ) : (
              <div className="w-full h-48 bg-gray-200 flex justify-center items-center">
                <span className="text-gray-500">No Image Available</span>
              </div>
            )}
            <div className="p-6">
              <h2 className="text-xl font-semibold text-charcoal mb-2">
                {pkg.title}
              </h2>
              <p className="text-sm text-gray-700 mb-4 line-clamp-3">
                {pkg.description}
              </p>
              <p className="text-lg font-bold text-charcoal">
                Price: <span className="text-sage-green">${pkg.price}</span>
              </p>
              <div className="mt-4 text-center">
                <Link
                  to={`/packages/${pkg._id}`}
                  className="inline-block bg-sage-green text-white px-4 py-2 rounded-lg hover:bg-sage-green-dark transition duration-300"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PackageList;
