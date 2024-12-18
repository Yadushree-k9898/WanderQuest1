import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchAllPackages } from "../services/api"; // Ensure this function is correctly fetching data from the backend

const PackageList = () => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch all packages when component mounts
    const getAllPackages = async () => {
      try {
        setLoading(true);  // Set loading state to true before fetching data
        const data = await fetchAllPackages();  // Fetch data from the API
        setPackages(data);  // Update state with fetched data
      } catch (error) {
        setError("Failed to fetch packages. Please try again later.");  // Set error message if API call fails
      } finally {
        setLoading(false);  // Set loading to false after fetching
      }
    };

    getAllPackages();  // Trigger the fetch function
  }, []);  // Empty dependency array means this runs only once when the component mounts

  // Loading state rendering
  if (loading) {
    return (
      <div className="text-center text-lg text-gray-700">
        <span>Loading packages...</span>
      </div>
    );
  }

  // Error handling rendering
  if (error) {
    return (
      <div className="text-center text-lg text-red-600">
        <span>{error}</span>
      </div>
    );
  }

  // If no packages are found
  if (packages.length === 0) {
    return (
      <div className="text-center text-lg text-red-600">
        <span>No packages available at the moment.</span>
      </div>
    );
  }

  // Main content when packages are loaded successfully
  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <h1 className="text-4xl font-semibold text-gray-800 mb-6">
        Available Packages
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {packages.map((pkg) => (
          <div key={pkg._id} className="bg-white rounded-lg shadow-xl p-4">
            {/* Displaying Image if available */}
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

            {/* Package Title */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              {pkg.title}
            </h2>

            {/* Package Description */}
            <p className="text-lg text-gray-600 mb-4">{pkg.description}</p>

            {/* Price */}
            <p className="text-xl font-bold text-gray-800">
              Price: <span className="text-green-600">${pkg.price}</span>
            </p>

            {/* View Details Button */}
            <div className="mt-4 flex justify-center">
              <Link
                to={`/packages/${pkg._id}`}  // Link to the individual package details
                className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-800 transition duration-300"
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
