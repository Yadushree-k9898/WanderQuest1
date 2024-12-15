import React from 'react';
import logo from '../assets/logo.webp'; // Correct the path if needed

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-charcoal to-gunmetal-gray text-white text-center py-6 relative">
            <div className="max-w-7xl mx-auto px-6">
                {/* Copyright Text */}
                <p className="text-sm font-medium text-sage-green mb-3">
                    &copy; 2024 Travel Agency. All rights reserved.
                </p>

                {/* Footer Links */}
                <div className="flex justify-center space-x-6 mb-4">
                    <a
                        href="#"
                        className="text-white hover:text-beige transition duration-300 text-lg"
                    >
                        Privacy Policy
                    </a>
                    <a
                        href="#"
                        className="text-white hover:text-beige transition duration-300 text-lg"
                    >
                        Terms of Service
                    </a>
                    <a
                        href="#"
                        className="text-white hover:text-beige transition duration-300 text-lg"
                    >
                        Contact Us
                    </a>
                </div>

                {/* Footer Message */}
                <p className="text-xs text-beige opacity-80">
                    Made with ❤️ for travelers like you
                </p>
            </div>

            {/* Logo Section (Positioned at bottom left with circular shape) */}
            <div className="absolute bottom-4 left-4">
                <img
                    src={logo}
                    alt="Travel Agency Logo"
                    className="h-16 w-16 rounded-full object-cover border-4 border-white" // Circular logo
                />
            </div>
        </footer>
    );
};

export default Footer;
