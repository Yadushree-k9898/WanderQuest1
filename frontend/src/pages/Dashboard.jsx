import React from "react";
import { useAuth } from "../contexts/authContext"; // Import the auth context
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  // Redirect to login page if not authenticated
  if (!isAuthenticated) {
    navigate("/login");
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 sm:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-800">Welcome to your Dashboard</h1>
        <p className="mt-4 text-gray-600">This is a protected area. You can add your admin tools or other content here.</p>

        <div className="mt-6">
          <button
            onClick={() => logout()} // Call logout function from context
            className="px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
