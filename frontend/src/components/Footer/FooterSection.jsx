import React from 'react';

const FooterSection = ({ title, children, className = '' }) => {
  return (
    <div className={`relative group ${className}`}>
      {title && (
        <h3 className="text-xl font-semibold text-white mb-6 relative inline-block">
          {title}
          <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-teal-400 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </h3>
      )}
      {children}
    </div>
  );
};

export default FooterSection;
