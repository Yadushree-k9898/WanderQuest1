
import React, { useState } from "react";
import { Mail, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/authContext"; // Import auth context
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false); // Loading state
  const { setUser } = useAuth(); // Use auth context to set logged-in user and token
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(""); // Clear any previous message
    setLoading(true); // Set loading to true

    // Input validation
    if (!formData.email || !formData.password) {
      setMessage("Please provide both email and password.");
      setLoading(false); // Stop loading after validation
      return;
    }

    // Simple email validation (could be improved)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setMessage("Invalid email format.");
      setLoading(false); // Stop loading after validation
      return;
    }

    try {
      // API call to login
      const response = await axios.post("/api/auth/login", formData);

      if (response.data.token) {
        // On success, save user info and token to context
        setUser({ userId: response.data.userId, token: response.data.token });

        // Show success message
        setMessage("Login successful! Redirecting...");

        // Clear form
        setFormData({ email: "", password: "" });

        // Redirect to the homepage or dashboard after a short delay
        setTimeout(() => {
          navigate("/"); // Adjust this based on your route after login
        }, 1500);
      }
    } catch (error) {
      // Handle login failure (wrong credentials, server error, etc.)
      console.error("Login Error:", error.response?.data || error.message);

      if (error.response) {
        // Show the error message from the backend
        setMessage(error.response.data?.message || "Something went wrong. Please try again.");
      } else {
        // Handle network or other errors
        setMessage("Network error. Please check your connection and try again.");
      }
    } finally {
      setLoading(false); // Set loading to false
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
        <div>
          <div className="flex justify-center">
            <Mail className="h-12 w-12 text-indigo-600" />
          </div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Login to your account
          </h2>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm space-y-4">
            {/* Email Input */}
            <div className="relative">
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                id="email"
                name="email"
                type="email"
                required
                className="appearance-none rounded-lg relative block w-full pl-12 pr-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            {/* Password Input */}
            <div className="relative">
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none rounded-lg relative block w-full pl-12 pr-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Message Display */}
          {message && (
            <div
              className={`text-sm text-center ${
                message.includes("successful") ? "text-green-600" : "text-red-600"
              }`}
              aria-live="polite"
            >
              {message}
            </div>
          )}

          {/* Login Button */}
          <div>
            <button
              type="submit"
              disabled={loading}
              className={`group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white ${
                loading
                  ? "bg-indigo-400 cursor-not-allowed"
                  : "bg-indigo-600 hover:bg-indigo-700"
              } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200`}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
