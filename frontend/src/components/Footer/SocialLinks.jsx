import React from 'react';
import { Twitter, Facebook, Instagram, Linkedin, Youtube, Github } from 'lucide-react';

const socialLinks = [
  { platform: 'Twitter', href: '#', ariaLabel: 'Follow us on Twitter' },
  { platform: 'Facebook', href: '#', ariaLabel: 'Follow us on Facebook' },
  { platform: 'Instagram', href: '#', ariaLabel: 'Follow us on Instagram' },
  { platform: 'LinkedIn', href: '#', ariaLabel: 'Follow us on LinkedIn' },
  { platform: 'YouTube', href: '#', ariaLabel: 'Subscribe to our YouTube channel' },
  { platform: 'GitHub', href: '#', ariaLabel: 'Check our GitHub' },
];

const iconMap = {
  Twitter,
  Facebook,
  Instagram,
  LinkedIn: Linkedin,
  YouTube: Youtube,
  GitHub: Github,
};

const SocialLinks = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {socialLinks.map(({ platform, href, ariaLabel }) => {
        const Icon = iconMap[platform];
        return (
          <a
            key={platform}
            href={href}
            aria-label={ariaLabel}
            className="w-10 h-10 rounded-full bg-gray-800/50 flex items-center justify-center group hover:bg-gradient-to-r hover:from-teal-400 hover:to-blue-500 transition-all duration-300"
          >
            <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transform group-hover:scale-110 transition-transform duration-300" />
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
