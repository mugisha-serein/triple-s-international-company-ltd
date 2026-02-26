import React, { useState } from "react";
import { FiChevronDown, FiX } from "react-icons/fi";

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

const categories = ["electronics", "fashion", "home", "beauty"];

const ProductsFilters: React.FC<ProductsFiltersProps> = ({
  filters,
  brands = [],
  isMobileOpen = false,
  onClose,
  onChange,
}) => {
  const [openDropdowns, setOpenDropdowns] = useState({
    category: true,
    brand: true,
    price: true,
    rating: true,
  });

  const toggleDropdown = (key: keyof typeof openDropdowns) => {
    setOpenDropdowns({ ...openDropdowns, [key]: !openDropdowns[key] });
  };

  const handleCategoryChange = (category: string) =>
    onChange({ ...filters, category: filters.category === category ? undefined : category });
  const handleBrandChange = (brand: string) =>
    onChange({ ...filters, brand: filters.brand === brand ? undefined : brand });
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

  const filtersContent = (
    <div className="flex flex-col">
      <div className="flex items-center justify-between mb-8">
        <button
          onClick={handleClearAll}
          className="text-[10px] font-bold text-slate-400 hover:text-rose-500 uppercase tracking-widest transition-colors duration-300"
        >
          Reset
        </button>
      </div>

      {renderSection(
        "Category",
        openDropdowns.category,
        () => toggleDropdown("category"),
        <div className="grid grid-cols-1 gap-1">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`text-left w-full px-4 py-3 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all duration-300 group/btn relative overflow-hidden ${filters.category === cat
                ? "bg-slate-900 text-white shadow-xl shadow-slate-900/20 translate-x-1"
                : "hover:bg-slate-100 text-slate-500 hover:text-slate-900"
                }`}
              onClick={() => handleCategoryChange(cat)}
            >
              <span className="relative z-10">{cat}</span>
              {filters.category === cat && (
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary-600" />
              )}
            </button>
          ))}
        </div>,
      )}

      {brands.length > 0 &&
        renderSection(
          "Brand",
          openDropdowns.brand,
          () => toggleDropdown("brand"),
          <div className="grid grid-cols-1 gap-1">
            {brands.map((brand) => (
              <button
                key={brand}
                className={`text-left w-full px-4 py-3 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all duration-300 relative overflow-hidden ${filters.brand === brand
                  ? "bg-slate-900 text-white shadow-xl shadow-slate-900/20 translate-x-1"
                  : "hover:bg-slate-100 text-slate-500 hover:text-slate-900"
                  }`}
                onClick={() => handleBrandChange(brand)}
              >
                <span className="relative z-10">{brand}</span>
                {filters.brand === brand && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary-600" />
                )}
              </button>
            ))}
          </div>,
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
        <label className="flex items-center justify-between group cursor-pointer p-4 bg-slate-50 rounded-[1.5rem] hover:bg-slate-100 transition-colors duration-300">
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
      <aside className="hidden md:block sticky top-24 w-72 max-h-[calc(100vh-8rem)] overflow-y-auto pr-6 custom-scrollbar animate-fade-in-up stagger-3">
        {filtersContent}
      </aside>

      {isMobileOpen && (
        <div className="fixed inset-0 z-[100] flex md:hidden">
          <div
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm animate-fade-in"
            onClick={onClose}
          />
          <div className="relative bg-white w-[85%] max-w-sm p-8 h-full shadow-2xl overflow-y-auto animate-slide-in-right">
            <button
              className="absolute top-6 right-6 p-3 rounded-2xl bg-slate-100 text-slate-900 hover:bg-slate-200 transition-colors"
              onClick={onClose}
            >
              <FiX className="w-6 h-6" />
            </button>
            <div className="mt-4">{filtersContent}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductsFilters;
