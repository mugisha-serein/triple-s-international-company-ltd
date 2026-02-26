import React from "react";

const Contact: React.FC = () => {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        <section className="space-y-4 animate-fade-in-up">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-primary-600">Contact</p>
          <h1 className="text-5xl font-black text-slate-900">Let’s Talk</h1>
          <p className="text-slate-600">Need help with orders, product details, or partnerships? Reach out and our team will get back to you shortly.</p>
          <div className="space-y-2 text-slate-700 font-medium">
            <p>Email: support@triplesintl.com</p>
            <p>Phone: +1 (555) 010-2025</p>
            <p>Address: 120 Harbor Avenue, Suite 400</p>
          </div>
        </section>

        <form className="bg-white border border-slate-100 shadow-sm rounded-3xl p-8 space-y-4 animate-fade-in-up stagger-2">
          <input className="w-full rounded-xl border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-300" placeholder="Your name" />
          <input className="w-full rounded-xl border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-300" placeholder="Your email" type="email" />
          <textarea className="w-full rounded-xl border border-slate-200 px-4 py-3 h-28 focus:outline-none focus:ring-2 focus:ring-primary-300" placeholder="Your message" />
          <button type="button" className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 rounded-xl font-bold transition-colors">Send Message</button>
        </form>
      </div>
    </main>
  );
};

export default Contact;
