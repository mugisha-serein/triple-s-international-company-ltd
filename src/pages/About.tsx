import React from "react";

const About: React.FC = () => {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16">
      <div className="max-w-5xl mx-auto space-y-8 animate-fade-in-up">
        <p className="text-xs font-black uppercase tracking-[0.3em] text-primary-600">About Us</p>
        <h1 className="text-5xl md:text-6xl font-black text-slate-900 leading-tight">
          Triple S International Company Ltd.
        </h1>
        <p className="text-slate-600 text-lg max-w-3xl">
          We specialize in repairing computers and printers while also selling desktops, laptops, printers, and core computer components for homes, schools, and businesses.
        </p>


        <div className="rounded-3xl border border-amber-200 bg-amber-50 p-6">
          <h2 className="text-lg font-black text-amber-800 mb-2">Services we do not offer</h2>
          <p className="text-amber-700 font-medium">
            We do not repair headphones, smartphones, tablets, or smartwatches. Our services are focused on computers, desktops, laptops, printers, and computer accessories.
          </p>
        </div>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          {[
            { title: "Quality First", text: "Every item is sourced and checked to ensure long-term value." },
            { title: "Fast Delivery", text: "Efficient logistics that keep your orders moving quickly." },
            { title: "Trusted Support", text: "Friendly customer care to help before and after every purchase." },
          ].map((item) => (
            <article key={item.title} className="rounded-3xl bg-white p-8 border border-slate-100 shadow-sm">
              <h2 className="text-xl font-black text-slate-900 mb-3">{item.title}</h2>
              <p className="text-slate-600">{item.text}</p>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
};

export default About;
