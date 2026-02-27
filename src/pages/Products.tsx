import { useMemo, useState } from "react";
import ProductsHeader from "../features/products/components/ProductsHeader";
import ProductsToolbar from "../features/products/components/ProductsToolbar";
import ProductsFilters, { type FiltersState } from "../features/products/components/ProductsFilters";
import ProductsGrid from "../features/products/components/ProductsGrid";
import { productsData } from "../hooks/products";

const Products = () => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("latest");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState<FiltersState>({});

  const brands = useMemo(
    () => Array.from(new Set((productsData || []).map((product) => product.brand))),
    [productsData],
  );

  const processedProducts = useMemo(() => {
    let result = [...(productsData || [])];

    if (search.trim()) {
      const searchLower = search.toLowerCase();
      result = result.filter((p) =>
        p.name.toLowerCase().includes(searchLower) ||
        p.brand.toLowerCase().includes(searchLower),
      );
    }

    if (filters.category) {
      result = result.filter((p) => p.category === filters.category);
    }

    if (filters.brand) {
      result = result.filter((p) => p.brand === filters.brand);
    }

    if (typeof filters.priceMin === "number") {
      result = result.filter((p) => p.price >= filters.priceMin!);
    }

    if (typeof filters.priceMax === "number") {
      result = result.filter((p) => p.price <= filters.priceMax!);
    }

    if (filters.rating) {
      const minRating = Number(filters.rating);
      result = result.filter((p) => p.rating >= minRating);
    }

    if (filters.inStock) {
      result = result.filter((p) => p.inStock);
    }

    if (filters.onSale) {
      result = result.filter((p) => p.onSale);
    }

    switch (sort) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        result.sort((a, b) => b.id - a.id);
        break;
    }

    return result;
  }, [search, filters, sort, productsData]);

  return (
    <div className="flex flex-col h-[calc(100vh-80px)] overflow-hidden bg-white">
      <div className="flex-none px-6 pt-10">
        <ProductsHeader totalCount={processedProducts.length} />

        <ProductsToolbar
          search={search}
          onSearch={setSearch}
          sort={sort}
          onSort={setSort}
          onOpenFilters={() => setIsFilterOpen(true)}
        />
      </div>

      <div className="flex-1 flex overflow-hidden min-h-0">
        <div className="flex-none w-[20%] hidden lg:block overflow-hidden no-scrollbar">
          <ProductsFilters
            filters={filters}
            brands={brands}
            isMobileOpen={isFilterOpen}
            onClose={() => setIsFilterOpen(false)}
            onChange={setFilters}
          />
        </div>

        <div className="flex-1 overflow-y-auto px-6 pb-10 no-scrollbar">
          <ProductsGrid products={processedProducts} loading={false} />
        </div>
      </div>

      {/* Mobile Filter Drawer Overlay - handled within components but context kept here */}
      <div className="lg:hidden">
        <ProductsFilters
          filters={filters}
          brands={brands}
          isMobileOpen={isFilterOpen}
          onClose={() => setIsFilterOpen(false)}
          onChange={setFilters}
        />
      </div>
    </div>
  );
};

export default Products;
