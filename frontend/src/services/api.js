// api.js (Frontend code)
export const fetchPackages = async () => {
  try {
    const response = await fetch('http://localhost:5000/api/packages');
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json(); // Expecting JSON data
    return data;
  } catch (error) {
    console.error('Error fetching packages:', error);
    return [];
  }
};

  
export const fetchPackageById = async (id) => {
  try {
    const response = await fetch(`http://localhost:5000/api/packages/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching package by ID:', error);
  }
};

  
// src/services/api.js
export const bookPackage = async (packageId, userData) => {
  try {
    const response = await fetch(`http://localhost:5000/api/packages/book`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ packageId, userData }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error booking package:', error);
  }
};
