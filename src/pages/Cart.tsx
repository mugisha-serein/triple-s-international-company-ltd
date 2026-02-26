import React from "react";
import { Link } from "react-router-dom";

const Cart: React.FC = () => {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16">
      <div className="max-w-4xl mx-auto text-center bg-white border border-slate-100 rounded-3xl p-12 shadow-sm animate-fade-in-up">
        <p className="text-xs font-black uppercase tracking-[0.3em] text-primary-600 mb-4">Cart</p>
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-3">Your cart is currently empty</h1>
        <p className="text-slate-600 mb-8">Start browsing our catalog and add your favorite products.</p>
        <Link to="/products" className="inline-flex bg-slate-900 text-white px-7 py-3 rounded-xl font-bold hover:bg-primary-600 transition-colors">
          Browse Products
        </Link>
      </div>
    </main>
  );
};

export default Cart;
