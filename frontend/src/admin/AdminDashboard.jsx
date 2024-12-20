
// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// // Placeholder function to simulate fetching package statistics and bookings
// const fetchPackageStats = () => {
//   // Replace with an actual API call
//   return {
//     totalPackages: 5,
//     totalBookings: 120,
//   };
// };

// const AdminDashboard = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [packageStats, setPackageStats] = useState({ totalPackages: 0, totalBookings: 0 });
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Check if JWT token is present in localStorage
//     const token = localStorage.getItem("adminToken");

//     if (!token) {
//       navigate("/admin/login"); // Redirect to login page if not authenticated
//     } else {
//       setIsAuthenticated(true);
//       fetchPackageStatistics();
//     }

//     setLoading(false);
//   }, [navigate]);

//   // Simulate fetching package statistics and handle errors
//   const fetchPackageStatistics = async () => {
//     try {
//       // Replace this with your actual API call
//       const stats = fetchPackageStats();
//       setPackageStats(stats);
//     } catch (err) {
//       setError("Failed to load package statistics.");
//     }
//   };

//   if (loading) {
//     return <div>Loading...</div>; // Loading spinner or message
//   }

//   if (error) {
//     return <div className="text-red-600">{error}</div>; // Error message
//   }

//   return (
//     <div className="admin-dashboard p-6">
//       <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {/* Manage Packages Section */}
//         <div className="card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl">
//           <h2 className="text-xl font-semibold mb-4">Manage Tour Packages</h2>
//           <p className="text-gray-700 mb-4">
//             Add, update, or delete tour packages to manage available tours.
//           </p>
//           <Link to="/admin/manage-packages" className="text-blue-600 hover:underline">
//             Manage Packages
//           </Link>
//         </div>

//         {/* Add New Package Section */}
//         <div className="card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl">
//           <h2 className="text-xl font-semibold mb-4">Add New Package</h2>
//           <p className="text-gray-700 mb-4">
//             Add new tour packages to offer exciting new adventures.
//           </p>
//           <Link to="/admin/add-package" className="text-blue-600 hover:underline">
//             Add Package
//           </Link>
//         </div>

//         {/* View Bookings Section */}
//         <div className="card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl">
//           <h2 className="text-xl font-semibold mb-4">View Bookings</h2>
//           <p className="text-gray-700 mb-4">
//             Review and manage customer bookings for the available packages.
//           </p>
//           <Link to="/admin/view-bookings" className="text-blue-600 hover:underline">
//             View Bookings
//           </Link>
//         </div>
//       </div>

//       {/* View Package Statistics Section */}
//       <div className="mt-8">
//         <h2 className="text-xl font-semibold mb-4">Package Statistics</h2>
//         <p className="text-gray-700 mb-4">
//           Monitor the status of your tour packages, including bookings and availability.
//         </p>
//         <div className="bg-white p-6 rounded-lg shadow-lg">
//           <p>Total Packages: {packageStats.totalPackages}</p>
//           <p>Total Bookings: {packageStats.totalBookings}</p>
//         </div>
//       </div>

//       {/* Optional: Add Analytics Section */}
//       <div className="mt-8">
//         <h2 className="text-xl font-semibold mb-4">Analytics</h2>
//         <p className="text-gray-700 mb-4">
//           View insights on booking trends, most popular packages, revenue, and more.
//         </p>
//         {/* Placeholder for future analytics */}
//         <div className="bg-white p-6 rounded-lg shadow-lg">
//           <p>Analytics and charts related to bookings, revenue, and package performance will be displayed here.</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;




import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { fetchPackages } from "../services/api";  // Import the fetchPackages function

const AdminDashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [packageStats, setPackageStats] = useState({ totalPackages: 0, totalBookings: 0 });
  const navigate = useNavigate();

  useEffect(() => {
    // Check if JWT token is present in localStorage
    const token = localStorage.getItem("adminToken");

    if (!token) {
      navigate("/admin/login"); // Redirect to login page if not authenticated
    } else {
      setIsAuthenticated(true);
      fetchPackageStatistics();
    }

    setLoading(false);
  }, [navigate]);

  // Fetch package statistics by getting all packages and calculating stats
  const fetchPackageStatistics = async () => {
    try {
      // Fetch all packages
      const data = await fetchPackages();
      if (data.success) {
        setPackageStats({
          totalPackages: data.packages.length, // Count the total number of packages
          totalBookings: data.packages.reduce((acc, pkg) => acc + pkg.bookings, 0), // Sum of all bookings for packages
        });
      } else {
        setError("Failed to load package statistics.");
      }
    } catch (err) {
      setError("Failed to load package statistics.");
    }
  };

  if (loading) {
    return <div>Loading...</div>; // Loading spinner or message
  }

  if (error) {
    return <div className="text-red-600">{error}</div>; // Error message
  }

  return (
    <div className="admin-dashboard p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Manage Packages Section */}
        <div className="card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl">
          <h2 className="text-xl font-semibold mb-4">Manage Tour Packages</h2>
          <p className="text-gray-700 mb-4">
            Add, update, or delete tour packages to manage available tours.
          </p>
          <Link to="/admin/manage-packages" className="text-blue-600 hover:underline">
            Manage Packages
          </Link>
        </div>

        {/* Add New Package Section */}
        <div className="card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl">
          <h2 className="text-xl font-semibold mb-4">Add New Package</h2>
          <p className="text-gray-700 mb-4">
            Add new tour packages to offer exciting new adventures.
          </p>
          <Link to="/admin/add-package" className="text-blue-600 hover:underline">
            Add Package
          </Link>
        </div>

        {/* View Bookings Section */}
        <div className="card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl">
          <h2 className="text-xl font-semibold mb-4">View Bookings</h2>
          <p className="text-gray-700 mb-4">
            Review and manage customer bookings for the available packages.
          </p>
          <Link to="/admin/view-bookings" className="text-blue-600 hover:underline">
            View Bookings
          </Link>
        </div>
      </div>

      {/* View Package Statistics Section */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Package Statistics</h2>
        <p className="text-gray-700 mb-4">
          Monitor the status of your tour packages, including bookings and availability.
        </p>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <p>Total Packages: {packageStats.totalPackages}</p>
          <p>Total Bookings: {packageStats.totalBookings}</p>
        </div>
      </div>

      {/* Optional: Add Analytics Section */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Analytics</h2>
        <p className="text-gray-700 mb-4">
          View insights on booking trends, most popular packages, revenue, and more.
        </p>
        {/* Placeholder for future analytics */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <p>Analytics and charts related to bookings, revenue, and package performance will be displayed here.</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
