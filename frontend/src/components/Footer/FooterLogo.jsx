import React from 'react';
import { Compass } from 'lucide-react';

const FooterLogo = () => {
  return (
    <div className="absolute bottom-6 left-6 transform hover:scale-110 transition-transform duration-300">
      <div className="relative w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <Compass className="w-10 h-10 text-indigo-600 group-hover:text-white relative z-10 transform group-hover:rotate-180 transition-all duration-500" />
      </div>
    </div>
  );
};

export default FooterLogo;
