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
  const [userRole, setUserRole] = useState(null); // State for user role (admin, user, etc.)

  useEffect(() => {
    try {
      // Check if the user is already logged in from localStorage
      const loggedIn = localStorage.getItem("isLoggedIn") === "true";
      const role = localStorage.getItem("role");

      if (loggedIn) {
        setIsAuthenticated(true);
        setUserRole(role || "user"); // Default to "user" role if none is set
      }
    } catch (error) {
      console.error("Error reading auth data from localStorage:", error);
      logout(); // Reset state in case of errors
    }
  }, []);

  // Login function
  const login = (role = "user") => {
    try {
      localStorage.setItem("isLoggedIn", "true"); // Store login status
      localStorage.setItem("role", role); // Store user's role
      setIsAuthenticated(true);
      setUserRole(role);
    } catch (error) {
      console.error("Error saving login data to localStorage:", error);
    }
  };

  // Logout function
  const logout = () => {
    try {
      localStorage.removeItem("isLoggedIn"); // Remove login status
      localStorage.removeItem("role"); // Remove role from localStorage
    } catch (error) {
      console.error("Error removing auth data from localStorage:", error);
    } finally {
      setIsAuthenticated(false);
      setUserRole(null); // Reset role
    }
  };

  // Provide context to children
  return (
    <AuthContext.Provider value={{ isAuthenticated, userRole, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
