import React from "react";
import HeroBanner from "../components/Home/HeroBanner";
import FeaturedProducts from "../components/Home/FeaturedProducts";
import Categories from "../components/Home/Categories";

const Home: React.FC = () => {
  return (
    <div className="overflow-x-hidden">
      <HeroBanner />
      <FeaturedProducts />
      <Categories />
    </div>
  );
};

export default Home;
