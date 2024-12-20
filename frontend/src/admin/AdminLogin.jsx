// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const AdminLogin = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Hardcoded login check (replace with proper auth logic)
//     if (username === "admin" && password === "admin123") {
//       navigate("/admin/dashboard");
//     } else {
//       alert("Invalid credentials");
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto mt-20">
//       <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg">
//         <h2 className="text-white text-2xl font-semibold mb-4">Admin Login</h2>
//         <input
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           className="w-full p-3 mb-4 text-gray-800"
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="w-full p-3 mb-6 text-gray-800"
//         />
//         <button type="submit" className="w-full bg-sage-green text-white p-3 rounded-lg">Login</button>
//       </form>
//     </div>
//   );
// };

// export default AdminLogin;






// admin/AdminLogin.jsx
import React, { useState } from 'react';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation (you can replace with actual login logic)
    if (email === 'admin@example.com' && password === 'admin123') {
      // Redirect to Admin Dashboard or handle successful login here
      window.location.href = '/admin/dashboard'; // Assuming you have this route
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="login-container">
      <h2>Admin Login</h2>
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;
