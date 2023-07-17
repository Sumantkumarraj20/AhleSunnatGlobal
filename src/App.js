import React, { useEffect, useState } from "react";
import firebase from "./firebase";
import "firebase/auth";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import About from "./pages/About";
import ProductDetails from "./pages/ProductPage";
import { Navigate, useLocation } from "react-router-dom";
import Layout from "./Layout";
import Login from "../src/authcomponents/Login";
import SignUp from "../src/authcomponents/Signup";
import ForgotPassword from "../src/authcomponents/ForgotPassword";

import { Route, Routes } from "react-router-dom";
import SearchResults from "./pages/SearchResults";
import ProfilePage from "./authcomponents/ProfilePage";

const App = () => {
  const location = useLocation();

  let title = "Default Title";
  let description = "Default Description";

  switch (location.pathname) {
    case "/":
      title = "Home";
      description =
        "Welcome to home page of Ahlesunnat Global official website. Learn more about our Indian Product Import services.";
      break;
    case "/products":
      title = "Products";
      description =
        "Explore wide range of products of Ahlesunnat Global. Find the perfect item for your needs.";
      break;
    case "/contact":
      title = "Contact";
      description =
        "Get in touch with Ahlesunnat Global for all your inquiries and requests. Our dedicated team is here to assist you promptly. Contact us today for expert advice and exceptional customer service.";
      break;
    case "/about":
      title = "About";
      description =
        "Discover story and commitment of Ahlesunnat Global to excellence. Learn about our Export and Import experience and the values that drive us and why we are a trusted provider of high-quality farm based products and services.";
      break;
    default:
      break;
  }
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
        setUser(user);
      } else {
        setIsLoggedIn(false);
      }
    });

    return () => unsubscribe();
  }, []);
 
  return (
    <Layout className="root" title={title} description={description}>
      <div className="Nav">
        <Navbar isLoggedIn={isLoggedIn} user={user} />
      </div>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/signup"
            element={user ? <Navigate to="/" /> : <SignUp />}
          />
          <Route
            path="/forgot-password"
            element={user ? <Navigate to="/" /> : <ForgotPassword />}
          />
          <Route
            path="/profile"
            element={!user ? <Navigate to="/login" /> : <ProfilePage />}
          />
          <Route path="/ourproducts" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/ourproducts/:title" element={<ProductDetails user={user} />} />
          <Route path="/search-results" element={<SearchResults />} />
        </Routes>
      </div>
    </Layout>
  );
};

export default App;
