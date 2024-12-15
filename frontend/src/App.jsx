import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PackageDetail from "./pages/PackageDetail";
import Admin from "./pages/Admin";
import BookingForm from "./pages/BookingForm";
import AddPackageForm from "./pages/AddPackageForm";
import AboutUs from "./pages/AboutUs"; // Import About Us Page
import Contact from "./pages/Contact"; // Import Contact Page
import NotFound from "./pages/NotFound"; // Import 404 page (to be created)

import "./index.css"; // TailwindCSS file and custom styles
import "./styles/index.css"; // This is for your other custom styles

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50">
       
        <Navbar />

        
        <div className="flex-grow container mx-auto px-6 sm:px-8 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/package/:id" element={<PackageDetail />} />
    
            <Route path="/admin" element={<Admin />}>
              <Route path="add-package" element={<AddPackageForm />} />
         
            </Route>
          
            <Route path="/booking/:packageId" element={<BookingForm />} />
           
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            
            <Route path="*" element={<NotFound />} />{" "}
          
          </Routes>
        </div>

        
        <Footer />
      </div>
    </Router>
  );
};

export default App;
