import { useMemo, useState } from "react";
import ProductsHeader from "../features/products/components/ProductsHeader";
import ProductsToolbar from "../features/products/components/ProductsToolbar";
import ProductsFilters from "../features/products/components/ProductsFilters";
import ProductsGrid from "../features/products/components/ProductsGrid";
import ProductsPagination from "../features/products/components/ProductsPagination";
import productsData from "../hooks/products"; // your existing structure

const ITEMS_PER_PAGE = 12;

const Products = () => {
  // 🔹 Core state
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<string | null>(null);
  const [sort, setSort] = useState("latest");
  const [currentPage, setCurrentPage] = useState(1);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // 🔹 Derived: filtered + sorted
  const processedProducts = useMemo(() => {
    let result = [...productsData];

    // SEARCH
    if (search) {
      result = result.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    // CATEGORY
    if (category) {
      result = result.filter((p) => p.category === category);
    }

    // SORT
    switch (sort) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result.sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));
        break;
      default:
        break;
    }

    return result;
  }, [search, category, sort]);

  // 🔹 Pagination
  const totalPages = Math.ceil(processedProducts.length / ITEMS_PER_PAGE);

  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return processedProducts.slice(start, start + ITEMS_PER_PAGE);
  }, [processedProducts, currentPage]);

  // 🔹 Reset page on filter change (IMPORTANT)
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
          filters={{
            category: category ?? "",
            priceRange: [0, 1000], // or your default
            rating: "",
            inStock: false,
            onSale: false,
          }}
          isMobileOpen={isFilterOpen}
          onClose={() => setIsFilterOpen(false)}
          onChange={(newFilters) => {
            setCategory(newFilters.category ?? null);
            // handle other filters if you implement them later
            setCurrentPage(1); // reset page
          }}
        />

        <ProductsGrid products={paginatedProducts} loading={false} />
      </div>

      <ProductsPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default Products;
