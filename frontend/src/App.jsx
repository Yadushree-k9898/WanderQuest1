
import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { AuthProvider } from "./contexts/authContext";

// Dynamic Imports
const Home = lazy(() => import("./pages/Home"));
const PackageDetail = lazy(() => import("./pages/PackageDetail"));
const PackageList = lazy(() => import("./pages/PackageList"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const Contact = lazy(() => import("./pages/Contact"));
const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/SignUp"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const AdminDashboard = lazy(() => import("./admin/AdminDashboard"));
const AddPackageForm = lazy(() => import("./admin/AddPackageForm"));
const ManagePackages = lazy(() => import("./admin/ManagePackages"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Admin Route Protection
import AdminPrivateRoute from "./admin/AdminPrivateRoute";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <AuthProvider>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Navbar />
        <div className="flex-grow w-full px-0 mx-0">
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/packages" element={<PackageList />} />
              <Route path="/package/:id" element={<PackageDetail />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />

              {/* Protected Routes for authenticated users */}
              <Route
                path="/dashboard"
                element={
                  <AdminPrivateRoute>
                    <Dashboard />
                  </AdminPrivateRoute>
                }
              />
              <Route
                path="/admin"
                element={
                  <AdminPrivateRoute>
                    <AdminDashboard />
                  </AdminPrivateRoute>
                }
              />
              <Route
                path="/admin/add-package"
                element={
                  <AdminPrivateRoute>
                    <AddPackageForm />
                  </AdminPrivateRoute>
                }
              />
              <Route
                path="/admin/manage-packages"
                element={
                  <AdminPrivateRoute>
                    <ManagePackages />
                  </AdminPrivateRoute>
                }
              />

              {/* Catch-all Route for 404 */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </div>
        <Footer />
      </div>
    </AuthProvider>
  );
};

export default App;
