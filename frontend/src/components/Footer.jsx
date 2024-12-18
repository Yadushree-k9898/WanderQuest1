// import React from 'react';
// import logo from '../assets/logo.webp'; // Correct the path if needed

// const Footer = () => {
//     return (
//         <footer className="bg-gradient-to-r from-charcoal to-gunmetal-gray text-white text-center py-6 relative">
//             <div className="max-w-7xl mx-auto px-6">
//                 {/* Copyright Text */}
//                 <p className="text-sm font-medium text-sage-green mb-3">
//                     &copy; 2024 Travel Agency. All rights reserved.
//                 </p>

//                 {/* Footer Links */}
//                 <div className="flex justify-center space-x-6 mb-4">
//                     <a
//                         href="#"
//                         className="text-white hover:text-beige transition duration-300 text-lg"
//                     >
//                         Privacy Policy
//                     </a>
//                     <a
//                         href="#"
//                         className="text-white hover:text-beige transition duration-300 text-lg"
//                     >
//                         Terms of Service
//                     </a>
//                     <a
//                         href="#"
//                         className="text-white hover:text-beige transition duration-300 text-lg"
//                     >
//                         Contact Us
//                     </a>
//                 </div>

//                 {/* Footer Message */}
//                 <p className="text-xs text-beige opacity-80">
//                     Made with ❤️ for travelers like you
//                 </p>
//             </div>

//             {/* Logo Section (Positioned at bottom left with circular shape) */}
//             <div className="absolute bottom-4 left-4">
//                 <img
//                     src={logo}
//                     alt="Travel Agency Logo"
//                     className="h-16 w-16 rounded-full object-cover border-4 border-white" // Circular logo
//                 />
//             </div>
//         </footer>
//     );
// };

// export default Footer;



import React from 'react';
import Newsletter from './Newsletter';
import QuickLinks from './QuickLinks';
import SocialLinks from './SocialLinks';
import FooterSection from './FooterSection';
import { Compass } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 via-blue-500 to-teal-400"></div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <FooterSection className="lg:col-span-4 text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Compass className="w-12 h-12 text-teal-400" />
              <h2 className="text-2xl font-bold ml-2">TravelAgency</h2>
            </div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Discover the world with us. We create unforgettable travel experiences 
              that combine adventure, comfort, and sustainability.
            </p>
          </FooterSection>

          {/* Quick Links */}
          <FooterSection title="Quick Links">
            <QuickLinks />
          </FooterSection>

          {/* Newsletter */}
          <FooterSection className="md:col-span-2">
            <Newsletter />
          </FooterSection>

          {/* Social Links */}
          <FooterSection title="Connect With Us">
            <SocialLinks />
          </FooterSection>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} TravelAgency. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm flex items-center">
              Made with{' '}
              <span className="text-red-500 mx-1 animate-pulse">❤️</span>
              for travelers worldwide
            </p>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent pointer-events-none"></div>
    </footer>
  );
};

export default Footer;