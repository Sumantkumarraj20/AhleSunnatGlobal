import React from "react";
import { Link } from "react-router-dom";

const PoductCard = ({ product }) => {
  const { ID, Title, ProductImage, Price } = product;
  // Select a random index from the ProductImage array
  const randomIndex = Math.floor(Math.random() * ProductImage.length);
  // Get the randomly selected image URL
  const randomImage = ProductImage[randomIndex];
  const defaultProductImage = randomImage || "https://www.groups3.com/wp-content/uploads/2021/02/productos-ecommerce.jpg";
  return (
    <Link to={`/ourproducts/${Title}`} className="card hoverable text-decoration-none m-2 shadow">
      <div className="product-card mb-0">
        <img
          src={defaultProductImage}
          alt={Title + randomIndex}
          className="card-img-top"
          style={{ height: "200px" }}
        />
      </div>
      <div className="card-body">
        <p className="card-title fs-4">{Title}</p>
        <div className="row mb-2">
          <div className="col-5">Price from</div>
          <div className="col-7 fw-lighter">{Price}</div>
        </div>
        <Link to={`/ourproducts/${Title}`} className="btn btn-dark">
          View Details
        </Link>
      </div>
    </Link>
  );
};

export default PoductCard;
