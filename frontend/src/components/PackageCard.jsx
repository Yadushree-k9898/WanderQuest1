import React from "react";
import { Link } from "react-router-dom";

const PackageCard = ({ packageData }) => {
  return (
    <div className="bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl">
      <img
        src={packageData.image}
        alt={packageData.title}
        className="w-full h-48 object-cover mb-4 rounded-t-lg"
      />
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">
          {packageData.title}
        </h3>
        <p className="text-gray-600 mb-4">{packageData.description}</p>
        <p className="text-lg font-bold text-indigo-600 mb-4">
          ${packageData.price}
        </p>
        <Link
          to={`/package/${packageData.id}`}
          className="inline-block text-blue-600 hover:text-blue-800 font-medium text-lg transition duration-300"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default PackageCard;
