import React from "react";
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
      <div className="py-20 justify-center text-center animate-fade-in">
        <div className="inline-flex p-4 rounded-full bg-rose-50 text-rose-500 mb-6">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <p className="text-xl font-black text-slate-900 mb-2">Something went wrong.</p>
        <p className="text-slate-500 font-medium">Our servers are taking a short break. Please try again later.</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className="animate-pulse flex flex-col gap-4">
            <div className="w-full aspect-[2/3] bg-slate-200 rounded-[2rem]" />
            <div className="h-4 bg-slate-200 rounded-full w-1/3" />
            <div className="h-8 bg-slate-200 rounded-2xl w-3/4" />
          </div>
        ))}
      </div>
    );
  }

  if (!products.length) {
    return (
      <div className="py-20 text-center animate-fade-in">
        <div className="inline-flex p-4 rounded-full bg-slate-50 text-slate-400 mb-6 font-black text-4xl">?</div>
        <h3 className="text-2xl font-black text-slate-900 mb-2">No products found</h3>
        <p className="text-slate-500 font-medium">Try adjusting your filters or searching for something else.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 animate-fade-in">
      {products.map((product, index) => (
        <div key={product.id} className={`animate-fade-in-up stagger-${(index % 6) + 1}`}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductsGrid;
