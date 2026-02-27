import React, { useState, memo } from "react";
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
    name: "Custom Desktop Build Service",
    category: "Desktop Service",
    images: [
      "https://images.unsplash.com/photo-1587831990711-23ca6441447b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1593640495393-e2b0c2e8f8a9?auto=format&fit=crop&q=80&w=800"
    ],
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
    name: "Office Printer Setup Package",
    category: "Printer Service",
    images: [
      "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&q=80&w=800"
    ],
    price: 149,
    rating: 4.9,
    reviews: 856,
    stock: 5,
    isBestSeller: true,
    isFavorite: true,
  },
  {
    id: 3,
    name: "Desktop SSD Upgrade Kit",
    category: "Accessories",
    images: [
      "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&q=80&w=800"
    ],
    price: 89,
    rating: 4.7,
    reviews: 320,
    stock: 50,
    isFavorite: false,
  },
  {
    id: 4,
    name: "Laptop Performance Upgrade",
    category: "Laptop Service",
    images: [
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?auto=format&fit=crop&q=80&w=800"
    ],
    price: 129,
    rating: 4.5,
    reviews: 145,
    stock: 8,
    discount: 15,
    isFavorite: false,
  },
  {
    id: 5,
    name: "Office Desktop Bundle",
    category: "Desktop PCs",
    images: [
      "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1593642634443-44adaa06623a?auto=format&fit=crop&q=80&w=800"
    ],
    price: 1199,
    originalPrice: 1299,
    rating: 5.0,
    reviews: 210,
    stock: 12,
    isFavorite: true,
  },
  {
    id: 6,
    name: "Desktop Cleaning & Tune-up",
    category: "Desktop Service",
    images: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1580894908361-967195033215?auto=format&fit=crop&q=80&w=800"
    ],
    price: 99,
    rating: 4.8,
    reviews: 89,
    stock: 24,
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
    <section className="py-6 bg-slate-50 relative overflow-hidden group/section gpu-accelerated">
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-primary-200/10 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-slate-300/10 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 text-center tracking-tight animate-fade-in-up">
            Featured <span className="text-primary-600">Repairs & Sales</span>
          </h2>
          <p className="text-slate-500 text-center max-w-2xl font-medium animate-fade-in-up stagger-1">
            Repair services and hardware picks for desktop, laptop, and printer users.
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
                    className={`flex flex-col h-full relative group transition-all duration-300 stagger-${(index % 4) + 1} gpu-accelerated hover-lift`}
                    onMouseEnter={() => setHoveredProduct(product.id)}
                    onMouseLeave={() => setHoveredProduct(null)}
                  >
                    <div className="w-full aspect-[2/3] overflow-hidden rounded-[2rem] relative bg-slate-100 shadow-xl shadow-slate-200/50">
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 z-10" />
                      <div className="absolute inset-0 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500 z-10" />

                      <img
                        src={mainImage}
                        alt={product.name}
                        width="800"
                        height="1200"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />

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

                        <button
                          onClick={() => toggleWishlist(product.id)}
                          className={`p-3 rounded-2xl bg-white/40 backdrop-blur-md border border-white/20 transition-all duration-300 hover:bg-white hover:text-rose-500 active-scale ${isInWishlist ? 'text-rose-500 bg-white shadow-lg' : 'text-white'}`}
                        >
                          <FaHeart className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="absolute inset-0 flex flex-col justify-end p-5 z-20 pointer-events-none group-hover:pointer-events-auto">
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

                        <div className="flex items-center justify-between translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out delay-[200ms]">
                          <div className="flex flex-col">
                            {product.originalPrice && (
                              <span className="text-white/40 line-through text-xs font-bold -mb-1">${product.originalPrice}</span>
                            )}
                            <span className="text-white font-black text-3xl tracking-tighter">${product.price}</span>
                          </div>

                          <div className="flex gap-2">
                            <button className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white transition-all duration-300 hover:bg-primary-600 hover:border-primary-600 active-scale">
                              <FaEye className="w-4 h-4" />
                            </button>
                            <button className="p-4 rounded-2xl bg-primary-600 text-white shadow-xl shadow-primary-900/40 hover:bg-primary-500 transition-all duration-300 active-scale flex items-center justify-center gap-2 px-6">
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

          <div className="products-pagination flex justify-center items-center" />
        </div>
      </div>
    </section>
  );
};

export default memo(FeaturedProducts);
