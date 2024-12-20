import React from "react";
import { Link } from "react-router-dom";

const PackageCard = ({ packageData }) => {
  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white rounded-2xl shadow-2xl overflow-hidden transform transition duration-300 hover:-translate-y-2 hover:shadow-3xl backdrop-blur-sm bg-opacity-80">
      {/* Image Section with Overlay */}
      <div className="relative">
        <img
          src={packageData.image}
          alt={packageData.title}
          className="w-full h-56 object-cover transition duration-300 transform hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black opacity-30 hover:opacity-20 transition duration-300"></div>
      </div>

      {/* Content Section */}
      <div className="p-6 space-y-4">
        {/* Package Title */}
        <h3 className="text-2xl font-semibold text-sage-green tracking-wide">
          {packageData.title}
        </h3>

        {/* Package Description */}
        <p className="text-gray-300 text-opacity-90 leading-relaxed">
          {packageData.description}
        </p>

        {/* Package Price */}
        <div className="flex items-center justify-between">
          <p className="text-xl font-bold text-sage-green">
            ${packageData.price}
          </p>
          <div className="text-sm text-gray-400">
            Per Person
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-4 pt-4 border-t border-gray-700">
          {/* View Details Link */}
          <Link
            to={`/package/${packageData._id}`}
            className="flex-1 text-center backdrop-blur-sm bg-white/10 py-3 rounded-lg hover:bg-white/20 transition duration-300 font-medium"
            aria-label={`View details of ${packageData.title}`}
          >
            View Details
          </Link>

          {/* Book Now Button */}
          <Link
            to={`/book/${packageData._id}`}
            className="flex-1 text-center bg-sage-green py-3 rounded-lg hover:bg-opacity-80 transition duration-300 font-medium"
            aria-label={`Book ${packageData.title}`}
          >
            Book Now
          </Link>
        </div>
      </div>

      {/* Subtle Decorative Border */}
      <div className="absolute inset-0 border-2 border-white border-opacity-10 rounded-2xl pointer-events-none"></div>
    </div>
  );
};

export default PackageCard;