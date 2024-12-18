import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('success');
    setEmail('');
    setTimeout(() => setStatus('idle'), 3000);
  };

  return (
    <div className="max-w-md mx-auto mb-8">
      <h3 className="text-lg font-semibold text-white mb-3 text-center">
        Subscribe to Our Newsletter
      </h3>
      <form onSubmit={handleSubmit} className="relative">
        <div className="flex">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 rounded-l-lg bg-white/10 text-white placeholder-gray-400 border border-white/20 focus:outline-none focus:border-white/40 transition-colors duration-300"
            required
          />
          <button
            type="submit"
            className="px-6 py-2 bg-indigo-600 text-white rounded-r-lg hover:bg-indigo-700 transition-colors duration-300"
          >
            Subscribe
          </button>
        </div>
        {status === 'success' && (
          <p className="absolute -bottom-6 left-0 w-full text-center text-sm text-green-400">
            Thanks for subscribing! ✨
          </p>
        )}
      </form>
    </div>
  );
};

export default Newsletter;
