import React from "react";
import { Link } from "react-router-dom";
import { FaChevronRight, FaHome, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contact: React.FC = () => {
  return (
    <div className="overflow-x-hidden min-h-screen bg-slate-50 relative">
      {/* Background blobs (Consistency with Home/About) */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden opacity-30">
        <div className="absolute top-[15%] left-[-10%] w-[40vw] h-[40vw] bg-primary-200/40 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] right-[-5%] w-[35vw] h-[35vw] bg-slate-300/30 rounded-full blur-[100px]" />
      </div>

      <main className="relative z-10">
        {/* Breadcrumb Navigation */}
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
                <span>Contact Us</span>
              </li>
            </ol>
          </nav>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10 md:py-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Contact Info */}
            <section className="space-y-12 animate-fade-in-up">
              <div className="space-y-4">
                <p className="text-xs font-black uppercase tracking-[0.3em] text-primary-600">Support Center</p>
                <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] tracking-tight">
                  Let’s <span className="text-primary-600">Talk.</span>
                </h1>
                <p className="text-xl text-slate-600 font-medium max-w-lg leading-relaxed pt-4">
                  Need help with orders, product details, or partnerships? Reach out and our team will get back to you shortly.
                </p>
              </div>

              <div className="grid gap-6">
                {[
                  { icon: <FaEnvelope />, label: "Email Us", value: "support@triplesintl.com", color: "bg-blue-50 text-blue-600" },
                  { icon: <FaPhoneAlt />, label: "Call Directly", value: "+1 (555) 010-2025", color: "bg-primary-50 text-primary-600" },
                  { icon: <FaMapMarkerAlt />, label: "Our Office", value: "120 Harbor Avenue, Suite 400", color: "bg-amber-50 text-amber-600" },
                ].map((item, idx) => (
                  <div key={idx} className={`flex items-center gap-6 p-6 rounded-3xl bg-white border border-slate-100 shadow-xl shadow-slate-200/30 animate-fade-in-up stagger-${idx + 1}`}>
                    <div className={`w-12 h-12 ${item.color} rounded-2xl flex items-center justify-center text-lg`}>
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">{item.label}</p>
                      <p className="text-lg font-bold text-slate-900">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Contact Form */}
            <section className="animate-fade-in-up stagger-2">
              <form className="bg-white border border-slate-100 shadow-2xl shadow-slate-200/50 rounded-[2.5rem] p-10 md:p-12 space-y-8">
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1">Full Name</label>
                      <input className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 focus:outline-none focus:ring-2 focus:ring-primary-100 focus:border-primary-500 transition-all font-medium" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1">Email Address</label>
                      <input className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 focus:outline-none focus:ring-2 focus:ring-primary-100 focus:border-primary-500 transition-all font-medium" placeholder="john@example.com" type="email" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1">Your Message</label>
                    <textarea className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 h-40 focus:outline-none focus:ring-2 focus:ring-primary-100 focus:border-primary-500 transition-all font-medium resize-none" placeholder="How can we help you?" />
                  </div>
                </div>
                <button type="button" className="w-full bg-primary-600 hover:bg-primary-500 text-white py-5 rounded-2xl font-black text-lg transition-all shadow-xl shadow-primary-200 hover:shadow-primary-300 active:scale-[0.98]">
                  Send Message
                </button>
              </form>
            </section>

          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
