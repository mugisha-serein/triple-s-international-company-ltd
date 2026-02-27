import React from "react";
import { FiSearch, FiFilter, FiChevronDown } from "react-icons/fi";

interface ProductsToolbarProps {
  search: string;
  onSearch: (value: string) => void;
  sort: string;
  onSort: (value: string) => void;
  onOpenFilters?: () => void;
}

const ProductsToolbar: React.FC<ProductsToolbarProps> = ({
  search,
  onSearch,
  sort,
  onSort,
  onOpenFilters,
}) => {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-6 animate-fade-in-up stagger-4">
      <div className="relative group flex-1 max-w-xl">
        <label htmlFor="search-products" className="sr-only">Search Products</label>
        <div className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary-600 transition-colors duration-300">
          <FiSearch className="w-5 h-5" />
        </div>
        <input
          id="search-products"
          type="text"
          value={search}
          onChange={(e) => onSearch(e.target.value)}
          placeholder="Search desktops, printers, parts, or repairs..."
          className="w-full pl-14 pr-4 py-4 bg-white border border-slate-100 rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] text-slate-900 placeholder:text-slate-300 focus:outline-none focus:border-primary-600 focus:ring-4 focus:ring-primary-600/5 transition-all duration-300 shadow-sm"
        />
      </div>

      <div className="flex items-center gap-4 justify-between lg:justify-end">
        <button
          onClick={onOpenFilters}
          className="md:hidden flex items-center gap-3 px-4 py-2 bg-white border border-slate-100 rounded-2xl shadow-sm active:scale-95 transition-all duration-300"
        >
          <FiFilter className="w-4 h-4 text-primary-600" />
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-900 px-3 py-1.5 rounded-full whitespace-nowrap">
            Filter By
          </span>
        </button>

        <div className="relative flex-1 lg:flex-none min-w-[100px] group">
          <select
            value={sort}
            onChange={(e) => onSort(e.target.value)}
            className="w-full appearance-none px-4 py-4 bg-white rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] text-slate-900 focus:outline-none focus:border-primary-600 focus:ring-4 focus:ring-primary-600/5 transition-all duration-300 shadow-sm cursor-pointer"
          >
            <option value="latest">Sort By: Latest</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
          <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 group-hover:text-primary-600 transition-colors duration-300">
            <FiChevronDown className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsToolbar;
