import React from 'react';
import { Twitter, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

const socialIcons = [
  { Icon: Twitter, href: '#', label: 'Twitter' },
  { Icon: Facebook, href: '#', label: 'Facebook' },
  { Icon: Instagram, href: '#', label: 'Instagram' },
  { Icon: Linkedin, href: '#', label: 'LinkedIn' },
  { Icon: Youtube, href: '#', label: 'YouTube' }
];

const SocialIcons = () => {
  return (
    <div className="flex justify-center gap-4 mb-6">
      {socialIcons.map(({ Icon, href, label }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 group"
        >
          <Icon className="w-5 h-5 text-gray-300 group-hover:text-white transform group-hover:scale-110 transition-transform duration-300" />
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
