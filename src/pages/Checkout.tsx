import React from "react";
import { Link } from "react-router-dom";
import { FaChevronRight, FaHome, FaLock, FaCreditCard, FaTruck } from "react-icons/fa";

const Checkout: React.FC = () => {
    return (
        <div className="overflow-x-hidden min-h-screen bg-slate-50 relative">
            {/* Background blobs (Consistency) */}
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
                            <li className="flex items-center gap-2 group">
                                <Link to="/cart" className="hover:text-primary-600 transition-colors">
                                    <span>Cart</span>
                                </Link>
                            </li>
                            <li className="text-slate-300">
                                <FaChevronRight className="w-2 h-2" />
                            </li>
                            <li className="text-primary-600">
                                <span>Checkout</span>
                            </li>
                        </ol>
                    </nav>
                </div>

                <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10 md:py-10">
                    <div className="flex flex-col lg:flex-row gap-12 items-start">

                        {/* Left: Shipping and Payment */}
                        <div className="flex-1 w-full space-y-8 animate-fade-in-up">
                            <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-8">
                                Secure <span className="text-primary-600">Checkout</span>
                            </h1>

                            {/* Shipping Section */}
                            <section className="bg-white border border-slate-100 rounded-[2.5rem] p-8 md:p-10 shadow-2xl shadow-slate-200/40 space-y-8 animate-fade-in-up stagger-1">
                                <div className="flex items-center gap-4 mb-2">
                                    <div className="w-10 h-10 bg-primary-50 text-primary-600 rounded-xl flex items-center justify-center">
                                        <FaTruck />
                                    </div>
                                    <h2 className="text-2xl font-black text-slate-900">Shipping Details</h2>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">First Name</label>
                                        <input className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 focus:outline-none focus:ring-2 focus:ring-primary-100 focus:border-primary-500 transition-all font-medium" placeholder="Jane" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Last Name</label>
                                        <input className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 focus:outline-none focus:ring-2 focus:ring-primary-100 focus:border-primary-500 transition-all font-medium" placeholder="Doe" />
                                    </div>
                                    <div className="md:col-span-2 space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Street Address</label>
                                        <input className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 focus:outline-none focus:ring-2 focus:ring-primary-100 focus:border-primary-500 transition-all font-medium" placeholder="123 Shopping Plaza" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">City</label>
                                        <input className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 focus:outline-none focus:ring-2 focus:ring-primary-100 focus:border-primary-500 transition-all font-medium" placeholder="Harbor City" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Postal Code</label>
                                        <input className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 focus:outline-none focus:ring-2 focus:ring-primary-100 focus:border-primary-500 transition-all font-medium" placeholder="789456" />
                                    </div>
                                </div>
                            </section>

                            {/* Payment Section */}
                            <section className="bg-white border border-slate-100 rounded-[2.5rem] p-8 md:p-10 shadow-2xl shadow-slate-200/40 space-y-8 animate-fade-in-up stagger-2">
                                <div className="flex items-center gap-4 mb-2">
                                    <div className="w-10 h-10 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center">
                                        <FaCreditCard />
                                    </div>
                                    <h2 className="text-2xl font-black text-slate-900">Payment Information</h2>
                                </div>

                                <div className="space-y-6">
                                    <div className="space-y-2 text-slate-500">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Card Number</label>
                                        <div className="relative">
                                            <input className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-12 py-4 focus:outline-none focus:ring-2 focus:ring-primary-100 focus:border-primary-500 transition-all font-medium" placeholder="0000 0000 0000 0000" />
                                            <FaCreditCard className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Expiry Date</label>
                                            <input className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 focus:outline-none focus:ring-2 focus:ring-primary-100 focus:border-primary-500 transition-all font-medium" placeholder="MM/YY" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">CVV</label>
                                            <input className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 focus:outline-none focus:ring-2 focus:ring-primary-100 focus:border-primary-500 transition-all font-medium" placeholder="123" />
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>

                        {/* Right: Order Summary Sidebar */}
                        <aside className="w-full lg:w-[400px] sticky top-28 animate-fade-in-up stagger-3">
                            <div className="bg-white border border-slate-100 rounded-[2.5rem] p-8 md:p-10 shadow-2xl shadow-slate-200/50 space-y-8">
                                <h2 className="text-2xl font-black text-slate-900">Order Summary</h2>

                                <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                                    {[1, 2].map((item) => (
                                        <div key={item} className="flex gap-4 items-center">
                                            <div className="w-16 h-16 bg-slate-50 rounded-xl overflow-hidden border border-slate-100 flex-shrink-0">
                                                <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=200" alt="Product" className="w-full h-full object-cover" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="font-bold text-slate-900 truncate text-sm">Premium Sneakers X1</p>
                                                <p className="text-xs font-medium text-slate-500">Qty: 1</p>
                                            </div>
                                            <p className="font-black text-slate-900 text-sm">$120.00</p>
                                        </div>
                                    ))}
                                </div>

                                <div className="pt-6 border-t border-slate-100 space-y-4">
                                    <div className="flex justify-between text-slate-600 font-medium">
                                        <span>Subtotal</span>
                                        <span>$240.00</span>
                                    </div>
                                    <div className="flex justify-between text-slate-600 font-medium">
                                        <span>Shipping</span>
                                        <span className="text-green-600">Free</span>
                                    </div>
                                    <div className="flex justify-between text-2xl font-black text-slate-900 pt-2">
                                        <span>Total</span>
                                        <span>$240.00</span>
                                    </div>
                                </div>

                                <button className="w-full bg-slate-900 hover:bg-primary-600 text-white py-5 rounded-2xl font-black text-lg transition-all shadow-xl shadow-slate-200 hover:shadow-primary-300 flex items-center justify-center gap-3 active:scale-[0.98]">
                                    <FaLock className="text-sm opacity-50" />
                                    <span>Place Order</span>
                                </button>

                                <p className="text-[10px] text-center text-slate-400 font-bold uppercase tracking-widest px-4">
                                    Payments are secure and encrypted
                                </p>
                            </div>
                        </aside>

                    </div>
                </div>
            </main>
        </div>
    );
};

export default Checkout;
