// // AdminPrivateRoute.js
// import React from "react";
// import { Navigate } from "react-router-dom";

// const AdminPrivateRoute = ({ children }) => {
//   // Retrieve the token and role from localStorage
//   const token = localStorage.getItem("token");
//   const role = localStorage.getItem("role"); // Ensure the role is stored as "role"

//   // Check if the user is authenticated and has an "admin" role
//   if (!token || role !== "admin") {
//     // If not authenticated or not an admin, redirect to the login page
//     return <Navigate to="/login" replace />;
//   }

//   // If authenticated and is an admin, render the protected component
//   return children;
// };

// export default AdminPrivateRoute;




import React from "react";
import { Navigate } from "react-router-dom";

const AdminPrivateRoute = ({ children }) => {
  // Retrieve the token and role from localStorage
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  // Check if the token and role are valid
  const isAuthenticated = token && role === "admin";

  // If the user is not authenticated or not an admin, redirect to login page
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // If authenticated and is an admin, render the protected component
  return children;
};

export default AdminPrivateRoute;
