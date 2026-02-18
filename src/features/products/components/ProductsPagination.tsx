import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface ProductsPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const ProductsPagination: React.FC<ProductsPaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  if (totalPages <= 1) return null;

  const getPages = () => {
    const pages: (number | "...")[] = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
      return pages;
    }

    pages.push(1);

    if (currentPage > 4) pages.push("...");

    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);

    for (let i = start; i <= end; i++) pages.push(i);

    if (currentPage < totalPages - 3) pages.push("...");

    pages.push(totalPages);

    return pages;
  };

  return (
    <div className="flex justify-center items-center gap-2 mt-10">
      {/* PREVIOUS */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex items-center gap-1 px-3 py-2 rounded-lg border text-sm
                   disabled:opacity-40 disabled:cursor-not-allowed
                   hover:bg-gray-100 transition"
      >
        <FiChevronLeft size={16} />
        Prev
      </button>

      {/* PAGE NUMBERS */}
      {getPages().map((page, index) =>
        page === "..." ? (
          <span
            key={`dots-${index}`}
            className="px-3 py-2 text-gray-400 text-sm"
          >
            …
          </span>
        ) : (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition
              ${
                page === currentPage
                  ? "bg-gray-900 text-white"
                  : "border hover:bg-gray-100"
              }`}
          >
            {page}
          </button>
        )
      )}

      {/* NEXT */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex items-center gap-1 px-3 py-2 rounded-lg border text-sm
                   disabled:opacity-40 disabled:cursor-not-allowed
                   hover:bg-gray-100 transition"
      >
        Next
        <FiChevronRight size={16} />
      </button>
    </div>
  );
};

export default ProductsPagination;
