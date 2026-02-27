import React, { useState } from "react";
import { FiChevronDown, FiX, FiFilter, FiRotateCcw } from "react-icons/fi";

export interface FiltersState {
  category?: string;
  brand?: string;
  priceMin?: number;
  priceMax?: number;
  rating?: string;
  inStock?: boolean;
  onSale?: boolean;
}

interface ProductsFiltersProps {
  filters: FiltersState;
  brands?: string[];
  isMobileOpen?: boolean;
  onClose?: () => void;
  onChange: (filters: FiltersState) => void;
}

const ProductsFilters: React.FC<ProductsFiltersProps> = ({
  filters,
  isMobileOpen = false,
  onClose,
  onChange,
}) => {
  const [openDropdowns, setOpenDropdowns] = useState({
    category: false,
    brand: false,
    price: false,
    rating: false,
  });

  const toggleDropdown = (key: keyof typeof openDropdowns) => {
    setOpenDropdowns({ ...openDropdowns, [key]: !openDropdowns[key] });
  };

  const handleCheckboxChange = (key: "inStock" | "onSale", value: boolean) =>
    onChange({ ...filters, [key]: value });
  const handlePriceChange = (key: "priceMin" | "priceMax", value: string) => {
    const num = Number(value);
    onChange({ ...filters, [key]: Number.isNaN(num) ? undefined : num });
  };
  const handleRatingChange = (value: string) => {
    onChange({ ...filters, rating: filters.rating === value ? undefined : value });
  };

  const handleClearAll = () => onChange({});

  const renderSection = (
    title: string,
    open: boolean,
    onToggle: () => void,
    children: React.ReactNode,
  ) => (
    <div className="border-b border-slate-100 last:border-0 group">
      <button
        type="button"
        className="w-full flex justify-between items-center py-5 text-xs font-black uppercase tracking-[0.2em] text-slate-900 group-hover:text-primary-600 transition-colors duration-300"
        onClick={onToggle}
      >
        {title}
        <div className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}>
          <FiChevronDown className="w-4 h-4" />
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[500px] mb-6 opacity-100" : "max-h-0 opacity-0"} flex flex-col gap-2`}
      >
        {children}
      </div>
    </div>
  );

  const apiErrorNotice = (type: string) => (
    <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl animate-fade-in">
      <div className="flex items-center gap-3 text-rose-500">
        <div className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
        <span className="text-[9px] font-black uppercase tracking-widest">System Message</span>
      </div>
      <p className="text-[10px] font-bold text-slate-500 leading-relaxed uppercase tracking-wider">
        The {type} list will be automatically updated by backend APIs. Dynamic selection is currently unavailable.
      </p>
    </div>
  );

  const filtersContent = (
    <div className="flex flex-col bg-white border-r border-slate-100 h-full w-full p-6">
      <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
        <div className="flex items-center gap-3 text-slate-900">
          <FiFilter className="w-4 h-4" />
          <span className="text-[11px] font-black uppercase tracking-[0.2em]">Filters</span>
        </div>
        <button
          onClick={handleClearAll}
          className="group flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-rose-50 text-slate-400 hover:text-rose-600 transition-all duration-300 active:scale-95"
        >
          <FiRotateCcw className="w-3.5 h-3.5 group-hover:rotate-[-45deg] transition-transform duration-500" />
          <span className="text-[10px] font-black uppercase tracking-widest">Reset All</span>
        </button>
      </div>

      {renderSection(
        "Category",
        openDropdowns.category,
        () => toggleDropdown("category"),
        apiErrorNotice("category")
      )}

      {renderSection(
        "Brand",
        openDropdowns.brand,
        () => toggleDropdown("brand"),
        apiErrorNotice("brand")
      )}

      {renderSection(
        "Price Range",
        openDropdowns.price,
        () => toggleDropdown("price"),
        <div className="flex flex-col gap-4 px-2">
          <div className="flex gap-3">
            <div className="flex-1 relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[10px] font-black text-slate-400">$</span>
              <input
                type="number"
                placeholder="Min"
                value={filters.priceMin ?? ""}
                onChange={(e) => handlePriceChange("priceMin", e.target.value)}
                className="w-full pl-8 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-2xl text-xs font-bold focus:outline-none focus:border-primary-600 focus:bg-white transition-all duration-300"
              />
            </div>
            <div className="flex-1 relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[10px] font-black text-slate-400">$</span>
              <input
                type="number"
                placeholder="Max"
                value={filters.priceMax ?? ""}
                onChange={(e) => handlePriceChange("priceMax", e.target.value)}
                className="w-full pl-8 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-2xl text-xs font-bold focus:outline-none focus:border-primary-600 focus:bg-white transition-all duration-300"
              />
            </div>
          </div>
        </div>,
      )}

      {renderSection(
        "Rating",
        openDropdowns.rating,
        () => toggleDropdown("rating"),
        <div className="grid grid-cols-1 gap-1">
          {["4", "3", "2"].map((value) => (
            <button
              key={value}
              className={`text-left w-full px-4 py-3 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all duration-300 ${filters.rating === value ? "bg-slate-900 text-white" : "hover:bg-slate-100 text-slate-500 hover:text-slate-900"}`}
              onClick={() => handleRatingChange(value)}
            >
              {value}+ Stars
            </button>
          ))}
        </div>,
      )}

      <div className="mt-6 flex flex-col gap-3">
        <label className="flex items-center justify-between group cursor-pointer p-6 bg-slate-50 rounded-[1.5rem] hover:bg-slate-100 transition-colors duration-300">
          <span className="text-[10px] font-black uppercase tracking-widest text-slate-600">In Stock</span>
          <div className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={filters.inStock ?? false}
              onChange={(e) => handleCheckboxChange("inStock", e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
          </div>
        </label>

        <label className="flex items-center justify-between group cursor-pointer p-4 bg-slate-50 rounded-[1.5rem] hover:bg-slate-100 transition-colors duration-300">
          <span className="text-[10px] font-black uppercase tracking-widest text-slate-600">On Sale</span>
          <div className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={filters.onSale ?? false}
              onChange={(e) => handleCheckboxChange("onSale", e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
          </div>
        </label>
      </div>
    </div>
  );

  return (
    <>
      <aside className="hidden lg:block w-full h-full overflow-y-auto no-scrollbar animate-fade-in-up stagger-3">
        {filtersContent}
      </aside>

      {isMobileOpen && (
        <div className="fixed inset-0 z-[100] flex md:hidden">
          <div
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm animate-fade-in"
            onClick={onClose}
          />
          <div className="relative bg-white w-[85%] max-w-sm p-4 h-full shadow-2xl overflow-y-auto animate-slide-in-right">
            <button
              className="absolute top-4 right-6 p-3 rounded-2xl bg-slate-100 text-slate-900 hover:bg-slate-200 transition-colors"
              onClick={onClose}
            >
              <FiX className="w-6 h-6" />
            </button>
            <div className="mt-14">{filtersContent}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductsFilters;
