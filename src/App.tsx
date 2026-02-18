import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css'

import Login from "./pages/Login";
import Register from "./pages/Register";

import Home from "./pages/Home";
import Products from "./pages/Products";

import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";

const App: React.FC = () => {
  return (
    <Router>
      {/* Navbar */}
      <Navbar />

      <Routes>
        
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>

      {/* Footer */}
      <Footer />
    </Router>
  );
};

export default App;