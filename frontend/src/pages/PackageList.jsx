import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchAllPackages } from "../services/api";

const PackageList = () => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getAllPackages = async () => {
      try {
        setLoading(true);
        const data = await fetchAllPackages();
        setPackages(data);
      } catch (error) {
        setError("Failed to fetch packages. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    getAllPackages();
  }, []);

  if (loading) {
    return (
      <div className="text-center text-lg text-charcoal">
        <span>Loading...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-lg text-red-600">
        <span>{error}</span>
      </div>
    );
  }

  if (packages.length === 0) {
    return (
      <div className="text-center text-lg text-red-600">
        <span>No packages found.</span>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <h1 className="text-4xl font-semibold text-charcoal mb-6">
        Available Packages
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {packages.map((pkg) => (
          <div key={pkg._id} className="bg-beige rounded-lg shadow-xl p-4">
            {pkg.image ? (
              <img
                src={pkg.image}
                alt={pkg.title}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
            ) : (
              <div className="w-full h-64 bg-gray-200 rounded-lg mb-4 flex justify-center items-center">
                <span className="text-lg text-gray-500">
                  No Image Available
                </span>
              </div>
            )}
            <h2 className="text-2xl font-semibold text-charcoal mb-2">
              {pkg.title}
            </h2>
            <p className="text-lg text-charcoal mb-4">{pkg.description}</p>
            <p className="text-xl font-bold text-charcoal">
              Price: <span className="text-sage-green">${pkg.price}</span>
            </p>
            <div className="mt-4 flex justify-center">
              <Link
                to={`/packages/${pkg._id}`}
                className="bg-sage-green text-white px-6 py-3 rounded-lg shadow-md hover:bg-gunmetal-gray transition duration-300"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PackageList;
