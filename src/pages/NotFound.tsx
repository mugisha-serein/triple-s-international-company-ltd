import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <main className="min-h-[700px] bg-slate-50 px-6 py-16 flex items-center">
      <div className="max-w-2xl mx-auto w-full text-center animate-fade-in-up">
        <p className="text-sm font-black uppercase tracking-[0.3em] text-primary-600">404</p>
        <h1 className="text-5xl font-black text-slate-900 mt-3 mb-4">Page not found</h1>
        <p className="text-slate-500 mb-8">The page you requested doesn’t exist or has been moved.</p>
        <Link to="/" className="inline-flex bg-slate-900 text-white px-7 py-3 rounded-xl font-bold hover:bg-primary-600 transition-colors">
          Go Home
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
