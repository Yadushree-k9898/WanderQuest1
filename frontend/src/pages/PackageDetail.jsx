import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPackageById } from "../services/api";

const PackageDetail = () => {
  const { id } = useParams();
  const [packageDetail, setPackageDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPackageDetail = async () => {
      try {
        setLoading(true);
        const data = await fetchPackageById(id);
        setPackageDetail(data);
      } catch (error) {
        setError("Failed to fetch package details. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    getPackageDetail();
  }, [id]);

  if (loading) {
    return (
      <div className="text-center text-lg text-charcoal">
        <span>Loading...</span>
        {/* Optionally add a spinner or animation here */}
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

  if (!packageDetail) {
    return (
      <div className="text-center text-lg text-red-600">
        <span>No package found.</span>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 max-w-3xl bg-beige rounded-lg shadow-xl mt-10">
      <h1 className="text-4xl font-semibold text-charcoal mb-6">{packageDetail.title}</h1>
      {packageDetail.image ? (
        <img
          src={packageDetail.image}
          alt={packageDetail.title}
          className="w-full h-80 object-cover rounded-lg shadow-md mb-6"
        />
      ) : (
        <div className="w-full h-80 bg-gray-200 rounded-lg shadow-md mb-6 flex justify-center items-center">
          <span className="text-lg text-gray-500">No Image Available</span>
        </div>
      )}
      <p className="text-lg text-charcoal mb-6">{packageDetail.description}</p>
      <p className="text-xl font-bold text-charcoal">
        Price: <span className="text-sage-green">${packageDetail.price}</span>
      </p>

      <div className="mt-8 flex justify-center">
        <button className="bg-sage-green text-white px-6 py-3 rounded-lg shadow-md hover:bg-gunmetal-gray transition duration-300">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default PackageDetail;
