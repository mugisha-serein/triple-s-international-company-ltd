import { useMemo, useState } from "react";
import ProductsHeader from "../features/products/components/ProductsHeader";
import ProductsToolbar from "../features/products/components/ProductsToolbar";
import ProductsFilters, { type FiltersState } from "../features/products/components/ProductsFilters";
import ProductsGrid from "../features/products/components/ProductsGrid";
import ProductsPagination from "../features/products/components/ProductsPagination";
import productsData from "../hooks/products";

const ITEMS_PER_PAGE = 9;

const Products = () => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("latest");
  const [currentPage, setCurrentPage] = useState(1);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState<FiltersState>({});

  const brands = useMemo(
    () => Array.from(new Set(productsData.map((product) => product.brand))),
    [],
  );

  const processedProducts = useMemo(() => {
    let result = [...productsData];

    if (search.trim()) {
      result = result.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.brand.toLowerCase().includes(search.toLowerCase()),
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
  }, [search, filters, sort]);

  const totalPages = Math.ceil(processedProducts.length / ITEMS_PER_PAGE);

  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return processedProducts.slice(start, start + ITEMS_PER_PAGE);
  }, [processedProducts, currentPage]);

  const handleFilterChange = (cb: () => void) => {
    cb();
    setCurrentPage(1);
  };

  return (
    <div className="max-w-full mx-auto px-6 py-10">
      <ProductsHeader totalCount={processedProducts.length} />

      <ProductsToolbar
        search={search}
        onSearch={(v) => handleFilterChange(() => setSearch(v))}
        sort={sort}
        onSort={(v) => handleFilterChange(() => setSort(v))}
        onOpenFilters={() => setIsFilterOpen(true)}
      />

      <div className="flex gap-8 mt-8">
        <ProductsFilters
          filters={filters}
          brands={brands}
          isMobileOpen={isFilterOpen}
          onClose={() => setIsFilterOpen(false)}
          onChange={(nextFilters) => {
            setFilters(nextFilters);
            setCurrentPage(1);
          }}
        />

        <ProductsGrid products={paginatedProducts} loading={false} />
      </div>

      {totalPages > 1 && (
        <ProductsPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
};

export default Products;
