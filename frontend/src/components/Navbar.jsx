

// import React, { useState, useEffect, memo } from "react";
// import { Link, useNavigate, NavLink } from "react-router-dom";
// import logo from "../assets/logo.webp";
// import { useAuth } from "../contexts/authContext";

// const Navbar = memo(() => {
//   const { isAuthenticated, logout, userRole } = useAuth(); // Authentication state and user role
//   const navigate = useNavigate();
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Toggle mobile menu

//   // Redirect after login or signup
//   useEffect(() => {
//     if (isAuthenticated) {
//       navigate("/malabar"); // Redirect to Malabar after login/signup
//     }
//   }, [isAuthenticated, navigate]);

//   // Logout handler
//   const handleLogout = async () => {
//     try {
//       await logout();
//       navigate("/login"); // Redirect to login page after logout
//     } catch (error) {
//       console.error("Logout failed", error);
//     }
//   };

//   return (
//     <nav className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white shadow-lg">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 relative z-10">
//         <div className="flex justify-between items-center">
//           {/* Logo and Brand */}
//           <div className="flex items-center space-x-4">
//             <img
//               src={logo}
//               alt="WanderQuest Logo"
//               className="h-12 w-auto rounded-lg shadow-lg border-2 border-sage-green transform transition duration-300 hover:scale-105"
//               loading="lazy"
//             />
//             <span className="text-2xl font-semibold text-sage-green tracking-wider">
//               WanderQuest
//             </span>
//           </div>

//           {/* Mobile Menu Toggle */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//               className="text-white focus:outline-none"
//               aria-label="Toggle mobile menu"
//             >
//               {isMobileMenuOpen ? (
//                 <svg
//                   className="w-6 h-6"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 </svg>
//               ) : (
//                 <svg
//                   className="w-6 h-6"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M4 6h16M4 12h16M4 18h16"
//                   />
//                 </svg>
//               )}
//             </button>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex space-x-6 items-center">
//             {!isAuthenticated ? (
//               <>
//                 <NavLink
//                   to="/login"
//                   className={({ isActive }) =>
//                     isActive ? "bg-white/20" : "backdrop-blur-sm bg-white/10"
//                   }
//                 >
//                   Login
//                 </NavLink>
//                 <NavLink
//                   to="/signup"
//                   className={({ isActive }) =>
//                     isActive ? "bg-opacity-80" : "backdrop-blur-sm bg-sage-green"
//                   }
//                 >
//                   Signup
//                 </NavLink>
//               </>
//             ) : (
//               <>
//                 <NavLink
//                   to="/malabar"
//                   className={({ isActive }) =>
//                     isActive ? "text-sage-green" : "hover:text-sage-green"
//                   }
//                 >
//                   Malabar
//                 </NavLink>
//                 <NavLink
//                   to="/tour-packages"
//                   className={({ isActive }) =>
//                     isActive ? "text-sage-green" : "hover:text-sage-green"
//                   }
//                 >
//                   Packages
//                 </NavLink>
//                 <NavLink
//                   to="/about-us"
//                   className={({ isActive }) =>
//                     isActive ? "text-sage-green" : "hover:text-sage-green"
//                   }
//                 >
//                   About Us
//                 </NavLink>
//                 <NavLink
//                   to="/contact"
//                   className={({ isActive }) =>
//                     isActive ? "text-sage-green" : "hover:text-sage-green"
//                   }
//                 >
//                   Contact
//                 </NavLink>

//                 {userRole === "admin" && (
//                   <NavLink
//                     to="/admin"
//                     className={({ isActive }) =>
//                       isActive ? "bg-white/20" : "backdrop-blur-sm bg-white/10"
//                     }
//                   >
//                     Admin Dashboard
//                   </NavLink>
//                 )}

//                 <button
//                   onClick={handleLogout}
//                   className="backdrop-blur-sm bg-red-600/20 text-red-400 px-4 py-2 rounded-lg hover:bg-red-600/30 transition duration-300"
//                 >
//                   Logout
//                 </button>
//               </>
//             )}
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isMobileMenuOpen && (
//           <div className="md:hidden absolute top-full left-0 w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 z-20 shadow-lg">
//             <div className="flex flex-col space-y-4 p-6">
//               {!isAuthenticated ? (
//                 <>
//                   <Link to="/login" className="text-center py-2 hover:bg-white/10 rounded-lg">Login</Link>
//                   <Link to="/signup" className="text-center py-2 bg-sage-green rounded-lg">Signup</Link>
//                 </>
//               ) : (
//                 <>
//                   <Link to="/malabar" className="text-center py-2 hover:bg-white/10 rounded-lg">Malabar</Link>
//                   <Link to="/tour-packages" className="text-center py-2 hover:bg-white/10 rounded-lg">Packages</Link>
//                   <Link to="/about-us" className="text-center py-2 hover:bg-white/10 rounded-lg">About Us</Link>
//                   <Link to="/contact" className="text-center py-2 hover:bg-white/10 rounded-lg">Contact</Link>
//                   {userRole === "admin" && (
//                     <Link to="/admin" className="text-center py-2 hover:bg-white/10 rounded-lg">Admin Dashboard</Link>
//                   )}
//                   <button
//                     onClick={handleLogout}
//                     className="text-center py-2 bg-red-600/20 text-red-400 rounded-lg"
//                   >
//                     Logout
//                   </button>
//                 </>
//               )}
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// });

// export default Navbar;




import React, { useState, useEffect, memo } from "react";
import { Link, useNavigate, NavLink } from "react-router-dom";
import logo from "../assets/logo.webp";
import { useAuth } from "../contexts/authContext";
import classNames from "classnames";

const Navbar = memo(() => {
  const { isAuthenticated, logout, userRole } = useAuth();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Redirect after login or signup
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/malabar");
    }
  }, [isAuthenticated, navigate]);

  // Logout handler
  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <nav className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 relative z-10">
        <div className="flex justify-between items-center">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-4">
            <img
              src={logo}
              alt="WanderQuest Logo"
              className="h-12 w-auto rounded-lg shadow-lg border-2 border-sage-green transform transition duration-300 hover:scale-105"
              loading="lazy"
              aria-label="WanderQuest logo"
            />
            <span className="text-2xl font-semibold text-sage-green tracking-wider">
              WanderQuest
            </span>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white focus:outline-none"
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen ? "true" : "false"}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 items-center">
            {!isAuthenticated ? (
              <>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    classNames("backdrop-blur-sm", {
                      "bg-white/20": isActive,
                      "bg-white/10": !isActive,
                    })
                  }
                >
                  Login
                </NavLink>
                <NavLink
                  to="/signup"
                  className={({ isActive }) =>
                    classNames("backdrop-blur-sm", {
                      "bg-sage-green": !isActive,
                      "bg-opacity-80": isActive,
                    })
                  }
                >
                  Signup
                </NavLink>
              </>
            ) : (
              <>
                <NavLink
                  to="/malabar"
                  className={({ isActive }) =>
                    classNames({ "text-sage-green": isActive, "hover:text-sage-green": !isActive })
                  }
                >
                  Malabar
                </NavLink>
                <NavLink
                  to="/tour-packages"
                  className={({ isActive }) =>
                    classNames({ "text-sage-green": isActive, "hover:text-sage-green": !isActive })
                  }
                >
                  Packages
                </NavLink>
                <NavLink
                  to="/about-us"
                  className={({ isActive }) =>
                    classNames({ "text-sage-green": isActive, "hover:text-sage-green": !isActive })
                  }
                >
                  About Us
                </NavLink>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    classNames({ "text-sage-green": isActive, "hover:text-sage-green": !isActive })
                  }
                >
                  Contact
                </NavLink>

                {userRole === "admin" && (
                  <NavLink
                    to="/admin"
                    className={({ isActive }) =>
                      classNames("backdrop-blur-sm", {
                        "bg-white/20": isActive,
                        "bg-white/10": !isActive,
                      })
                    }
                  >
                    Admin Dashboard
                  </NavLink>
                )}

                <button
                  onClick={handleLogout}
                  className="backdrop-blur-sm bg-red-600/20 text-red-400 px-4 py-2 rounded-lg hover:bg-red-600/30 transition duration-300"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div id="mobile-menu" className="md:hidden absolute top-full left-0 w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 z-20 shadow-lg">
            <div className="flex flex-col space-y-4 p-6">
              {!isAuthenticated ? (
                <>
                  <Link to="/login" className="text-center py-2 hover:bg-white/10 rounded-lg">
                    Login
                  </Link>
                  <Link to="/signup" className="text-center py-2 bg-sage-green rounded-lg">
                    Signup
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/malabar" className="text-center py-2 hover:bg-white/10 rounded-lg">
                    Malabar
                  </Link>
                  <Link to="/tour-packages" className="text-center py-2 hover:bg-white/10 rounded-lg">
                    Packages
                  </Link>
                  <Link to="/about-us" className="text-center py-2 hover:bg-white/10 rounded-lg">
                    About Us
                  </Link>
                  <Link to="/contact" className="text-center py-2 hover:bg-white/10 rounded-lg">
                    Contact
                  </Link>
                  {userRole === "admin" && (
                    <Link to="/admin" className="text-center py-2 hover:bg-white/10 rounded-lg">
                      Admin Dashboard
                    </Link>
                  )}
                  <button
                    onClick={handleLogout}
                    className="text-center py-2 bg-red-600/20 text-red-400 rounded-lg"
                  >
                    Logout
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
});

export default Navbar;
