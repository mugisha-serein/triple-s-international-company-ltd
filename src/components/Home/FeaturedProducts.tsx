import React, { useState } from "react";
import { FaHeart, FaStar, FaRegStar } from "react-icons/fa";
import Button from "../Button/Button";

interface Product {
  id: number;
  name: string;
  images: string[];
  price: number;
  originalPrice?: number;
  discount?: number;
  rating: number; // 0-5
  reviews: number;
  stock: number;
  isNew?: boolean;
  isBestSeller?: boolean;
}

const products: Product[] = [
  {
    id: 1,
    name: "Wireless Headphones",
    images: ["https://i5.walmartimages.com/seo/VILINICE-Noise-Cancelling-Headphones-Wireless-Bluetooth-Over-Ear-Headphones-with-Microphone-Black-Q8_b994b99c-835f-42fc-8094-9f6be0f9273b.be59955399cdbd1c25011d4a4251ba9b.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF", "/images/product1-alt.jpg"],
    price: 120,
    originalPrice: 150,
    discount: 20,
    rating: 4.5,
    reviews: 120,
    stock: 15,
    isNew: true,
  },
  {
    id: 2,
    name: "Smart Watch",
    images: ["https://i5.walmartimages.com/seo/Apple-Watch-Ultra-2-49-mm-titanium-smart-watch-Ocean-band-fluoroelastomer-orange-wrist-size-5-12-7-87-64-GB-Wi-Fi-LTE-UWB-Bluetooth-4G-2-17-oz_554813d6-72ed-4e7c-9582-0c3399f1bf02.69cc606406b601a85df32816cf1b5838.jpeg  ", "/images/product2-alt.jpg"],
    price: 200,
    rating: 4,
    reviews: 50,
    stock: 0,
    isBestSeller: true,
  },
  {
    id: 3,
    name: "Gaming Mouse",
    images: ["https://images.ctfassets.net/w5r1fvmogo3f/Cend6NMex8wf3fZZ8b0cR/ecdb507e7840c6ac60a82f7831bbb9f7/rival_3_wl_gen_2_black_pdp_img_buy_primary_on.png?fm=webp&q=90&fit=scale&w=1920"],
    price: 60,
    rating: 5,
    reviews: 200,
    stock: 5,
  },
  {
    id: 4,
    name: "Bluetooth Speaker",
    images: ["https://www.boat-lifestyle.com/cdn/shop/files/Stone_SpinXPro_1_1024x.png?v=1709717404", "/images/product4-alt.jpg"],
    price: 80,
    rating: 4.2,
    reviews: 80,
    stock: 8,
    discount: 10,
  },
];

const FeaturedProducts: React.FC = () => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const [wishlist, setWishlist] = useState<number[]>([]);

  const toggleWishlist = (id: number) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className="text-yellow-400">
          {i <= Math.floor(rating) ? <FaStar /> : <FaRegStar />}
        </span>
      );
    }
    return stars;
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 text-center mb-10">
          Featured Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => {
            const isHovered = hoveredProduct === product.id;
            const mainImage = isHovered && product.images[1] ? product.images[1] : product.images[0];
            const isInWishlist = wishlist.includes(product.id);

            return (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-sm transition flex flex-col relative group"
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                {/* Badges */}
                {product.discount && (
                  <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
                    -{product.discount}%
                  </span>
                )}
                {product.isNew && (
                  <span className="absolute top-3 left-3 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded">
                    New
                  </span>
                )}
                {product.isBestSeller && (
                  <span className="absolute top-3 left-3 bg-yellow-500 text-white text-xs font-semibold px-2 py-1 rounded">
                    Best Seller
                  </span>
                )}

                {/* Wishlist */}
                <button
                  onClick={() => toggleWishlist(product.id)}
                  className={`absolute top-3 right-3 p-2 rounded-full transition ${
                    isInWishlist ? "text-red-500" : "text-gray-400 hover:text-red-500"
                  }`}
                >
                  <FaHeart />
                </button>

                {/* Image */}
                <div className="w-full h-56 sm:h-64 md:h-72 lg:h-64 overflow-hidden rounded-t-xl">
                  <img
                    src={mainImage}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Product Info */}
                <div className="flex flex-col flex-1 p-4">
                  <h3 className="text-gray-800 font-semibold text-lg line-clamp-2 mb-2">
                    {product.name}
                  </h3>

                  {/* Price */}
                  <div className="flex items-center mb-2 space-x-2">
                    <span className="text-gray-900 font-bold">${product.price}</span>
                    {product.originalPrice && (
                      <span className="text-gray-400 line-through text-sm">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>

                  {/* Rating */}
                  <div className="flex items-center mb-2 space-x-2">
                    <div className="flex">{renderStars(product.rating)}</div>
                    <span className="text-gray-500 text-sm">({product.reviews})</span>
                  </div>

                  {/* Stock */}
                  <div className="mb-3">
                    {product.stock > 0 ? (
                      <span className="text-green-600 text-sm font-medium">
                        {product.stock <= 5 ? `Only ${product.stock} left!` : "In Stock"}
                      </span>
                    ) : (
                      <span className="text-red-500 text-sm font-medium">Out of Stock</span>
                    )}
                  </div>

                  {/* Buttons */}
                  <div className="mt-auto">
                    <Button
                      type="button"
                      variant="primary"
                      size="sm"
                      className={`w-full ${product.stock === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
                      disabled={product.stock === 0}
                    >
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
