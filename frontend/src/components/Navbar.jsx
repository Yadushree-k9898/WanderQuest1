
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.webp"; // Path to logo
import { useAuth } from "../contexts/authContext"; // Assuming you have an auth context

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth(); // Get the authentication state from context
  const navigate = useNavigate(); // Hook for navigation

  const handleLogout = () => {
    logout(); // Call the logout function from context
    navigate("/login"); // Redirect to login page after logout
  };

  return (
    <nav className="bg-charcoal text-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo and Title */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="WanderQuest Logo"
            className="h-12 w-auto mr-4 rounded-lg shadow-lg border-2 border-sage-green"
            loading="lazy"
          />
          <span className="text-2xl font-semibold text-sage-green">
            WanderQuest
          </span>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-8">
          {/* Public links shown when the user is not authenticated */}
          {!isAuthenticated ? (
            <>
              <Link
                to="/login"
                className="text-white hover:text-beige transition duration-300 text-lg"
                aria-label="Go to login page"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="text-white hover:text-beige transition duration-300 text-lg"
                aria-label="Go to signup page"
              >
                Signup
              </Link>
            </>
          ) : (
            <>
              {/* Links shown after user is authenticated */}
              <Link
                to="/"
                className="text-white hover:text-beige transition duration-300 text-lg"
                aria-label="Go to home page"
              >
                Home
              </Link>
              <Link
                to="/yadhu"
                className="text-white hover:text-beige transition duration-300 text-lg"
                aria-label="View packages"
              >
                Packages
              </Link>
              <Link
                to="/about-us"
                className="text-white hover:text-beige transition duration-300 text-lg"
                aria-label="Learn more about us"
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className="text-white hover:text-beige transition duration-300 text-lg"
                aria-label="Get in touch"
              >
                Contact
              </Link>

              {/* Conditionally render "Book Now" button if user is authenticated */}
              <Link
                to="/book"
                className="text-white bg-sage-green py-2 px-4 rounded-lg hover:bg-beige transition duration-300 text-lg font-medium"
                aria-label="Book a package now"
              >
                Book Now
              </Link>

              {/* Logout Button for authenticated users */}
              <button
                onClick={handleLogout}
                className="text-white bg-red-600 py-2 px-4 rounded-lg hover:bg-red-500 transition duration-300 text-lg font-medium"
                aria-label="Logout"
              >
                Logout
              </button>

              {/* Admin Link for Admin users */}
              {localStorage.getItem("role") === "admin" && (
                <Link
                  to="/admin"
                  className="text-white hover:text-beige transition duration-300 text-lg"
                  aria-label="Admin Dashboard"
                >
                  Admin Dashboard
                </Link>
              )}
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
