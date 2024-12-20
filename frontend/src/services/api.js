


// API Base URL
const API_BASE_URL = "http://localhost:5000/api/packages";

/**
 * Helper function to handle fetch responses and errors.
 * @param {Response} response - The fetch API response object.
 * @returns {Promise<any>} Parsed JSON or throws an error.
 */
const handleResponse = async (response) => {
  if (!response.ok) {
    const errorDetails = await response.json().catch(() => ({}));
    throw new Error(
      `HTTP ${response.status}: ${
        errorDetails.message || "An error occurred"
      }`
    );
  }
  return response.json();
};

/**
 * Fetch all tour packages.
 */
// export const fetchPackages = async () => {
//   try {
//     const response = await fetch(API_BASE_URL);
//     return await handleResponse(response);
//   } catch (error) {
//     console.error("Error fetching packages:", error.message);
//     return { success: false, error: error.message }; // Return a consistent error object
//   }
// };

/**
 * Fetch a single package by its ID.
 * @param {string} id - The ID of the package to fetch.
 * @returns {Promise<any>} The package details or error object.
 */
export const fetchPackageById = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${id}`);
    return await handleResponse(response);
  } catch (error) {
    console.error(`Error fetching package with ID ${id}:`, error.message);
    return { success: false, error: error.message }; // Return error object
  }
};

/**
 * Add a new tour package.
 * @param {Object} packageData - The data of the new package to be added.
 * @returns {Promise<any>} The package creation response or error object.
 */
export const addPackage = async (packageData) => {
  try {
    const response = await fetch(API_BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(packageData),
    });
    return await handleResponse(response);
  } catch (error) {
    console.error("Error adding package:", error.message);
    return { success: false, error: error.message }; // Return error object
  }
};

/**
 * Update a tour package by its ID.
 * @param {string} id - The ID of the package to update.
 * @param {Object} updatedData - The updated package data.
 * @returns {Promise<any>} The update response or error object.
 */
export const updatePackage = async (id, updatedData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    });
    return await handleResponse(response);
  } catch (error) {
    console.error(`Error updating package with ID ${id}:`, error.message);
    return { success: false, error: error.message }; // Return error object
  }
};

/**
 * Delete a tour package by its ID.
 * @param {string} id - The ID of the package to delete.
 * @returns {Promise<any>} The deletion response or error object.
 */
export const deletePackage = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${id}`, {
      method: "DELETE",
    });
    return await handleResponse(response);
  } catch (error) {
    console.error(`Error deleting package with ID ${id}:`, error.message);
    return { success: false, error: error.message }; // Return error object
  }
};

/**
 * Book a tour package.
 * @param {string} packageId - The ID of the package to book.
 * @param {Object} userData - The user's booking details.
 * @returns {Promise<any>} The booking response or error object.
 */
export const bookPackage = async (packageId, userData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/book`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ packageId, ...userData }),
    });
    return await handleResponse(response);
  } catch (error) {
    console.error("Error booking package:", error.message);
    return { success: false, error: error.message }; // Return error object
  }
};

// Admin-related API functions

/**
 * Admin login API call
 * @param {string} username - Admin's username
 * @param {string} password - Admin's password
 * @returns {Promise<any>} The response from the login attempt
 */
export const loginAdmin = async (username, password) => {
  try {
    const response = await fetch("http://localhost:5000/api/admin/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    const data = await response.json();
    if (!response.ok) {
      return { success: false, message: data.message }; // Return error message
    }

    // Store the JWT token in localStorage (or sessionStorage for session-based auth)
    localStorage.setItem("adminToken", data.token);
    return { success: true, message: data.message }; // Return success
  } catch (error) {
    console.error("Error logging in:", error.message);
    return { success: false, message: "An error occurred. Please try again." };
  }
};


export const fetchPackages = async () => {
  try {
    const response = await fetch(API_BASE_URL);
    return await handleResponse(response);
  } catch (error) {
    console.error("Error fetching packages:", error.message);
    return { success: false, error: error.message }; // Return a consistent error object
  }
};


export const fetchAllPackages = async () => {
  try {
    const response = await fetch(API_BASE_URL);
    return await handleResponse(response);
  } catch (error) {
    console.error("Error fetching all packages:", error.message);
    return { success: false, error: error.message };
  }
};
