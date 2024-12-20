import React from "react";
import { useAuth } from "../contexts/authContext";
import { useNavigate, Link } from "react-router-dom";

const Dashboard = () => {
  const { logout, isAuthenticated, user } = useAuth();
  const navigate = useNavigate();

  // Redirect to login page if not authenticated
  if (!isAuthenticated) {
    navigate("/login");
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid md:grid-cols-3 gap-8">
          {/* User Profile Section */}
          <div className="md:col-span-1 backdrop-blur-sm bg-white/10 rounded-2xl p-6 border border-white/10 shadow-2xl">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 bg-sage-green/30 rounded-full flex items-center justify-center">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-12 w-12 text-sage-green" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zm-4 7a7 7 0 00-7 7h14a7 7 0 00-7-7z" 
                  />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-sage-green mb-2">
                {user?.name || 'User'}
              </h2>
              <p className="text-gray-400 mb-4">{user?.email}</p>
            </div>

            <div className="space-y-4 mt-6">
              <Link
                to="/profile"
                className="block w-full text-center py-3 backdrop-blur-sm bg-white/10 rounded-lg hover:bg-white/20 transition duration-300"
              >
                Edit Profile
              </Link>
              <button
                onClick={() => logout()}
                className="w-full py-3 bg-red-600/20 text-red-400 rounded-lg hover:bg-red-600/30 transition duration-300"
              >
                Logout
              </button>
            </div>
          </div>

          {/* Dashboard Content */}
          <div className="md:col-span-2 space-y-6">
            <div className="backdrop-blur-sm bg-white/10 rounded-2xl p-6 border border-white/10 shadow-2xl">
              <h1 className="text-3xl font-bold text-sage-green mb-4">
                Welcome to your Dashboard
              </h1>
              <p className="text-gray-300 mb-6">
                This is a protected area where you can manage your account, 
                view your bookings, and access personalized features.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <Link
                  to="/bookings"
                  className="block p-4 backdrop-blur-sm bg-white/5 rounded-lg hover:bg-white/10 transition duration-300 transform hover:-translate-y-1 text-center"
                >
                  <div className="text-xl font-semibold text-sage-green mb-2">
                    My Bookings
                  </div>
                  <p className="text-gray-400 text-sm">
                    View and manage your travel bookings
                  </p>
                </Link>

                <Link
                  to="/trips"
                  className="block p-4 backdrop-blur-sm bg-white/5 rounded-lg hover:bg-white/10 transition duration-300 transform hover:-translate-y-1 text-center"
                >
                  <div className="text-xl font-semibold text-sage-green mb-2">
                    Upcoming Trips
                  </div>
                  <p className="text-gray-400 text-sm">
                    Explore your planned adventures
                  </p>
                </Link>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="backdrop-blur-sm bg-white/10 rounded-2xl p-6 border border-white/10 shadow-2xl">
              <h2 className="text-2xl font-semibold text-sage-green mb-4">
                Recent Activity
              </h2>
              <div className="space-y-4">
                <div className="bg-white/5 p-4 rounded-lg">
                  <p className="text-gray-300">
                    You booked a trip to Bali on <span className="text-sage-green">January 15, 2024</span>
                  </p>
                </div>
                <div className="bg-white/5 p-4 rounded-lg">
                  <p className="text-gray-300">
                    Profile updated on <span className="text-sage-green">February 3, 2024</span>
                  </p>
                </div>
              </div>
            </div>
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

export default Dashboard;