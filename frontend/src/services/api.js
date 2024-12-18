// // API Base URL
// const API_BASE_URL = "http://localhost:5000/api/packages";

// /**
//  * Fetch all tour packages.
//  */
// export const fetchPackages = async () => {
//   try {
//     const response = await fetch(API_BASE_URL);
//     if (!response.ok) {
//       throw new Error(`Failed to fetch packages. Status: ${response.status}`);
//     }
//     return await response.json();
//   } catch (error) {
//     console.error("Error fetching packages:", error.message);
//     return []; // Return an empty array in case of failure
//   }
// };

// /**
//  * Fetch a single package by its ID.
//  * @param {string} id - The ID of the package to fetch.
//  */
// export const fetchPackageById = async (id) => {
//   try {
//     const response = await fetch(`${API_BASE_URL}/${id}`);
//     if (!response.ok) {
//       throw new Error(
//         `Failed to fetch package with ID ${id}. Status: ${response.status}`
//       );
//     }
//     return await response.json();
//   } catch (error) {
//     console.error("Error fetching package by ID:", error.message);
//     return null; // Return null if the package isn't found or an error occurs
//   }
// };

// /**
//  * Book a tour package.
//  * @param {string} packageId - The ID of the package to book.
//  * @param {Object} userData - The user's booking details.
//  */
// export const bookPackage = async (packageId, userData) => {
//   try {
//     const response = await fetch(`${API_BASE_URL}/book`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ packageId, userData }),
//     });
//     if (!response.ok) {
//       throw new Error(`Failed to book package. Status: ${response.status}`);
//     }
//     return await response.json();
//   } catch (error) {
//     console.error("Error booking package:", error.message);
//     return { success: false, error: error.message }; // Return a detailed error response
//   }
// };


// // api.js


// // Add deletePackage function
// export const deletePackage = async (id) => {
//   const response = await fetch(`/api/packages/${id}`, {
//     method: "DELETE",
//   });
//   if (!response.ok) {
//     throw new Error("Failed to delete package");
//   }
//   return response.json(); // Return response after successful deletion
// };



// /**
//  * Fetch all packages with enhanced handling (Duplicate of fetchPackages removed).
//  */
// export const fetchAllPackages = fetchPackages;


// API Base URL
const API_BASE_URL = "http://localhost:5000/api/packages";

/**
 * Fetch all tour packages.
 */
export const fetchPackages = async () => {
  try {
    const response = await fetch(API_BASE_URL);
    if (!response.ok) {
      throw new Error(`Failed to fetch packages. Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching packages:", error.message);
    return []; // Return an empty array in case of failure
  }
};

/**
 * Fetch a single package by its ID.
 * @param {string} id - The ID of the package to fetch.
 */
export const fetchPackageById = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${id}`);
    if (!response.ok) {
      throw new Error(
        `Failed to fetch package with ID ${id}. Status: ${response.status}`
      );
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching package by ID:", error.message);
    return null; // Return null if the package isn't found or an error occurs
  }
};

/**
 * Book a tour package.
 * @param {string} packageId - The ID of the package to book.
 * @param {Object} userData - The user's booking details.
 */
export const bookPackage = async (packageId, userData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/book`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ packageId, userData }),
    });
    if (!response.ok) {
      throw new Error(`Failed to book package. Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error booking package:", error.message);
    return { success: false, error: error.message }; // Return a detailed error response
  }
};

/**
 * Delete a tour package.
 * @param {string} id - The ID of the package to delete.
 */
export const deletePackage = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Failed to delete package");
    }
    return await response.json(); // Return response after successful deletion
  } catch (error) {
    console.error("Error deleting package:", error.message);
    return { success: false, error: error.message }; // Return a detailed error response
  }
};

/**
 * Fetch all packages (Alias for fetchPackages function).
 */
export const fetchAllPackages = fetchPackages;
