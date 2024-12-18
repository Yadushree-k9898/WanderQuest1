import React from 'react';
import Newsletter from './Newsletter';
import QuickLinks from './QuickLinks';
import SocialLinks from './SocialLinks';
import FooterSection from './FooterSection';
import BrandSection from './BrandSection';
import DecorativeElements from './DecorativeElements';
import BottomBar from './BottomBar';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      <DecorativeElements />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <FooterSection className="lg:col-span-4">
            <BrandSection />
          </FooterSection>

          {/* Quick Links */}
          <FooterSection 
            title="Quick Links" 
            className="backdrop-blur-sm bg-white/5 rounded-2xl p-6 transform hover:-translate-y-1 transition-transform duration-300"
          >
            <QuickLinks />
          </FooterSection>

          {/* Newsletter */}
          <FooterSection 
            className="md:col-span-2 backdrop-blur-sm bg-white/5 rounded-2xl p-6 transform hover:-translate-y-1 transition-transform duration-300"
          >
            <Newsletter />
          </FooterSection>

          {/* Social Links */}
          <FooterSection 
            title="Connect With Us" 
            className="backdrop-blur-sm bg-white/5 rounded-2xl p-6 transform hover:-translate-y-1 transition-transform duration-300"
          >
            <SocialLinks />
          </FooterSection>
        </div>

        <BottomBar />
      </div>
    </footer>
  );
};

export default Footer;
