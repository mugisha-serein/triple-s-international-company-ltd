import React, { useState } from "react";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobileMenu = () => setMobileOpen(!mobileOpen);

  return (
    <nav className="glass-header sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">

          {/* Logo */}
          <Link to="/" className="text-2xl font-extrabold text-primary-600 hover:scale-105 transition-transform">
            Triple S
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-slate-700 hover:text-primary-600 font-medium transition-colors">
              Home
            </Link>
            <Link to="/products" className="text-slate-700 hover:text-primary-600 font-medium transition-colors">
              Products
            </Link>
            <Link to="/about" className="text-slate-700 hover:text-primary-600 font-medium transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-slate-700 hover:text-primary-600 font-medium transition-colors">
              Contact
            </Link>
            {/* Cart */}
            <Link to="/cart" className="relative text-slate-700 hover:text-primary-600 transition-colors transform hover:scale-110">
              <FaShoppingCart size={22} />
              <span className="absolute -top-2 -right-2 bg-primary-600 text-white text-[10px] font-bold rounded-full h-5 w-5 flex items-center justify-center shadow-lg animate-pulse">
                3
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-slate-700 hover:text-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-400 rounded-lg p-2 hover:bg-slate-100 transition-all"
            >
              {mobileOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-slate-100 animate-fade-in">
          <div className="flex flex-col px-6 py-8 space-y-4">
            <Link
              to="/"
              className="text-lg font-semibold text-slate-800 hover:text-primary-600 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/products"
              className="text-lg font-semibold text-slate-800 hover:text-primary-600 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Products
            </Link>
            <Link
              to="/about"
              className="text-lg font-semibold text-slate-800 hover:text-primary-600 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-lg font-semibold text-slate-800 hover:text-primary-600 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/cart"
              className="flex items-center gap-2 text-lg font-semibold text-slate-800 hover:text-primary-600 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              <FaShoppingCart size={20} />
              <span>Cart</span>
              <span className="ml-auto bg-primary-600 text-white text-xs font-bold rounded-full px-2 py-0.5">
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
