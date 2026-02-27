import React from "react";
import { Link } from "react-router-dom";

interface Category {
  id: number;
  name: string;
  image: string;
  link: string;
  productCount: number;
  isNew?: boolean;
  isTrending?: boolean;
}

const categories: Category[] = [
  {
    id: 1,
    name: "Desktop PCs",
    image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&q=80&w=800",
    link: "/products?category=desktops",
    productCount: 58,
    isTrending: true,
  },
  {
    id: 2,
    name: "Laptops",
    image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&q=80&w=800",
    link: "/products?category=laptops",
    productCount: 46,
    isNew: true,
  },
  {
    id: 3,
    name: "Printers",
    image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&q=80&w=800",
    link: "/products?category=printers",
    productCount: 39,
  },
  {
    id: 4,
    name: "PC Components",
    image: "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&q=80&w=800",
    link: "/products?category=components",
    productCount: 67,
  },
];

const Categories: React.FC = () => {
  return (
    <section className="py-6 relative overflow-hidden bg-white">
      {/* Background accent */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-slate-50 rounded-full blur-3xl -z-10 translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 text-center tracking-tight animate-fade-in-up">
            Shop by <span className="text-gradient">Category</span>
          </h2>
          <div className="h-1.5 w-20 bg-primary-600 rounded-full animate-scale-in" />
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <Link
              to={category.link}
              key={category.id}
              className={`relative group rounded-[2.5rem] overflow-hidden shadow-xl shadow-slate-200/50 hover:shadow-primary-900/10 transition-all duration-500 hover:-translate-y-3 animate-fade-in-up stagger-${(index % 4) + 1}`}
            >
              {/* Image Container */}
              <div className="w-full aspect-[4/5] overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              </div>

              {/* Text Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col items-center text-center">
                <h3 className="text-white text-2xl font-black tracking-tight drop-shadow-lg mb-1 group-hover:text-primary-400 transition-colors">
                  {category.name}
                </h3>
                <span className="text-slate-300 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  {category.productCount} Items
                </span>
              </div>

              {/* Badges */}
              <div className="absolute top-6 left-6 flex flex-col gap-2">
                {category.isNew && (
                  <span className="bg-primary-600 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
                    New
                  </span>
                )}
                {category.isTrending && (
                  <span className="bg-amber-500 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
                    Trending
                  </span>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
