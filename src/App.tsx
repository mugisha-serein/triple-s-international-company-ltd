import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css'

import Login from "./pages/Login";
import Register from "./pages/Register";

import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";

import Home from "./pages/Home";

const App: React.FC = () => {
  return (
    <Router>
       {/* Navbar */}
        <Navbar />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
      </Routes>

      {/* Footer */}
      <Footer />
    </Router>
  );
};

export default App;