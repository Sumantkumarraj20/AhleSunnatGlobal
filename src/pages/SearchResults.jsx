import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import productData from "../assets/data/productdata.json";
import ProductCard from "../components/PoductCard";
import Layout from "../Layout";

const SearchResults = () => {
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get("query");

  const [filteredProducts, setFilteredProducts] = useState([]);

  const filterProducts = () => {
    if (!searchQuery || searchQuery.trim() === "") {
      setFilteredProducts(productData);
      return;
    }
    const filtered = productData.filter((product) => {
      const {
        Title,
        Type,
        Category,
        Description,
        Preparation_instructions,
        Serving_instructions,
      } = product;
      const searchTerms = searchQuery.toLowerCase().split(" ");
      return searchTerms.every(
        (term) =>
          Title.toLowerCase().includes(term) ||
          Description.join(" ").toLowerCase().includes(term) ||
          Preparation_instructions.join(" ").toLowerCase().includes(term) ||
          Serving_instructions.join(" ").toLowerCase().includes(term) ||
          Category.toLowerCase().includes(term) ||
          Type.toLowerCase().includes(term)
      );
    });
    setFilteredProducts(filtered);
  };

  // eslint-disable-next-line
  useEffect(() => {
    filterProducts();
  }, [searchQuery]);

  return (
    <Layout title={"product search"}>
      <div className="container-fluid">
        {filteredProducts.length === 0 ? (
          <div className="alert alert-danger m-4" role="alert">
            <h4 className="alert-heading">Not Found!</h4>
            <p>
              We apologize for not having what you are Looking for. Product
              related to "{searchQuery}" search keyword is not found on
              Ahlesunnat Web application.{" "}
            </p>
            <hr />
            <p className="mb-0">
              Try using different keyword for the results. You look for
              something that is not available contact our team me, they will
              help you out. Thankyou for visiting Ahlesunnat Global.
            </p>
          </div>
        ) : (
          <div className="row">
            {filteredProducts.map((product) => (
              <div
                className="col-xl-3 col-lg-4 col-md-6 col-12"
                key={product.ID}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default SearchResults;
