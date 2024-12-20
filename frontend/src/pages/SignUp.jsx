// import React, { useState } from "react";
// import { UserPlus, Mail, Lock, User } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios"; // Use axios for making API requests

// const Signup = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });
//   const [message, setMessage] = useState("");
//   const [isLoading, setIsLoading] = useState(false);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const { fullName, email, password, confirmPassword } = formData;

//     // Ensure all fields are filled out
//     if (!fullName || !email || !password || !confirmPassword) {
//       setMessage("All fields are required");
//       return;
//     }

//     // Check if password and confirmPassword match
//     if (password !== confirmPassword) {
//       setMessage("Passwords do not match");
//       return;
//     }

//     // Validate email format
//     const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
//     if (!emailRegex.test(email)) {
//       setMessage("Please enter a valid email address");
//       return;
//     }

//     // Validate password format (at least 6 characters, must contain at least one letter and one number)
//     const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
//     if (!passwordRegex.test(password)) {
//       setMessage("Password must be at least 6 characters long and contain at least one letter and one number");
//       return;
//     }

//     const userData = {
//       fullName: fullName.trim(),
//       email: email.trim(),
//       password: password.trim(),
//       confirmPassword: confirmPassword.trim(),
//     };

//     setIsLoading(true);

//     try {
//       const response = await axios.post("http://localhost:5000/api/auth/signup", userData);
//       console.log("Signup success:", response.data);
//       setMessage("Signup successful! Please log in.");
//       setTimeout(() => navigate("/login"), 2000); // Navigate after a small delay for user to see the success message
//     } catch (error) {
//       console.error("Signup error:", error.response?.data?.message || error.message);
//       setMessage(error.response?.data?.message || "An error occurred. Please try again.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
//         <div>
//           <div className="flex justify-center">
//             <UserPlus className="h-12 w-12 text-indigo-600" />
//           </div>
//           <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
//             Create your account
//           </h2>
//           <p className="mt-2 text-center text-sm text-gray-600">
//             Already have an account?{" "}
//             <a
//               href="#"
//               onClick={() => navigate("/login")}
//               className="font-medium text-indigo-600 hover:text-indigo-500"
//             >
//               Sign in
//             </a>
//           </p>
//         </div>

//         <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
//           <div className="rounded-md shadow-sm space-y-4">
//             {/* Full Name Input */}
//             <div className="relative">
//               <label htmlFor="fullName" className="sr-only">
//                 Full Name
//               </label>
//               <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
//               <input
//                 id="fullName"
//                 name="fullName"
//                 type="text"
//                 required
//                 className="appearance-none rounded-lg relative block w-full pl-12 pr-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//                 placeholder="Full Name"
//                 value={formData.fullName}
//                 onChange={handleChange}
//                 aria-label="Full Name"
//               />
//             </div>

//             {/* Email Input */}
//             <div className="relative">
//               <label htmlFor="email" className="sr-only">
//                 Email address
//               </label>
//               <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
//               <input
//                 id="email"
//                 name="email"
//                 type="email"
//                 required
//                 className="appearance-none rounded-lg relative block w-full pl-12 pr-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//                 placeholder="Email address"
//                 value={formData.email}
//                 onChange={handleChange}
//                 aria-label="Email Address"
//               />
//             </div>

//             {/* Password and Confirm Password Inputs */}
//             <div className="relative">
//               <label htmlFor="password" className="sr-only">
//                 Password
//               </label>
//               <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
//               <input
//                 id="password"
//                 name="password"
//                 type="password"
//                 required
//                 className="appearance-none rounded-lg relative block w-full pl-12 pr-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//                 placeholder="Password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 aria-label="Password"
//               />
//             </div>

//             <div className="relative">
//               <label htmlFor="confirmPassword" className="sr-only">
//                 Confirm Password
//               </label>
//               <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
//               <input
//                 id="confirmPassword"
//                 name="confirmPassword"
//                 type="password"
//                 required
//                 className="appearance-none rounded-lg relative block w-full pl-12 pr-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//                 placeholder="Confirm Password"
//                 value={formData.confirmPassword}
//                 onChange={handleChange}
//                 aria-label="Confirm Password"
//               />
//             </div>
//           </div>

//           {/* Displaying messages */}
//           {message && (
//             <div
//               className={`text-sm text-center ${message.includes("successful")
//                 ? "text-green-600"
//                 : "text-red-600"}`}
//             >
//               {message}
//             </div>
//           )}

//           {/* Submit Button */}
//           <div>
//             <button
//               type="submit"
//               className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
//               disabled={isLoading}
//             >
//               {isLoading ? "Signing up..." : "Sign up"}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Signup;




import React, { useState } from "react";
import { UserPlus, Mail, Lock, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Use axios for making API requests

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { fullName, email, password, confirmPassword } = formData;

    // Ensure all fields are filled out
    if (!fullName || !email || !password || !confirmPassword) {
      setMessage("All fields are required");
      return;
    }

    // Check if password and confirmPassword match
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    // Validate email format
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
      setMessage("Please enter a valid email address");
      return;
    }

    // Validate password format (at least 6 characters, must contain at least one letter and one number)
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    if (!passwordRegex.test(password)) {
      setMessage("Password must be at least 6 characters long and contain at least one letter and one number");
      return;
    }

    const userData = {
      fullName: fullName.trim(),
      email: email.trim(),
      password: password.trim(),
      confirmPassword: confirmPassword.trim(),
    };

    setIsLoading(true);

    try {
      const response = await axios.post("http://localhost:5000/api/auth/signup", userData);
      console.log("Signup success:", response.data);
      setMessage("Signup successful! Please log in.");
      setTimeout(() => navigate("/login"), 2000); // Navigate after a small delay for user to see the success message
    } catch (error) {
      console.error("Signup error:", error.response || error.message); // Log full error response for debugging
      setMessage(error.response?.data?.message || "An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
        <div>
          <div className="flex justify-center">
            <UserPlus className="h-12 w-12 text-indigo-600" />
          </div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <a
              href="#"
              onClick={() => navigate("/login")}
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Sign in
            </a>
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm space-y-4">
            {/* Full Name Input */}
            <div className="relative">
              <label htmlFor="fullName" className="sr-only">
                Full Name
              </label>
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                id="fullName"
                name="fullName"
                type="text"
                required
                className="appearance-none rounded-lg relative block w-full pl-12 pr-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                aria-label="Full Name"
              />
            </div>

            {/* Email Input */}
            <div className="relative">
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                id="email"
                name="email"
                type="email"
                required
                className="appearance-none rounded-lg relative block w-full pl-12 pr-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
                aria-label="Email Address"
              />
            </div>

            {/* Password Input */}
            <div className="relative">
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none rounded-lg relative block w-full pl-12 pr-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                aria-label="Password"
              />
            </div>

            {/* Confirm Password Input */}
            <div className="relative">
              <label htmlFor="confirmPassword" className="sr-only">
                Confirm Password
              </label>
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                className="appearance-none rounded-lg relative block w-full pl-12 pr-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                aria-label="Confirm Password"
              />
            </div>

            {message && (
              <p className="mt-2 text-center text-sm text-red-600">{message}</p>
            )}
          </div>

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${isLoading && "opacity-50 cursor-not-allowed"}`}
            >
              {isLoading ? "Signing up..." : "Sign up"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
