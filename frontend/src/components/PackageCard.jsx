import React from "react";
import { Link } from "react-router-dom";

const PackageCard = ({ packageData }) => {
  return (
    <div className="bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl">
      {/* Image Section */}
      <img
        src={packageData.image}
        alt={packageData.title}
        className="w-full h-48 object-cover mb-4 rounded-t-lg"
        loading="lazy" // Lazy load the image for performance
      />
      
      <div className="p-6">
        {/* Package Title */}
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">
          {packageData.title}
        </h3>
        
        {/* Package Description */}
        <p className="text-gray-600 mb-4">
          {packageData.description}
        </p>
        
        {/* Package Price */}
        <p className="text-lg font-bold text-indigo-600 mb-4">
          ${packageData.price}
        </p>
        
        <div className="flex space-x-4">
          {/* View Details Link */}
          <Link
            to={`/package/${packageData._id}`} // Use _id for consistency with MongoDB
            className="inline-block text-blue-600 hover:text-blue-800 font-medium text-lg transition duration-300"
            aria-label={`View details of ${packageData.title}`} // Accessibility enhancement
          >
            View Details
          </Link>

          {/* Book Now Button */}
          <Link
            to={`/book/${packageData._id}`} // Use _id for consistency with MongoDB
            className="inline-block bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-800 font-medium text-lg transition duration-300"
            aria-label={`Book ${packageData.title}`} // Accessibility enhancement
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
