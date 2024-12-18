

// import React, { createContext, useState, useContext, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// // Create the context
// const AuthContext = createContext();

// // Custom hook to use the auth context
// export const useAuth = () => {
//   return useContext(AuthContext);
// };

// // AuthProvider component to wrap the app
// export const AuthProvider = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Check if the user is already logged in from localStorage
//     const loggedIn = localStorage.getItem("isLoggedIn");
//     if (loggedIn === "true") {
//       setIsAuthenticated(true);
//     }
//   }, []);

//   const login = () => {
//     localStorage.setItem("isLoggedIn", "true"); // Store login status
//     setIsAuthenticated(true);
//     navigate("/dashboard"); // Redirect after login
//   };

//   const logout = () => {
//     localStorage.removeItem("isLoggedIn"); // Remove login status
//     setIsAuthenticated(false);
//     navigate("/login"); // Redirect to login page after logout
//   };

//   return (
//     <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };



import React, { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Create the context
const AuthContext = createContext();

// Custom hook to use the auth context
export const useAuth = () => {
  return useContext(AuthContext);
};

// AuthProvider component to wrap the app
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is already logged in from localStorage
    const loggedIn = localStorage.getItem("isLoggedIn");
    if (loggedIn === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const login = () => {
    localStorage.setItem("isLoggedIn", "true"); // Store login status
    setIsAuthenticated(true);
    navigate("/dashboard"); // Redirect after login
  };

  const logout = () => {
    localStorage.removeItem("isLoggedIn"); // Remove login status
    setIsAuthenticated(false);
    navigate("/login"); // Redirect to login page after logout
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
