import React from "react";
import Photoslider from "../components/Photoslider";
import productData from "../assets/data/productdata.json";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { id } = useParams();
  const product = productData.find((product) => product.ID === id);
  const {
    Timestamp,
    HS_code,
    Title,
    Type,
    Category,
    Description,
    Origin,
    PackagingMaterial,
    PackSize,
    Specialpackagingfeature,
    Price,
    Availability,
    Preparation_instructions,
    Serving_instructions,
    Storage_instructions,
  } = product;

  const defaultTimestamp = Timestamp || "Not available";
  const defaultHSCode = HS_code || "Not available";
  const defaultTitle = Title || "Not available";
  const defaultType = Type || "Not available";
  const defaultCategory = Category || "Not available";
  const defaultDescription = Description || "Not available";
  const defaultOrigin = Origin || "Not available";
  const defaultPackagingMaterial = PackagingMaterial || "Not available";
  const defaultPackSize = PackSize || "Not available";
  const defaultSpecialPackagingFeature =
    Specialpackagingfeature || "Not available";
  const defaultPrice = Price || "Not available";
  const defaultAvailability = Availability || "Not available";
  const defaultPreparationInstructions =
    Preparation_instructions || "Not available";
  const defaultServingInstructions = Serving_instructions || "Not available";
  const defaultStorageInstructions = Storage_instructions || "Cold storage";

  const defaultProductImage = product?.ProductImage.filter(
    (url) => url.trim().length > 0
  );
  if (defaultProductImage.length === 0) {
    defaultProductImage.push(
      "https://www.groups3.com/wp-content/uploads/2021/02/productos-ecommerce.jpg"
    );
  }

  const sendEmail = () => {
    window.location.href = "mailto:ahlesunnatglobal@gmail.com";
  };

  const openWhatsAppChat = () => {
    window.open("https://wa.me/+919433242956");
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6">
          <Photoslider imgsrcs={defaultProductImage} />
        </div>
        <div className="col-lg-6 p-2">
          <p className="fs-1 fw-bolder mb-0 pb-0">{defaultTitle}</p>
          <p className="fs-4 fw-light fst-italic mt-0 pt-0">
            {defaultCategory} {defaultType}
          </p>
          <p className="fs-3 mb-0 pb-0">Description</p>
          <p className="fw-light mt-0 pt-0">{defaultDescription}</p>
          <p className="fs-3 mb-0 pb-0">Pricing Information</p>
          <p className="fw-light mt-0 pt-0">Price: {defaultPrice}</p>
          <p className="fs-3 mb-0 pb-0">Availability</p>
          <p className="fw-light mt-0 pt-0">{defaultAvailability}</p>
          <div className="d-flex justify-content-left">
            <button
              className="btn btn-dark me-2 d-flex align-items-center"
              onClick={openWhatsAppChat}
            >
              <i className="fab fa-whatsapp me-2"></i>
              WhatsApp
            </button>
            <button
              className="btn btn-dark ms-2 d-flex align-items-center"
              onClick={sendEmail}
            >
              <i className="fas fa-envelope me-2"></i>
              Email
            </button>
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-lg-4">
          <p className="fs-3">Product Specifications</p>
          <p className="fs-4 mb-0 pb-0">H. S. Code</p>
          <p className="fw-light mt-0 pt-0">{defaultHSCode}</p>
          <p className="fs-4 mb-0 pb-0">Origin</p>
          <p className="fw-light mt-0 pt-0">{defaultOrigin}</p>
        </div>
        <div className="col-lg-4">
          <p className="fs-3">Packaging details</p>
          <p className="fs-4 mb-0 pb-0">Material used</p>
          <p className="fw-light mt-0 pt-0">{defaultPackagingMaterial}</p>
          <p className="fs-4 mb-0 pb-0">Size</p>
          <p className="fw-light mt-0 pt-0">{defaultPackSize}</p>
          <p className="fs-4 mb-0 pb-0">Special Qualities of packaging </p>
          <p className="fw-light mt-0 pt-0">{defaultSpecialPackagingFeature}</p>
        </div>
        <div className="col-lg-4">
          <p className="fs-3">Usage and Serving Suggestions</p>
          <p className="fs-4 mb-0 pb-0">Storage Suggetions</p>
          <p className="fw-light mt-0 pt-0">{defaultStorageInstructions}</p>
          <p className="fs-4 mb-0 pb-0">Preparation</p>
          <p className="fw-light mt-0 pt-0">{defaultPreparationInstructions}</p>
          <p className="fs-4 mb-0 pb-0">Serving</p>
          <p className="fw-light mt-0 pt-0">{defaultServingInstructions}</p>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-lg-12">
          <p className="fs-3">Nutritional Information</p>
          <table className="table table-dark table-striped">
            <thead>
              <tr>
                <th scope="col">Parameter</th>
                <th scope="col">Amount per Serving</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Calories</td>
                <td>150</td>
              </tr>
              <tr>
                <td>Total Fat</td>
                <td>10g</td>
              </tr>
              <tr>
                <td>Cholesterol</td>
                <td>20mg</td>
              </tr>
              <tr>
                <td>Sodium</td>
                <td>300mg</td>
              </tr>
              <tr>
                <td>Total Carbohydrates</td>
                <td>25g</td>
              </tr>
              <tr>
                <td>Dietary Fiber</td>
                <td>5g</td>
              </tr>
              <tr>
                <td>Sugars</td>
                <td>2g</td>
              </tr>
              <tr>
                <td>Protein</td>
                <td>5g</td>
              </tr>
              <tr>
                <td>Vitamin C</td>
                <td>10mg</td>
              </tr>
              <tr>
                <td>Calcium</td>
                <td>100mg</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="row mt-3">
        <div>Last updated on: {defaultTimestamp}</div>
        <div className="col-lg-12">
          <h3>Customer Reviews</h3>
          <div className="card">
            <div className="card-body">
              <h5>John Doe</h5>
              <p>This product is amazing!</p>
            </div>
          </div>
          <div className="card mt-3">
            <div className="card-body">
              <h5>Jane Smith</h5>
              <p>Highly recommended!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
