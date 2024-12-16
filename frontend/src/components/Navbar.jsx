import { Link } from "react-router-dom";
import logo from "../assets/logo.webp"; // Path to logo

const Navbar = () => {
  return (
    <nav className="bg-charcoal text-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        <div className="flex items-center">
          {/* Logo with border, rounded corners, and subtle shadow */}
          <img
            src={logo}
            alt="WanderQuest Logo"
            className="h-12 w-auto mr-4 rounded-lg shadow-lg border-2 border-sage-green"
          />
          <span className="text-2xl font-semibold text-sage-green">
            WanderQuest
          </span>
        </div>
        <div className="flex space-x-8">
          <Link
            to="/"
            className="text-white hover:text-beige transition duration-300 text-lg"
          >
            Home
          </Link>
          <Link
            to="/yadhu"
            className="text-white hover:text-beige transition duration-300 text-lg"
          >
            Packages
          </Link>
          <Link
            to="/about-us"
            className="text-white hover:text-beige transition duration-300 text-lg"
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="text-white hover:text-beige transition duration-300 text-lg"
          >
            Contact
          </Link>
          {/* Add Booking Link */}
          <Link
            to="/book"
            className="text-white bg-sage-green py-2 px-4 rounded-lg hover:bg-beige transition duration-300 text-lg font-medium"
          >
            Book Now
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
