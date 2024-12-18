
import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer/Footer";

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PackageDetail from "./pages/PackageDetail";
import PackageList from "./pages/PackageList";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import Dashboard from "./pages/Dashboard"; // Import the Dashboard
import AdminDashboard from "./admin/AdminDashboard";
import AddPackageForm from "./admin/AddPackageForm";
import ManagePackages from "./admin/ManagePackages";
import AdminPrivateRoute from "./admin/AdminPrivateRoute"; // Make sure AdminPrivateRoute is correct
import { AuthProvider } from "./contexts/authContext"; // Import the AuthProvider

import "./index.css";
import "./styles/index.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <AuthProvider>
      {" "}
      {/* Wrapping the app with AuthProvider for authentication context */}
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Navbar />
        <div className="flex-grow container mx-auto px-6 sm:px-8 py-8">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/yadhu" element={<PackageList />} />
            <Route path="/package/:id" element={<PackageDetail />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            {/* Protected Routes */}
            <Route
              path="/dashboard"
              element={
                <AdminPrivateRoute>
                  {" "}
                  {/* Protected Route for dashboard */}
                  <Dashboard />
                </AdminPrivateRoute>
              }
            />
            <Route
              path="/admin"
              element={
                <AdminPrivateRoute>
                  {" "}
                  {/* Protected Route for admin dashboard */}
                  <AdminDashboard />
                </AdminPrivateRoute>
              }
            />
            <Route
              path="/admin/add-package"
              element={
                <AdminPrivateRoute>
                  {" "}
                  {/* Protected Route for adding package */}
                  <AddPackageForm />
                </AdminPrivateRoute>
              }
            />
            <Route
              path="/admin/manage-packages"
              element={
                <AdminPrivateRoute>
                  {" "}
                  {/* Protected Route for managing packages */}
                  <ManagePackages />
                </AdminPrivateRoute>
              }
            />

            {/* Catch-all Route for 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </AuthProvider>
  );
};

export default App;
