import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { FaHeart, FaStar, FaEye, FaShoppingCart } from "react-icons/fa";

interface Product {
  id: number;
  name: string;
  category: string;
  images: string[];
  price: number;
  originalPrice?: number;
  discount?: number;
  rating: number; // 0-5
  reviews: number;
  stock: number;
  isNew?: boolean;
  isBestSeller?: boolean;
  isFavorite?: boolean;
}

const products: Product[] = [
  {
    id: 1,
    name: "Aura Noise-Cancelling Headphones",
    category: "Audio",
    images: ["https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800", "https://images.unsplash.com/photo-1484704849700-f032a568e945?auto=format&fit=crop&q=80&w=800"],
    price: 349,
    originalPrice: 399,
    discount: 12,
    rating: 4.8,
    reviews: 1240,
    stock: 15,
    isNew: true,
    isFavorite: false,
  },
  {
    id: 2,
    name: "Vantage Series 7 Smart Watch",
    category: "Wearables",
    images: ["https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800", "https://images.unsplash.com/photo-1508685096489-77a46835e0f9?auto=format&fit=crop&q=80&w=800"],
    price: 499,
    rating: 4.9,
    reviews: 856,
    stock: 5,
    isBestSeller: true,
    isFavorite: true,
  },
  {
    id: 3,
    name: "Precision Drift Gaming Mouse",
    category: "Computing",
    images: ["https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=800", "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&q=80&w=800"],
    price: 89,
    rating: 4.7,
    reviews: 320,
    stock: 50,
    isFavorite: false,
  },
  {
    id: 4,
    name: "Sonic Boom 360 Speaker",
    category: "Home Audio",
    images: ["https://images.unsplash.com/photo-1608156639585-34a072bfef4c?auto=format&fit=crop&q=80&w=800", "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?auto=format&fit=crop&q=80&w=800"],
    price: 129,
    rating: 4.5,
    reviews: 145,
    stock: 8,
    discount: 15,
    isFavorite: false,
  },
  {
    id: 5,
    name: "Lumina RGB Mechanical Keyboard",
    category: "Computing",
    images: ["https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&q=80&w=800", "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&q=80&w=800"],
    price: 199,
    originalPrice: 249,
    rating: 5.0,
    reviews: 210,
    stock: 12,
    isFavorite: true,
  },
  {
    id: 6,
    name: "X-Pro Drone 4K Edition",
    category: "Photography",
    images: ["https://images.unsplash.com/photo-1473968512647-3e44a224fe8f?auto=format&fit=crop&q=80&w=800", "https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?auto=format&fit=crop&q=80&w=800"],
    price: 899,
    rating: 4.8,
    reviews: 89,
    stock: 3,
    isNew: true,
    isFavorite: false,
  }
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
    return Array.from({ length: 5 }).map((_, i) => (
      <FaStar
        key={i}
        className={`w-3 h-3 ${i < Math.floor(rating) ? "text-amber-400" : "text-white/20"}`}
      />
    ));
  };

  return (
    <section className="py-6 bg-slate-50 relative overflow-hidden group/section">
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-primary-200/10 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-slate-300/10 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 text-center tracking-tight animate-fade-in-up">
            Latest <span className="text-primary-600">Collections</span>
          </h2>
          <p className="text-slate-500 text-center max-w-2xl font-medium animate-fade-in-up stagger-1">
            Handpicked premium essentials for your daily lifestyle. Experience the pinnacle of international design.
          </p>
        </div>

        <div className="relative pt-4 pb-12">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 8000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            pagination={{
              clickable: true,
              el: ".products-pagination",
              bulletClass: "swiper-pagination-bullet !bg-slate-300 !w-3 !h-3 !mx-1 transition-all duration-300",
              bulletActiveClass: "swiper-pagination-bullet-active !bg-primary-300 !w-8 !rounded-full shadow-lg shadow-primary-500/20",
            }}
            className="products-swiper !pb-12"
          >
            {products.map((product, index) => {
              const isHovered = hoveredProduct === product.id;
              const mainImage = isHovered && product.images[1] ? product.images[1] : product.images[0];
              const isInWishlist = wishlist.includes(product.id) || product.isFavorite;

              return (
                <SwiperSlide key={product.id}>
                  <div
                    className={`flex flex-col h-full relative group transition-all duration-300 stagger-${(index % 4) + 1}`}
                    onMouseEnter={() => setHoveredProduct(product.id)}
                    onMouseLeave={() => setHoveredProduct(null)}
                  >
                    {/* Unified Image Overlay Container - Increased Height (aspect-[2/3]) */}
                    <div className="w-full aspect-[2/3] overflow-hidden rounded-[2rem] relative bg-slate-100 shadow-xl shadow-slate-200/50">
                      {/* Background Reveal Blur & Gradient Shadow */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 z-10" />
                      <div className="absolute inset-0 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500 z-10" />

                      <img
                        src={mainImage}
                        alt={product.name}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />

                      {/* Top Badges & Heart Icon */}
                      <div className="absolute top-5 left-5 right-5 flex justify-between items-start z-20">
                        <div className="flex flex-col gap-2">
                          {product.discount && (
                            <span className="bg-rose-500 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter shadow-lg w-max">
                              -{product.discount}%
                            </span>
                          )}
                          {product.isNew && (
                            <span className="bg-primary-600 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter shadow-lg w-max">
                              New
                            </span>
                          )}
                        </div>

                        {/* Persistent Wishlist Button */}
                        <button
                          onClick={() => toggleWishlist(product.id)}
                          className={`p-3 rounded-2xl bg-white/40 backdrop-blur-md border border-white/20 transition-all duration-300 hover:bg-white hover:text-rose-500 ${isInWishlist ? 'text-rose-500 bg-white shadow-lg' : 'text-white'}`}
                        >
                          <FaHeart className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Content Overlay */}
                      <div className="absolute inset-0 flex flex-col justify-end p-5 z-20 pointer-events-none group-hover:pointer-events-auto">

                        {/* Details Staggered from Left */}
                        <div className="mb-6 space-y-2 overflow-hidden">
                          <span className="text-[10px] font-black text-primary-400 uppercase tracking-[0.2em] block translate-x-[-20px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 ease-out delay-[50ms]">
                            {product.category}
                          </span>
                          <h3 className="text-white font-black text-2xl md:text-3xl leading-tight translate-x-[-30px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 ease-out delay-[100ms]">
                            {product.name}
                          </h3>
                          <div className="flex items-center gap-2 translate-x-[-40px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 ease-out delay-[150ms]">
                            <div className="flex text-amber-400">{renderStars(product.rating)}</div>
                            <span className="text-white/40 text-[10px] font-bold">({product.reviews})</span>
                          </div>
                        </div>

                        {/* Bottom Section: Price + Actions Reveal */}
                        <div className="flex items-center justify-between translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out delay-[200ms]">
                          <div className="flex flex-col">
                            {product.originalPrice && (
                              <span className="text-white/40 line-through text-xs font-bold -mb-1">${product.originalPrice}</span>
                            )}
                            <span className="text-white font-black text-3xl tracking-tighter">${product.price}</span>
                          </div>

                          {/* Action Row (Heart removed from here) */}
                          <div className="flex gap-2">
                            <button className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white transition-all duration-300 hover:bg-primary-600 hover:border-primary-600">
                              <FaEye className="w-4 h-4" />
                            </button>
                            <button className="p-4 rounded-2xl bg-primary-600 text-white shadow-xl shadow-primary-900/40 hover:bg-primary-500 transition-all duration-300 active:scale-90 flex items-center justify-center gap-2 px-6">
                              <FaShoppingCart className="w-4 h-4" />
                              <span className="text-[10px] font-black uppercase tracking-widest hidden md:block">Add</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          {/* Custom Pagination */}
          <div className="products-pagination flex justify-center items-center" />
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
