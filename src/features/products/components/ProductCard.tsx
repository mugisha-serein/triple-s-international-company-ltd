import React, { useState } from "react";
import { FaHeart, FaStar, FaEye, FaShoppingCart } from "react-icons/fa";
import type { Product } from "../../../hooks/products";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isWishlisted, setIsWishlisted] = useState(product.isFavorite || false);

  const toggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <FaStar
        key={i}
        className={`w-3 h-3 ${i < Math.floor(rating) ? "text-amber-400" : "text-white/20"}`}
      />
    ));
  };

  return (
    <div className="group relative transition-all duration-300">
      <div className="w-full aspect-[2/3] overflow-hidden rounded-[2rem] relative bg-slate-100 shadow-xl shadow-slate-200/50">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 z-10" />
        <div className="absolute inset-0 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500 z-10" />

        <img
          src={product.image}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />

        <div className="absolute top-5 left-5 right-5 flex justify-between items-start z-20">
          <div className="flex flex-col gap-2">
            {product.isNew && (
              <span className="bg-rose-500 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter shadow-lg w-max">
                New
              </span>
            )}
            {product.isFeatured && (
              <span className="bg-primary-600 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter shadow-lg w-max">
                Featured
              </span>
            )}
            {!product.inStock && (
              <span className="bg-slate-900/90 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter shadow-lg w-max">
                Out of Stock
              </span>
            )}
          </div>

          <button
            onClick={toggleWishlist}
            className={`p-3 rounded-2xl bg-white/40 backdrop-blur-md border border-white/20 transition-all duration-300 hover:bg-white hover:text-rose-500 ${isWishlisted ? "text-rose-500 bg-white shadow-lg" : "text-white"}`}
          >
            <FaHeart className="w-4 h-4" />
          </button>
        </div>

        <div className="absolute inset-0 flex flex-col justify-end p-5 z-20 pointer-events-none group-hover:pointer-events-auto">
          <div className="mb-6 space-y-2 overflow-hidden">
            <span className="text-[10px] font-black text-primary-400 uppercase tracking-[0.2em] block translate-x-[-20px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 ease-out delay-[50ms]">
              {product.category}
            </span>
            <h3 className="text-white font-black text-2xl leading-tight translate-x-[-30px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 ease-out delay-[100ms]">
              {product.name}
            </h3>
            <div className="flex items-center gap-2 translate-x-[-40px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 ease-out delay-[150ms]">
              <div className="flex text-amber-400">{renderStars(product.rating)}</div>
              <span className="text-white/40 text-[10px] font-bold">({product.reviewsCount})</span>
            </div>
          </div>

          <div className="flex items-center justify-between translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out delay-[200ms]">
            <div className="flex flex-col">
              {product.originalPrice && (
                <span className="text-white/40 line-through text-xs font-bold -mb-1">${product.originalPrice}</span>
              )}
              <span className="text-white font-black text-3xl tracking-tighter">${product.price}</span>
            </div>

            <div className="flex gap-2">
              <button className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white transition-all duration-300 hover:bg-primary-600 hover:border-primary-600">
                <FaEye className="w-4 h-4" />
              </button>
              <button className="p-4 rounded-2xl bg-primary-600 text-white shadow-xl shadow-primary-900/40 hover:bg-primary-500 transition-all duration-300 active:scale-90 flex items-center justify-center gap-2 px-6">
                <FaShoppingCart className="w-4 h-4" />
                <span className="text-[10px] font-black uppercase tracking-widest hidden sm:block">Add</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
