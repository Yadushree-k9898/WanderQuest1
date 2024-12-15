import React, { useState } from 'react';
import backgroundImage from "../assets/background.jpg"; // Correct path to the image

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send to backend or email)
    alert('Message sent!');
  };

  return (
    <div
      className="min-h-screen p-6"
      style={{
        backgroundImage: `url(${backgroundImage})`, // Use imported image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="bg-black bg-opacity-50 min-h-screen p-6">
        <h1 className="text-4xl font-semibold text-white mb-8">Contact Us</h1>
        <p className="text-lg text-white mb-6">
          Have questions or need assistance? Get in touch with us!
        </p>
        <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto bg-white bg-opacity-90 p-6 rounded-lg shadow-lg">
          <div>
            <label className="block text-lg text-charcoal" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-charcoal"
              required
            />
          </div>
          <div>
            <label className="block text-lg text-charcoal" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-charcoal"
              required
            />
          </div>
          <div>
            <label className="block text-lg text-charcoal" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-charcoal"
              rows="4"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 text-white bg-charcoal rounded-lg hover:bg-beige transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
