import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const banners = [
  {
    title: "Triple S International",
    subtitle: "Exclusive products, seamless shopping",
    image: "/images/City_100_Banner.webp",
    cta: "Shop Now",
    link: "/products",
  },
  {
    title: "Discover Our Collection",
    subtitle: "Latest arrivals just for you",
    image: "https://www.shutterstock.com/image-vector/set-devices-gaming-computer-items-260nw-2641739257.jpg",
    cta: "Explore",
    link: "/products",
  },
  {
    title: "Limited Time Offers",
    subtitle: "Don’t miss out on amazing deals",
    image: "https://www.seasonsway.com/pub/media/catalog/category/ELC.jpg",
    cta: "View Deals",
    link: "/products",
  },
];

const HeroBanner: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  return (
    <div className="relative w-full">
      <Slider {...settings}>
        {banners.map((banner, index) => (
          <div key={index} className="relative w-full aspect-[16/16] sm:aspect-[3/1] md:aspect-[22/7]">
            <div
              className="w-full h-full bg-center bg-cover"
              style={{
                backgroundImage: `url(${banner.image})`,
              }}
            >
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-6">
                <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-3 drop-shadow-lg">
                  {banner.title}
                </h1>
                <p className="text-white/90 md:text-2xl mb-5 drop-shadow-md">
                  {banner.subtitle}
                </p>
                <Link
                  to={banner.link}
                  className="bg-sky-600 hover:bg-sky-700 text-white font-medium py-3 px-6 rounded-xl transition"
                >
                  {banner.cta}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroBanner;
