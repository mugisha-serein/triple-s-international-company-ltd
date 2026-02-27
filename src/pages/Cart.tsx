import React from "react";
import { Link } from "react-router-dom";
import { FaChevronRight, FaHome, FaShoppingCart, FaArrowRight } from "react-icons/fa";

const Cart: React.FC = () => {
  return (
    <div className="overflow-x-hidden min-h-screen bg-slate-50 relative">
      {/* Background blobs (Consistency with Home/About/Contact) */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden opacity-30">
        <div className="absolute top-[15%] left-[-10%] w-[40vw] h-[40vw] bg-primary-200/40 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] right-[-5%] w-[35vw] h-[35vw] bg-slate-300/30 rounded-full blur-[100px]" />
      </div>

      <main className="relative z-10">
        {/* Breadcrumb Navigation */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-8">
          <nav
            className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400"
            aria-label="Breadcrumb"
          >
            <ol className="flex items-center gap-4">
              <li className="flex items-center gap-2 group">
                <Link
                  to="/"
                  className="flex items-center gap-2 hover:text-primary-600 transition-colors duration-300"
                >
                  <FaHome className="text-xs" />
                  <span>Home</span>
                </Link>
              </li>
              <li className="text-slate-300">
                <FaChevronRight className="w-2 h-2" />
              </li>
              <li className="text-primary-600">
                <span>Shoping Cart</span>
              </li>
            </ol>
          </nav>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-20">
          <div className="space-y-8 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              Your <span className="text-primary-600">Cart</span>
            </h1>

            {/* Empty State Card */}
            <div className="bg-white border border-slate-100 rounded-[2.5rem] p-12 md:p-20 shadow-2xl shadow-slate-200/50 flex flex-col items-center text-center space-y-8 max-w-3xl mx-auto border-dashed border-2 border-slate-200 bg-slate-50/50">
              <div className="w-24 h-24 bg-white rounded-3xl shadow-xl shadow-slate-200 flex items-center justify-center text-slate-400">
                <FaShoppingCart size={40} className="opacity-20 translate-x-1" />
              </div>

              <div className="space-y-3">
                <h2 className="text-3xl font-black text-slate-900">Your cart is currently empty</h2>
                <p className="text-lg text-slate-500 font-medium max-w-md mx-auto leading-relaxed">
                  Looks like you haven't added anything to your cart yet. Explore our latest collections and find something you'll love!
                </p>
              </div>

              <Link
                to="/products"
                className="group flex items-center gap-3 bg-primary-600 hover:bg-primary-500 text-white px-10 py-5 rounded-2xl font-black text-lg transition-all shadow-xl shadow-primary-200 hover:shadow-primary-300 active:scale-95"
              >
                <span>Browse Our Products</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cart;
