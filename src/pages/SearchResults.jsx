import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import productData from "../assets/data/productdata.json";
import ProductCard from "../components/PoductCard";

const SearchResults = () => {
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get("query");

  const [filteredProducts, setFilteredProducts] = useState([]);

  const filterProducts = () => {
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
          Description.join(" ").toLowerCase().includes(term)||
          Preparation_instructions.join(" ").toLowerCase().includes(term)||
          Serving_instructions.join(" ").toLowerCase().includes(term)||
          Category.toLowerCase().includes(term) ||
          Type.toLowerCase().includes(term)
      );
    });
    setFilteredProducts(filtered);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    filterProducts();
  }, [searchQuery]);

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          {filteredProducts.map((product) => (
            <div className="col-xl-3 col-lg-4 col-md-6 col-12" key={product.ID}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
