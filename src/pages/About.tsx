import React from "react";
import { Link } from "react-router-dom";
import { FaChevronRight, FaRocket, FaShieldAlt, FaHeadset, FaHome } from "react-icons/fa";

const About: React.FC = () => {
  return (
    <div className="overflow-x-hidden min-h-screen bg-slate-50 relative">
      {/* Background blobs (Matching Home) */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden opacity-30">
        <div className="absolute top-[15%] left-[-10%] w-[40vw] h-[40vw] bg-primary-200/40 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] right-[-5%] w-[35vw] h-[35vw] bg-slate-300/30 rounded-full blur-[100px]" />
      </div>

      <main className="relative z-10">
        {/* Breadcrumb Navigation - Styled to match ProductsHeader.tsx */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-8">
          <nav
            className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400"
            aria-label="Breadcrumb"
          >
            <ol className="flex items-center gap-4">
              <li className="flex items-center gap-2 group">
                <Link
                  to="/"
                  className="flex items-center gap-2 hover:text-primary-600 transition-colors duration-300"
                >
                  <FaHome className="text-xs" />
                  <span>Home</span>
                </Link>
              </li>
              <li className="text-slate-300">
                <FaChevronRight className="w-2 h-2" />
              </li>
              <li className="text-primary-600">
                <span>About Us</span>
              </li>
            </ol>
          </nav>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 md:py-10 space-y-20">
          {/* Hero Section */}
          <section className="max-w-4xl animate-fade-in-up">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-primary-600 mb-4">Our Story</p>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] tracking-tight">
              Triple S International <br />
              <span className="text-primary-600">Company Ltd.</span>
            </h1>
            <p className="mt-8 text-xl md:text-2xl text-slate-600 leading-relaxed font-medium max-w-3xl">
              We deliver quality consumer products across electronics, home, beauty, and fashion with a strong focus on reliability, premium service, and modern shopping experiences.
            </p>
          </section>

          {/* Features Grid */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-up stagger-1">
            {[
              {
                title: "Quality First",
                text: "Every item is sourced and checked to ensure long-term value and peak performance.",
                icon: <FaShieldAlt className="w-6 h-6" />,
                color: "bg-blue-50 text-blue-600"
              },
              {
                title: "Fast Delivery",
                text: "Efficient logistics that keep your orders moving quickly across international borders.",
                icon: <FaRocket className="w-6 h-6" />,
                color: "bg-primary-50 text-primary-600"
              },
              {
                title: "Trusted Support",
                text: "Friendly, expert customer care ready to help you before and after every single purchase.",
                icon: <FaHeadset className="w-6 h-6" />,
                color: "bg-amber-50 text-amber-600"
              },
            ].map((item, index) => (
              <article key={item.title} className={`group p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-xl shadow-slate-200/40 hover:shadow-primary-900/5 transition-all duration-300 hover:-translate-y-2 animate-fade-in-up stagger-${(index % 4) + 1}`}>
                <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center mb-8 transition-transform group-hover:scale-110 duration-300`}>
                  {item.icon}
                </div>
                <h2 className="text-2xl font-black text-slate-900 mb-4">{item.title}</h2>
                <p className="text-slate-600 leading-relaxed text-lg font-medium">{item.text}</p>
              </article>
            ))}
          </section>

          {/* Mission Section / Image Splash */}
          <section className="relative rounded-[3rem] overflow-hidden bg-slate-900 py-24 px-10 md:px-20 animate-fade-in-up stagger-2">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2070"
              alt="Our Team"
              className="absolute inset-0 w-full h-full object-cover opacity-20"
            />
            <div className="relative z-10 max-w-3xl">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tight">Our Mission</h2>
              <p className="text-xl md:text-2xl text-slate-300 leading-relaxed font-medium italic">
                "To empower consumers worldwide by providing a seamless, reliable, and high-quality shopping experience that bridges the gap between premium international brands and local accessibility."
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default About;
