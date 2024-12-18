
// export default Home;
import React, { useEffect, useState } from "react";
import bannerImage from "../assets/banner.jpg"; 
import { Spinner } from 'react-bootstrap'; // Assuming you're using react-bootstrap for spinner

const Home = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/packages");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-r from-sageGreen to-beige p-6 flex flex-col items-center justify-center">
        <Spinner animation="border" variant="light" />
        <h1 className="text-4xl font-semibold text-white mb-6">Loading...</h1>
        <div className="text-lg text-white">Please wait while we fetch your data</div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bannerImage})`,
          backgroundSize: "cover", 
          backgroundPosition: "center",
          zIndex: 0, 
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div> 
      </div>

      <div className="relative z-10 p-6 flex flex-col items-center text-center">
        <h1 className="text-4xl font-semibold text-white mb-8">
          Welcome to the Home Page
        </h1>
        {error ? (
          <p className="text-lg text-red-600 font-semibold">{error}</p>
        ) : (
          <div className="bg-white bg-opacity-80 p-6 rounded-xl shadow-lg w-full max-w-3xl">
            <h2 className="text-2xl font-semibold text-charcoal mb-4">
              Our Latest Travel Packages
            </h2>
            {data && data.message ? (
              <ul className="space-y-4">
                <li className="text-lg text-charcoal">
                  <strong className="font-semibold">Package:</strong> {data.message}
                </li>
              </ul>
            ) : (
              <p className="text-lg text-charcoal">
                No packages available at the moment. Please check back later.
              </p>
            )}
          </div>
        )}
        <button className="mt-8 bg-charcoal text-white text-lg py-2 px-6 rounded-full hover:bg-beige transition duration-300">
          View All Packages
        </button>
      </div>
    </div>
  );
};

export default Home;