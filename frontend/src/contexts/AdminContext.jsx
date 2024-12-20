import React, { createContext, useState, useContext, useEffect } from "react";

// Create the context
const AuthContext = createContext();

// Custom hook to use the auth context
export const useAuth = () => {
  return useContext(AuthContext);
};

// AuthProvider component to wrap the app
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null); // New state for user role (admin, user, etc.)

  useEffect(() => {
    // Check if the user is already logged in from localStorage
    const loggedIn = localStorage.getItem("isLoggedIn");
    const role = localStorage.getItem("role"); // Get the user's role from localStorage

    if (loggedIn === "true") {
      setIsAuthenticated(true);
      setUserRole(role); // Set the user's role from localStorage
    }
  }, []);

  // Login function
  const login = (role = "user") => {
    localStorage.setItem("isLoggedIn", "true"); // Store login status
    localStorage.setItem("role", role); // Store user's role
    setIsAuthenticated(true);
    setUserRole(role);
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem("isLoggedIn"); // Remove login status
    localStorage.removeItem("role"); // Remove role from localStorage
    setIsAuthenticated(false);
    setUserRole(null); // Reset role
  };

  // Provide context to children
  return (
    <AuthContext.Provider value={{ isAuthenticated, userRole, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
