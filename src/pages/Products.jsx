import React, { useEffect, useState } from "react";
import ProductCard from "../components/PoductCard";
import productData from "../assets/data/productdata.json";

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productData);
  }, []);

  const groupedProducts = {};

  // Group products by type
  productData.forEach((product) => {
    const type = product.Type;
    if (!groupedProducts[type]) {
      groupedProducts[type] = [];
    }
    groupedProducts[type].push(product);
  });

   // eslint-disable-next-line no-unused-vars
   const unusedProducts = products; // it is unused

  return (
    <div className="container-fluid">
      {Object.entries(groupedProducts).map(([type, products]) => (
        <div key={type}>
          <h4 className="w-100">{type}</h4>
          <div className="row">
            {products.map((product) => (
              <div className="col-xl-3 col-lg-4 col-md-6 col-12">
                <ProductCard key={product} product={product} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
