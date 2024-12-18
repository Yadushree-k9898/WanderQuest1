import React from 'react';

const links = [
  { text: 'About Us', href: '#' },
  { text: 'Services', href: '#' },
  { text: 'Blog', href: '#' },
  { text: 'Contact', href: '#' },
  { text: 'Privacy Policy', href: '#' },
  { text: 'Terms of Service', href: '#' },
];

const QuickLinks = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      {links.map((link) => (
        <a
          key={link.text}
          href={link.href}
          className="text-gray-300 hover:text-white transform hover:translate-x-1 transition-all duration-300 text-sm flex items-center group"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-teal-400 mr-2 transform scale-0 group-hover:scale-100 transition-transform duration-300"></span>
          {link.text}
        </a>
      ))}
    </div>
  );
};

export default QuickLinks;
