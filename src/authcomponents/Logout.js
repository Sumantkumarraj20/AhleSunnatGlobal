import React from "react";
import Layout from "../Layout";
import { Link } from "react-router-dom";

const Logout = () => {
  return (
    <Layout title={"Logout"}>
      <div className="alert alert-success m-4" role="alert">
        <h4 className="alert-heading">Thank you for visiting!</h4>
        <p>You have successfully logged out of your account.</p>
        <p>
          We invite you to log in again and explore our website to discover more
          exciting products and services.
          <Link to="/" className="alert-link m-2">
            <span className="badge bg-primary">Home</span>
          </Link>
          <Link to="/ourproducts" className="alert-link m-2">
            <span className="badge bg-success">Products</span>
          </Link>
          <Link to="/contact" className="alert-link m-2">
            <span className="badge bg-info">Contact</span>
          </Link>
          <Link to="/about" className="alert-link m-2">
            <span className="badge bg-warning text-dark">About Us</span>
          </Link>
        </p>
        <hr />
        <p className="mb-0">
          By <Link to="/login" className="alert-link">logging in again</Link> , you'll have access to
          exclusive features, personalized recommendations, and a seamless
          shopping experience.
        </p>
      </div>
    </Layout>
  );
};

export default Logout;
