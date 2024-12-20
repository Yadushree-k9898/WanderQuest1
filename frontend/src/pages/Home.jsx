



// src/pages/Home.js
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
 

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

  // Loading State
  if (loading) {
    return (
      <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-sage-green to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-sage-green to-transparent rounded-full blur-3xl"></div>
        </div>
        
        <div className="text-center z-10">
          <div 
            className="w-16 h-16 mx-auto mb-6 border-4 border-t-sage-green border-l-sage-green border-r-sage-green border-b-transparent rounded-full animate-spin"
          ></div>
          <h1 className="text-3xl font-bold text-sage-green mb-4">Loading...</h1>
          <p className="text-gray-300">Please wait while we prepare your adventure</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Use Navbar Component */}
    

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-6">
            <h1 className="text-5xl font-bold text-sage-green tracking-wide mb-6">
              Discover Your Next Adventure
            </h1>
            
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Embark on a journey of a lifetime with WanderQuest. 
              We curate extraordinary travel experiences that transform 
              your wanderlust into unforgettable memories.
            </p>
            
            <div className="flex space-x-4">
              <Link
                to="/packages"
                className="inline-block px-6 py-3 bg-sage-green text-white rounded-lg hover:bg-opacity-80 transition duration-300 transform hover:-translate-y-1"
              >
                Explore Packages
              </Link>
              <Link
                to="/contact"
                className="inline-block px-6 py-3 backdrop-blur-sm bg-white/10 text-white rounded-lg hover:bg-white/20 transition duration-300 transform hover:-translate-y-1"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Featured Packages */}
          <div className="backdrop-blur-sm bg-white/10 rounded-2xl p-8 border border-white/10 shadow-2xl">
            <h2 className="text-2xl font-semibold text-sage-green mb-6">
              Our Latest Packages
            </h2>

            {error ? (
              <div className="text-red-400 bg-red-900/20 p-4 rounded-lg">
                <p className="font-medium">Error: {error}</p>
                <p className="text-sm">Unable to load packages at the moment</p>
              </div>
            ) : data && data.message ? (
              <div className="space-y-4">
                <div className="bg-white/5 p-4 rounded-lg">
                  <p className="text-gray-300">
                    <strong className="text-sage-green">Package:</strong> {data.message}
                  </p>
                </div>
              </div>
            ) : (
              <div className="text-gray-400 bg-white/5 p-4 rounded-lg">
                <p>No packages available at the moment.</p>
                <p>Check back soon for exciting new adventures!</p>
              </div>
            )}

            <Link
              to="/packages"
              className="block mt-6 text-center py-3 backdrop-blur-sm bg-white/10 rounded-lg hover:bg-white/20 transition duration-300"
            >
              View All Packages
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-sage-green to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-sage-green to-transparent rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};

export default Home;
