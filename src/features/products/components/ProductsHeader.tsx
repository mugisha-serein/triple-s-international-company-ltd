import React from "react";
import { Link } from "react-router-dom";
import { FaChevronRight, FaHome } from "react-icons/fa";

interface ProductsHeaderProps {
  totalCount?: number;
}

const ProductsHeader: React.FC<ProductsHeaderProps> = () => {
  return (
    <header className="relative mb-4 animate-fade-in-up">
      {/* Breadcrumb - Clean & Minimal */}
      <nav
        className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6 stagger-1"
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
            <span>Products</span>
          </li>
        </ol>
      </nav>

      {/* Main Header Content */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-100 pb-6 stagger-2">
        <div className="space-y-3">
          <h1 className="text-5xl md:text-5xl font-black text-slate-900 tracking-tight leading-[0.2]">
            All <span className="text-primary-600">Products</span>
          </h1>
        </div>
      </div>

      {/* Background Accent Element */}
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary-100/30 blur-[100px] rounded-full -z-10 pointer-events-none" />
    </header>
  );
};

export default ProductsHeader;
