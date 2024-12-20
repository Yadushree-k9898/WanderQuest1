
import React from 'react';
import { Compass } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 via-blue-500 to-teal-400"></div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          {/* Brand Section */}
          <div className="mb-8">
            <div className="flex items-center justify-center mb-4">
              <Compass className="w-12 h-12 text-teal-400" />
              <h2 className="text-2xl font-bold ml-2">WanderQuest</h2> {/* Updated name */}
            </div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Explore the world with WanderQuest. We create unforgettable travel experiences
              that combine adventure, comfort, and sustainability.
            </p>
          </div>

          {/* Social Links Section */}
          <div className="flex justify-center space-x-8 mb-8">
            <a
              href="https://twitter.com"
              className="text-gray-400 hover:text-teal-400 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter text-2xl"></i> {/* Twitter Icon */}
            </a>
            <a
              href="https://instagram.com"
              className="text-gray-400 hover:text-teal-400 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram text-2xl"></i> {/* Instagram Icon */}
            </a>
            <a
              href="https://wa.me/"
              className="text-gray-400 hover:text-teal-400 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-whatsapp text-2xl"></i> {/* WhatsApp Icon */}
            </a>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © {new Date().getFullYear()} WanderQuest. All rights reserved.
              </p>
              <p className="text-gray-500 text-sm flex items-center">
                Made with{' '}
                <span className="text-red-500 mx-1 animate-pulse">❤️</span>
                for explorers worldwide
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent pointer-events-none"></div>
    </footer>
  );
};

export default Footer;
