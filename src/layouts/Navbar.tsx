import React, { useState, useEffect, useRef } from "react";
import { FaShoppingCart, FaBars, FaTimes, FaUser } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const profileMenuRef = useRef<HTMLDivElement>(null);

  const toggleMobileMenu = () => setMobileOpen(!mobileOpen);
  const toggleProfileSubmenu = () => setProfileOpen(!profileOpen);

  // Close menus on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Handle mobile menu
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setMobileOpen(false);
      }
      // Handle profile dropdown
      if (profileMenuRef.current && !profileMenuRef.current.contains(event.target as Node)) {
        setProfileOpen(false);
      }
    };

    if (mobileOpen || profileOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileOpen, profileOpen]);

  const navLinkStyles = ({ isActive }: { isActive: boolean }) =>
    `transition-all duration-300 font-medium px-4 py-2 rounded-xl flex items-center gap-2 ${isActive
      ? "text-primary-600 bg-primary-100/50 shadow-sm shadow-primary-100/50"
      : "text-slate-600 hover:text-primary-600 hover:bg-slate-50"
    }`;

  const mobileNavLinkStyles = ({ isActive }: { isActive: boolean }) =>
    `text-lg font-bold transition-all duration-300 px-6 py-4 rounded-2xl flex items-center justify-between ${isActive
      ? "text-primary-600 bg-primary-50"
      : "text-slate-700 hover:bg-slate-50"
    }`;

  const cartCount = 3;

  return (
    <nav className="glass-header sticky top-0 z-50 transition-all duration-300 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">

          {/* Logo */}
          <Link to="/" className="text-2xl font-black text-slate-900 group flex items-center gap-2">
            <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary-200 group-hover:rotate-12 transition-transform duration-300">S</div>
            <span className="tracking-tighter">Triple S</span>
          </Link>

          {/* Navigation Links and Actions */}
          <div className="flex items-center space-x-2">
            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-2">
              <NavLink to="/" className={navLinkStyles}>Home</NavLink>
              <NavLink to="/products" className={navLinkStyles}>Products</NavLink>
              <NavLink to="/about" className={navLinkStyles}>About</NavLink>
              <NavLink to="/contact" className={navLinkStyles}>Contact</NavLink>
              <div className="h-6 w-px bg-slate-200 mx-4" />
            </div>

            {/* Actions (Always Visible: Mobile & Desktop) */}
            <div className="flex items-center space-x-1 sm:space-x-2">
              {/* Profile Dropdown */}
              <div className="relative" ref={profileMenuRef}>
                <button
                  onClick={toggleProfileSubmenu}
                  className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-primary-50 hover:text-primary-600 transition-all active:scale-95"
                >
                  <FaUser size={16} />
                </button>

                {profileOpen && (
                  <div className="absolute right-0 mt-3 w-48 bg-white/90 backdrop-blur-xl border border-slate-100 rounded-2xl shadow-2xl p-2 animate-fade-in-up">
                    <Link
                      to="/login"
                      onClick={() => setProfileOpen(false)}
                      className="flex items-center px-4 py-3 text-sm font-bold text-slate-700 hover:bg-primary-50 hover:text-primary-600 rounded-xl transition-all"
                    >
                      Login
                    </Link>
                    <Link
                      to="/register"
                      onClick={() => setProfileOpen(false)}
                      className="flex items-center px-4 py-3 text-sm font-bold text-slate-700 hover:bg-primary-50 hover:text-primary-600 rounded-xl transition-all"
                    >
                      Register
                    </Link>
                  </div>
                )}
              </div>

              {/* Cart */}
              <NavLink to="/cart" className={navLinkStyles}>
                <div className="relative">
                  <FaShoppingCart size={20} />
                  <span className={`absolute -top-3 -right-3 bg-primary-600 text-white text-[10px] font-black rounded-full h-5 w-5 flex items-center justify-center shadow-lg ${cartCount > 0 ? 'animate-bounce' : ''}`}>
                    {cartCount}
                  </span>
                </div>
              </NavLink>

              {/* Mobile Menu Button (Hamburger) */}
              <div className="md:hidden ml-1" ref={mobileMenuRef}>
                <button
                  onClick={toggleMobileMenu}
                  className="text-slate-700 hover:text-primary-600 focus:outline-none bg-slate-100/50 rounded-2xl p-3 hover:bg-slate-100 transition-all active:scale-95"
                >
                  {mobileOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Links Only) */}
      <div
        className={`md:hidden absolute top-full left-4 right-4 mt-2 transition-all duration-300 ease-out z-50 ${mobileOpen
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
      >
        <div className="bg-white/100 backdrop-blur-2xl border border-slate-100 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden">
          <div className="flex flex-col p-6 space-y-1">
            <NavLink
              to="/"
              className={mobileNavLinkStyles}
              onClick={() => setMobileOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/products"
              className={mobileNavLinkStyles}
              onClick={() => setMobileOpen(false)}
            >
              Products
            </NavLink>
            <NavLink
              to="/about"
              className={mobileNavLinkStyles}
              onClick={() => setMobileOpen(false)}
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={mobileNavLinkStyles}
              onClick={() => setMobileOpen(false)}
            >
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
