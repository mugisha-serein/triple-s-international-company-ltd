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
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-10 border-t border-slate-900">
      {/* ---------- MAIN GRID ---------- */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* ---------- BRAND / ABOUT SECTION ---------- */}
        <div className="space-y-6">
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            Triple S <span className="text-primary-500">Intl.</span>
          </h2>
          <p className="text-slate-400 leading-relaxed text-sm md:text-base max-w-sm">
            Quality products, fast delivery, and trusted service worldwide.
            Shop with confidence — secure checkout and premium customer support.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4">
            {[FaFacebookF, FaInstagram, FaTiktok, FaTwitter, FaYoutube].map(
              (Icon, index) => (
                <a
                  key={index}
                  href="/"
                  aria-label="social-link"
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:bg-primary-600 hover:text-white hover:border-primary-500 hover:-translate-y-1 transition-all duration-300"
                >
                  <Icon className="text-lg" />
                </a>
              )
            )}
          </div>
        </div>

        {/* ---------- CUSTOMER SUPPORT ---------- */}
        <div>
          <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">
            Customer Support
          </h3>
          <ul className="space-y-4 text-slate-400">
            <li><a href="/" className="hover:text-primary-400 hover:underline transition-all">Help Center</a></li>
            <li><a href="/" className="hover:text-primary-400 hover:underline transition-all">FAQs</a></li>
            <li><a href="/" className="hover:text-primary-400 hover:underline transition-all">Shipping Info</a></li>
            <li><a href="/" className="hover:text-primary-400 hover:underline transition-all">Returns & Refunds</a></li>
            <li><a href="/" className="hover:text-primary-400 hover:underline transition-all">Order Tracking</a></li>
            <li><a href="/" className="hover:text-primary-400 hover:underline transition-all">Warranty</a></li>
          </ul>
        </div>

        {/* ---------- SHOP LINKS ---------- */}
        <div>
          <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Shop</h3>
          <ul className="space-y-4 text-slate-400">
            <li><a href="/" className="hover:text-primary-400 hover:underline transition-all">All Products</a></li>
            <li><a href="/" className="hover:text-primary-400 hover:underline transition-all">Categories</a></li>
            <li><a href="/" className="hover:text-primary-400 hover:underline transition-all">New Arrivals</a></li>
            <li><a href="/" className="hover:text-primary-400 hover:underline transition-all">Best Sellers</a></li>
            <li><a href="/" className="hover:text-primary-400 hover:underline transition-all">Deals & Offers</a></li>
          </ul>
        </div>

        {/* ---------- NEWSLETTER ---------- */}
        <div className="space-y-6">
          <h3 className="text-lg font-bold text-white mb-4 uppercase tracking-wider">Stay Updated</h3>
          <p className="text-slate-400 text-sm">
            Subscribe to receive exclusive deals & new product updates.
          </p>

          <div className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-5 py-3 bg-slate-900 border border-slate-800 rounded-xl text-slate-200 placeholder-slate-600 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all"
            />
            <button className="w-full py-3 px-6 flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 active:scale-95 transition-all text-white font-bold rounded-xl shadow-lg shadow-primary-900/20">
              <FaBell /> Subscribe Now
            </button>
          </div>
        </div>
      </div>

      {/* ---------- DIVIDER ---------- */}
      <div className="border-t border-slate-900 mt-20 pt-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">

          {/* Payment Icons */}
          <div className="flex gap-6 text-3xl text-slate-600">
            <SiVisa className="hover:text-slate-400 transition-colors" />
            <SiMastercard className="hover:text-slate-400 transition-colors" />
            <SiPaypal className="hover:text-slate-400 transition-colors" />
            <SiApplepay className="hover:text-slate-400 transition-colors" />
            <SiGooglepay className="hover:text-slate-400 transition-colors" />
          </div>

          {/* Copyright */}
          <p className="text-slate-500 text-xs md:text-sm font-medium">
            © {new Date().getFullYear()} Triple S International Company Ltd. <span className="hidden sm:inline">|</span> All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
