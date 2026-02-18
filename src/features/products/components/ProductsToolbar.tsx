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
    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-12 animate-fade-in-up stagger-4">

      {/* Search Input Container */}
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
          placeholder="SEARCH OUR COLLECTIONS..."
          className="w-full pl-14 pr-6 py-4 bg-white border border-slate-100 rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] text-slate-900 placeholder:text-slate-300 focus:outline-none focus:border-primary-600 focus:ring-4 focus:ring-primary-600/5 transition-all duration-300 shadow-sm"
        />
      </div>

      {/* Controls Container */}
      <div className="flex items-center gap-4 justify-between lg:justify-end">

        {/* Mobile Filter Trigger (Matches Sidebar Style) */}
        <button
          onClick={onOpenFilters}
          className="lg:hidden flex items-center gap-3 active:scale-95 transition-all"
        >
          <FiFilter className="text-primary-600 w-4 h-4" />
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-900 whitespace-nowrap">Filter By</span>
        </button>

        {/* Custom Styled Sort Dropdown */}
        <div className="relative flex-1 lg:flex-none min-w-[200px] group">
          <select
            value={sort}
            onChange={(e) => onSort(e.target.value)}
            className="w-full appearance-none px-6 py-4 bg-white border border-slate-100 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] text-slate-900 focus:outline-none focus:border-primary-600 focus:ring-4 focus:ring-primary-600/5 transition-all duration-300 shadow-sm cursor-pointer"
          >
            <option value="newest">Sort By: Newest</option>
            <option value="price_low_high">Price: Low to High</option>
            <option value="price_high_low">Price: High to Low</option>
            <option value="best_selling">Best Selling</option>
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
