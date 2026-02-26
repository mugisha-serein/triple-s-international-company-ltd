import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import { Link } from "react-router-dom";

const banners = [
  {
    title: "Triple S Computer & Print Center",
    subtitle: "Repairing computers and printers, plus trusted desktop and laptop sales",
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&q=80&w=2070",
    cta: "Shop Now",
    link: "/products",
  },
  {
    title: "Desktop & Laptop Sales",
    subtitle: "Reliable business and office systems from top computer brands",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2070",
    cta: "Explore Store",
    link: "/products",
  },
  {
    title: "Printer Repair & Maintenance",
    subtitle: "Fast diagnostics, parts replacement, and quality servicing. No headphone, smartphone, tablet, or smartwatch repair.",
    image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&q=80&w=2070",
    cta: "Book Service",
    link: "/products",
  },
];

const HeroBanner: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden group">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade"
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          el: ".custom-pagination",
          bulletClass: "swiper-pagination-bullet !bg-white/50 !w-3 !h-3 !mx-1 transition-all duration-300",
          bulletActiveClass: "swiper-pagination-bullet-active !bg-primary-500 !w-8 !rounded-full",
        }}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        className="hero-swiper"
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full aspect-[16/16] sm:aspect-[3/1] md:aspect-[22/7] min-h-[500px] lg:min-h-[600px]">
              {/* Semantic Image for SEO and Performance */}
              <img
                src={banner.image}
                alt={banner.title}
                className="absolute inset-0 w-full h-full object-cover"
                loading={index === 0 ? "eager" : "lazy"}
              />

              {/* Premium Overlay and Content */}
              <div className="absolute inset-0 bg-slate-950/40 flex flex-col justify-center items-center text-center px-6">
                <div className="max-w-4xl mx-auto overflow-hidden">
                  <h1 className="text-4xl md:text-7xl font-black text-white mb-6 drop-shadow-2xl animate-fade-in-up tracking-tight">
                    {banner.title}
                  </h1>
                  <p className="text-white/95 text-xl md:text-3xl mb-10 drop-shadow-lg animate-fade-in-up stagger-1 font-medium leading-relaxed">
                    {banner.subtitle}
                  </p>
                  <div className="animate-fade-in-up stagger-2">
                    <Link
                      to={banner.link}
                      className="inline-block bg-primary-600 hover:bg-primary-500 text-white font-black text-lg py-5 px-14 rounded-full transition-all duration-300 shadow-2xl shadow-primary-900/50 hover:shadow-primary-400/50 active:scale-95 transform"
                    >
                      {banner.cta}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Navigation Arrows */}
        <button className="swiper-button-prev-custom absolute left-8 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary-600 hover:border-transparent">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
        </button>
        <button className="swiper-button-next-custom absolute right-8 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary-600 hover:border-transparent">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
        </button>

        {/* Custom Pagination */}
        {/* <div className="custom-pagination absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex justify-center items-center cursor-pointer" /> */}
      </Swiper>
    </div>
  );
};

export default HeroBanner;
