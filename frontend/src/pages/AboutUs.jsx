import React from 'react';

const AboutUs = () => {
  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h1 className="text-5xl font-bold text-sage-green tracking-wide mb-6">
              About WanderQuest
            </h1>
            
            <div className="space-y-4">
              <p className="text-lg text-gray-300 leading-relaxed">
                Welcome to WanderQuest, your gateway to extraordinary travel experiences. 
                We are a passionate team dedicated to transforming your travel dreams into 
                remarkable journeys that leave lasting memories.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                Our mission is to make travel accessible, inspiring, and deeply personal. 
                With years of expertise in crafting unique travel packages, we understand 
                that every traveler has a unique story waiting to unfold.
              </p>
              
              <div className="flex space-x-4 pt-4">
                <div className="bg-white/10 p-4 rounded-lg text-center flex-1 backdrop-blur-sm transform transition duration-300 hover:-translate-y-1">
                  <h3 className="text-xl font-semibold text-sage-green mb-2">Our Vision</h3>
                  <p className="text-gray-400">
                    To inspire global connections through transformative travel experiences.
                  </p>
                </div>
                
                <div className="bg-white/10 p-4 rounded-lg text-center flex-1 backdrop-blur-sm transform transition duration-300 hover:-translate-y-1">
                  <h3 className="text-xl font-semibold text-sage-green mb-2">Our Values</h3>
                  <p className="text-gray-400">
                    Authenticity, Adventure, Sustainability, and Personalized Service.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Stats/Highlights */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/5 p-6 rounded-2xl text-center backdrop-blur-sm border border-white/10">
              <h4 className="text-4xl font-bold text-sage-green mb-2">15+</h4>
              <p className="text-gray-400">Years of Experience</p>
            </div>
            
            <div className="bg-white/5 p-6 rounded-2xl text-center backdrop-blur-sm border border-white/10">
              <h4 className="text-4xl font-bold text-sage-green mb-2">50+</h4>
              <p className="text-gray-400">Destinations Covered</p>
            </div>
            
            <div className="bg-white/5 p-6 rounded-2xl text-center backdrop-blur-sm border border-white/10">
              <h4 className="text-4xl font-bold text-sage-green mb-2">5000+</h4>
              <p className="text-gray-400">Happy Travelers</p>
            </div>
            
            <div className="bg-white/5 p-6 rounded-2xl text-center backdrop-blur-sm border border-white/10">
              <h4 className="text-4xl font-bold text-sage-green mb-2">24/7</h4>
              <p className="text-gray-400">Customer Support</p>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-sage-green to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-sage-green to-transparent rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};

export default AboutUs;