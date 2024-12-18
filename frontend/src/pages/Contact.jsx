import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Enhanced form submission logic
    console.log('Form submitted:', formData);
    // You could add form validation, API call, etc.
    alert('Message sent successfully!');
    
    // Optional: Reset form after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div 
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black to-zinc-900 p-4"
    >
      <div className="w-full max-w-md bg-zinc-800/95 rounded-xl shadow-2xl shadow-black/50 p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-zinc-400">
            Have questions or need assistance? We're here to help!
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label 
              htmlFor="name" 
              className="block text-sm font-medium text-zinc-300 mb-2"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-zinc-700 text-white border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 transition duration-300"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label 
              htmlFor="email" 
              className="block text-sm font-medium text-zinc-300 mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-zinc-700 text-white border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 transition duration-300"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label 
              htmlFor="message" 
              className="block text-sm font-medium text-zinc-300 mb-2"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full px-4 py-3 bg-zinc-700 text-white border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 transition duration-300 resize-none"
              placeholder="Share your thoughts or questions..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-emerald-800 text-white font-semibold rounded-lg hover:bg-emerald-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;