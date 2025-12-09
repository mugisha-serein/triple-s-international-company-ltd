import React, { useState } from "react";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobileMenu = () => setMobileOpen(!mobileOpen);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo */}
          <Link to="/" className="text-2xl font-extrabold text-sky-600">
            Triple S
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-sky-600 transition">
              Home
            </Link>
            <Link to="/products" className="text-gray-700 hover:text-sky-600 transition">
              Products
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-sky-600 transition">
              About
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-sky-600 transition">
              Contact
            </Link>
            {/* Cart */}
            <Link to="/cart" className="relative text-gray-700 hover:text-sky-600 transition">
              <FaShoppingCart size={22} />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5">
                3
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-400 rounded"
            >
              {mobileOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="flex flex-col px-4 py-4 space-y-2">
            <Link
              to="/"
              className="text-gray-700 hover:text-sky-600 transition"
              onClick={() => setMobileOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/products"
              className="text-gray-700 hover:text-sky-600 transition"
              onClick={() => setMobileOpen(false)}
            >
              Products
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-sky-600 transition"
              onClick={() => setMobileOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-sky-600 transition"
              onClick={() => setMobileOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/cart"
              className="relative text-gray-700 hover:text-sky-600 transition"
              onClick={() => setMobileOpen(false)}
            >
              <FaShoppingCart size={20} />
              <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
                3
              </span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
