import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import About from "./pages/About";
import ProductDetails from './pages/ProductPage'

import { Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <div>
      <div className="fixed-top ">
        <Navbar />
      </div>
      <div className="m-1 ps-0" style={{ paddingTop: '70px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/productdetails/:id" element={<ProductDetails />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
