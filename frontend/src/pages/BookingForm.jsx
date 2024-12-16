import React, { useState } from 'react';
import { bookPackage } from '../services/api';

const BookingForm = ({ packageId }) => {
  const [userData, setUserData] = useState({ name: '', email: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Booking in progress...');
    
    const result = await bookPackage(packageId, userData);

    if (result && result.message === 'Package booked successfully') {
      setStatus('Booking successful!');
    } else {
      setStatus('Booking failed. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input 
          type="text" 
          id="name" 
          value={userData.name} 
          onChange={(e) => setUserData({ ...userData, name: e.target.value })} 
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input 
          type="email" 
          id="email" 
          value={userData.email} 
          onChange={(e) => setUserData({ ...userData, email: e.target.value })} 
        />
      </div>
      <button type="submit">Book Now</button>
      <p>{status}</p>
    </form>
  );
};

export default BookingForm;
