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
    name: "Electronics",
    image: "https://business-review.eu/wp-content/uploads/2018/04/electronic_devices.jpg",
    link: "/products?category=electronics",
    productCount: 120,
    isTrending: true,
  },
  {
    id: 2,
    name: "Fashion",
    image: "https://img.freepik.com/premium-photo/female-accessories-shoes-watches-perfume-lipstick-bracelet-necklace-with-cotton-branch-white-background-top-view_408798-8230.jpg",
    link: "/products?category=fashion",
    productCount: 75,
    isNew: true,
  },
  {
    id: 3,
    name: "Home & Kitchen",
    image: "https://img.freepik.com/free-photo/expressive-pretty-woman-posing_344912-808.jpg?semt=ais_hybrid&w=740&q=80",
    link: "/products?category=home-kitchen",
    productCount: 50,
  },
  {
    id: 4,
    name: "Sports",
    image: "https://static1.squarespace.com/static/595ea7d6e58c62dce01d1625/t/5e5969dc3ca1436a76e4eac1/1564065314028/aspen-project-play-kids-sports-participation.jpeg?format=1500w",
    link: "/products?category=sports",
    productCount: 40,
  },
];

const Categories: React.FC = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 text-center mb-10">
          Shop by Category
        </h2>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              to={category.link}
              key={category.id}
              className="relative group rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition border border-gray-100"
            >
              {/* Image */}
              <div className="w-full aspect-[4/3] overflow-hidden rounded-xl">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Overlay for text and badge */}
              <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition">
                <h3 className="text-white text-xl md:text-2xl font-semibold drop-shadow-md">
                  {category.name}
                </h3>
                <span className="text-white/90 text-sm mt-1 drop-shadow-md">
                  {category.productCount} Products
                </span>
              </div>

              {/* Badges */}
              <div className="absolute top-3 left-3 flex flex-col gap-1">
                {category.isNew && (
                  <span className="bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                    New
                  </span>
                )}
                {category.isTrending && (
                  <span className="bg-yellow-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
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
