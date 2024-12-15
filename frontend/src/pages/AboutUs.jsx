import React from 'react';
import aboutImage from '../assets/about.jpg'; 

const AboutUs = () => {
  return (
    <div 
      className="relative w-full h-screen p-6"
    >
      
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${aboutImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Overlay for dimming the background */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className="relative z-10">
        <h1 className="text-4xl font-semibold text-white mb-8">About Us</h1>
        <p className="text-lg text-white mb-6">
          Welcome to our travel agency. We are dedicated to providing the best travel packages
          and services for your adventures. Our team is passionate about helping travelers
          explore the world and create unforgettable experiences.
        </p>
        <p className="text-lg text-white mb-6">
          Our mission is to make travel accessible, enjoyable, and memorable for everyone. With
          years of experience in the travel industry, we offer personalized services to cater to
          your needs.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;

