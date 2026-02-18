import React from "react";
import HeroBanner from "../features/home/components/HeroBanner";
import FeaturedProducts from "../features/home/components/FeaturedProducts";
import Categories from "../features/home/components/Categories";

const Home: React.FC = () => {
  return (
    <div className="overflow-x-hidden min-h-screen bg-slate-50">
      {/* Abstract background blobs */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden opacity-30">
        <div className="absolute top-[10%] left-[-10%] w-[40vw] h-[40vw] bg-primary-200/40 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[20%] right-[-5%] w-[35vw] h-[35vw] bg-slate-300/30 rounded-full blur-[100px]" />
      </div>

      <main className="relative z-10 space-y-24 md:space-y-32">
        <section className="animate-fade-in">
          <HeroBanner />
        </section>

        <section className="animate-fade-in stagger-2">
          <FeaturedProducts />
        </section>

        <section className="pb-24 animate-fade-in stagger-3">
          <Categories />
        </section>
      </main>
    </div>
  );
};

export default Home;
