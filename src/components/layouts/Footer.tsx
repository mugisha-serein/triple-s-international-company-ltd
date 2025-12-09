import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaTiktok,
  FaBell,
} from "react-icons/fa";
import {
  SiVisa,
  SiMastercard,
  SiPaypal,
  SiGooglepay,
  SiApplepay,
} from "react-icons/si";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-14 pb-8">
      {/* ---------- MAIN GRID ---------- */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* ---------- BRAND / ABOUT SECTION ---------- */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            Triple S International
          </h2>
          <p className="text-gray-400 leading-relaxed mb-6">
            Quality products, fast delivery, and trusted service worldwide.
            Shop with confidence — secure checkout and premium customer support.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            {[FaFacebookF, FaInstagram, FaTiktok, FaTwitter, FaYoutube].map(
              (Icon, index) => (
                <a
                  key={index}
                  href="#"
                  aria-label="social-link"
                  className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                >
                  <Icon className="text-lg" />
                </a>
              )
            )}
          </div>
        </div>

        {/* ---------- CUSTOMER SUPPORT ---------- */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
            Customer Support
          </h3>
          <ul className="space-y-3 text-gray-400">
            <li><a href="#" className="hover:text-white transition">Help Center</a></li>
            <li><a href="#" className="hover:text-white transition">FAQs</a></li>
            <li><a href="#" className="hover:text-white transition">Shipping Info</a></li>
            <li><a href="#" className="hover:text-white transition">Returns & Refunds</a></li>
            <li><a href="#" className="hover:text-white transition">Order Tracking</a></li>
            <li><a href="#" className="hover:text-white transition">Warranty</a></li>
          </ul>
        </div>

        {/* ---------- SHOP LINKS ---------- */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Shop</h3>
          <ul className="space-y-3 text-gray-400">
            <li><a href="#" className="hover:text-white transition">All Products</a></li>
            <li><a href="#" className="hover:text-white transition">Categories</a></li>
            <li><a href="#" className="hover:text-white transition">New Arrivals</a></li>
            <li><a href="#" className="hover:text-white transition">Best Sellers</a></li>
            <li><a href="#" className="hover:text-white transition">Deals & Offers</a></li>
          </ul>
        </div>

        {/* ---------- NEWSLETTER ---------- */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Stay Updated</h3>
          <p className="text-gray-400 mb-4">
            Subscribe to receive exclusive deals & new product updates.
          </p>

          {/* Email Input */}
          <div className="flex items-center bg-gray-800 rounded-xl overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 bg-gray-800 text-gray-200 placeholder-gray-500 focus:outline-none"
            />
            <button className="min-w-[140px] py-3 px-6 flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-700 transition text-white font-semibold">
             <FaBell /> Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* ---------- DIVIDER ---------- */}
      <div className="border-t border-gray-800 mt-12 pt-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Payment Icons */}
          <div className="flex gap-4 text-3xl text-gray-400">
            <SiVisa />
            <SiMastercard />
            <SiPaypal />
            <SiApplepay />
            <SiGooglepay />
          </div>

          {/* Copyright */}
          <p className="text-gray-500 text-sm text-center md:text-right">
            © {new Date().getFullYear()} Triple S International Company Ltd. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
