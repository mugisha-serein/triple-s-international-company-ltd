import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import ForgotPassword from "./pages/ForgotPassword";
import NotFound from "./pages/NotFound";

import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
