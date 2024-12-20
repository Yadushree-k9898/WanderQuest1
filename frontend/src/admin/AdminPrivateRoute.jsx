
// import React, { useEffect, useState } from "react";
// import { Navigate } from "react-router-dom";

// const AdminPrivateRoute = ({ children }) => {
//   const [loading, setLoading] = useState(true);
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     const role = localStorage.getItem("role");

//     if (token && role === "admin") {
//       setIsAuthenticated(true);
//     } else {
//       setIsAuthenticated(false);
//     }

//     setLoading(false); // Set loading to false after the check
//   }, []);

//   // While the authentication check is in progress, show a loading state
//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   // If not authenticated or not an admin, redirect to login page
//   if (!isAuthenticated) {
//     return <Navigate to="/login" replace />;
//   }

//   // If authenticated and is an admin, render the protected component
//   return children;
// };

// export default AdminPrivateRoute;




import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/authContext"; // Use the existing AuthContext

const AdminPrivateRoute = ({ children }) => {
  const { isAuthenticated, userRole } = useAuth(); // Access auth context
  const [loading, setLoading] = useState(true); // Loading state for the initial check

  useEffect(() => {
    // Set loading to false after the first render
    setLoading(false);
  }, []);

  // While loading, show a loading state
  if (loading) {
    return <div>Loading...</div>;
  }

  // If not authenticated or not an admin, redirect to login page
  if (!isAuthenticated || userRole !== "admin") {
    return <Navigate to="/login" replace />;
  }

  // If authenticated and is an admin, render the protected component
  return children;
};

export default AdminPrivateRoute;
    