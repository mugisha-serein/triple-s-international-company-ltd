import React from "react";
import { FiInbox } from "react-icons/fi";
import ProductCard from "./ProductCard";
import type { Product } from "../../../hooks/products";

interface ProductsGridProps {
  products: Product[];
  loading: boolean;
  error?: string;
}

const ProductsGrid: React.FC<ProductsGridProps> = ({
  products,
  loading,
  error,
}) => {
  if (error) {
    return (
      <div className="flex-1 py-20 flex flex-col items-center justify-center text-center animate-fade-in">
        <div className="inline-flex p-6 rounded-3xl bg-rose-50 text-rose-500 mb-8 shadow-xl shadow-rose-500/10 ring-1 ring-rose-100">
          <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <h3 className="text-2xl font-black text-slate-900 mb-3 tracking-tight">System Notification</h3>
        <p className="max-w-xs text-slate-500 font-medium leading-relaxed">Something went wrong with the data retrieval. Please refresh or try again later.</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex-1 flex items-center justify-center py-32">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-slate-100 border-t-primary-600 rounded-full animate-spin" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-2 h-2 bg-primary-600 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    );
  }

  if (!products.length) {
    return (
      <div className="flex-1 py-24 flex flex-col items-center justify-center text-center animate-fade-in-up">
        <div className="relative mb-10">
          <div className="absolute inset-0 bg-primary-100/50 blur-3xl rounded-full scale-150 transform transition-transform duration-1000 group-hover:scale-110" />
          <div className="relative inline-flex p-10 rounded-[3rem] bg-white border border-slate-100 shadow-2xl shadow-primary-900/10 text-primary-600">
            <FiInbox className="w-16 h-16 stroke-[1.5]" />
          </div>
          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-amber-400 rounded-2xl flex items-center justify-center shadow-lg transform rotate-12">
            <span className="text-white text-lg font-black leading-none">?</span>
          </div>
        </div>

        <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">
          No Products Available
        </h3>
        <div className="max-w-md space-y-4">
          <p className="text-slate-500 font-medium text-lg leading-relaxed">
            We couldn't find any products matching your current criteria.
          </p>
          <div className="pt-2">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 mb-4">You might want to:</p>
            <ul className="flex flex-wrap justify-center gap-3">
              {['Adjust filters', 'Clear search', 'Check spelling'].map((tip) => (
                <li key={tip} className="px-5 py-2.5 bg-slate-50 border border-slate-100 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-600">
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsGrid;
