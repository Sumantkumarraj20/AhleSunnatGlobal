import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import About from "./pages/About";
import ProductDetails from "./pages/ProductPage";
import { useLocation } from "react-router-dom";
import Layout from "./Layout";

import { Route, Routes } from "react-router-dom";
import SearchResults from "./pages/SearchResults";
const App = () => {
  const location = useLocation();

  let title = "Default Title";
  let description = "Default Description";

  switch (location.pathname) {
    case "/":
      title = "Home";
      description ="Welcome to home page of Ahlesunnat Global official website. Learn more about our Indian Product Import services.";
      break;
    case "/products":
      title = "Products";
      description ="Explore wide range of products of Ahlesunnat Global. Find the perfect item for your needs.";
      break;
    case "/contact":
      title = "Contact";
      description ="Get in touch with Ahlesunnat Global for all your inquiries and requests. Our dedicated team is here to assist you promptly. Contact us today for expert advice and exceptional customer service.";
      break;
    case "/about":
      title = "About";
      description ="Discover story and commitment of Ahlesunnat Global to excellence. Learn about our Export and Import experience and the values that drive us and why we are a trusted provider of high-quality farm based products and services.";
      break;
    default:
      break;
  }
  return (
    <Layout title={title} description={description}>
      <div className="fixed-top ">
        <Navbar />
      </div>
      <div className="m-1 ps-0" style={{ paddingTop: "70px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ourproducts" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/ourproducts/:title" element={<ProductDetails />} />
          <Route path="/search-results" element={<SearchResults />} />
        </Routes>
      </div>
    </Layout>
  );
};

export default App;
