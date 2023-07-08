import React from "react";
import Photoslider from "../components/Photoslider";
import "../App.css";
import { Link } from "react-router-dom";
import images from "../assets/data/imagesrc.json";
import Layout from "../Layout";

const Home = () => {

  const imgsrc = images.companyimage;

  return (
    <Layout title="Home">
      <div className="container-fluid">
        <div className="row justify-content-center ">
          <div className="col-lg-8 position-relative rounded">
            <Photoslider imgsrcs={imgsrc}  />
          </div>
          <div className="col-lg-4">
            <Link to="/about" className="card hoverable text-decoration-none mb-2 shadow">
              <h5 className="card-header">About</h5>
              <div className="card-body">
                <h5 className="card-title">Know about us</h5>
                <p className="card-text">
                  Curious to know more about our story? Dive deeper into our
                  About page to discover the essence of our company. Learn about
                  our values, mission, and the passion that drives us. Visit our
                  About page and embark on a journey to explore the heart and
                  soul of AhleSunnat.
                </p>
                <Link to="/about" className="btn btn-dark">
                  Learn more
                </Link>
              </div>
            </Link>

            <Link to="/ourproducts" className="card hoverable text-decoration-none mb-2 shadow">
              <h5 className="card-header">Product</h5>
              <div className="card-body">
                <h5 className="card-title">Product details</h5>
                <p className="card-text">
                  Explore exceptional products from around the world. Discover
                  our curated collection of premium imports and exports. Visit
                  our product page and indulge in excellence with AhleSunnat.
                </p>
                <Link to="/products" className="btn btn-dark">
                  View our products
                </Link>
              </div>
            </Link>
          </div>
          <Link to="/contact" className="card hoverable text-decoration-none m-2 p-0 shadow">
            <h5 className="card-header">Contact</h5>
            <div className="card-body">
              <h5 className="card-title">Contact details</h5>
              <p className="card-text">
                Ready to take your business to new heights? Contact us today and
                unlock the power of international trade. Our dedicated team is
                here to provide exceptional solutions tailored to your needs.
                Reach out now and let's shape a successful future together.
              </p>
              <Link to="/contact" className="btn btn-dark">
                Contact us
              </Link>
            </div>
          </Link>
          <div className="card hoverable text-center p-0 mb-2 shadow">
            <div className="card-header">Quote</div>
            <div className="card-body">
              <blockquote className="blockquote mb-0">
                <p>
                  Transforming possibilities into realities across continents.
                </p>
                <footer className="blockquote-footer">Ahlesunnat Global</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
