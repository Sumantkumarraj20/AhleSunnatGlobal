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
    <div className="card m-2 shadow">
      <div className="product-card">
        <img
          src={defaultProductImage}
          alt={Title + randomIndex}
          className="card-img-top"
          style={{ height: "200px" }}
        />
      </div>
      <div className="card-body">
        <p className="card-title fs-3">{Title}</p>
        <div className="row">
          <div className="col-6">Price from</div>
          <div className="col-6">{Price}</div>
        </div>
        <Link to={`/productdetails/${ID}`} className="btn btn-dark">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default PoductCard;
