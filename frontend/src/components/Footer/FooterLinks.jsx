import React from 'react';

const links = [
  { text: 'Privacy Policy', href: '#' },
  { text: 'Terms of Service', href: '#' },
  { text: 'Contact Us', href: '#' }
];

const FooterLinks = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 mb-6 md:mb-4">
      {links.map((link) => (
        <a
          key={link.text}
          href={link.href}
          className="text-gray-300 hover:text-white transform hover:scale-105 transition-all duration-300 text-sm md:text-base font-medium relative group"
        >
          {link.text}
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
        </a>
      ))}
    </div>
  );
};

export default FooterLinks;
