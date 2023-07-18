import React, { useState, useEffect } from "react";
import Photoslider from "../components/Photoslider";
import productData from "../assets/data/productdata.json";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Layout from "../Layout";
import firebase from "../firebase";

const ProductPage = ({ user }) => {
  const { title } = useParams();
  const product = productData.find(
    (product) =>
      product.Title.trim().toLowerCase() === title.trim().toLowerCase()
  );
  const {
    HS_Code,
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

  const defaultTitle = title || "Not available";
  const defaultHSCode = HS_Code || "Not available";
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

  const [nutritionalData, setNutritionalData] = useState(null);

  const fetchNutritionalData = async (foodName) => {
    try {
      const apiKey = "Ywv1e5wrVAUgxbC8Fa8PTzjkbm57157aGpyVXbr1";
      const response = await axios.get(
        `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${apiKey}&query=${foodName}&pageSize=1`
      );
      const food = response.data.foods[0];
      const nutrients = food.foodNutrients.map((nutrient) => ({
        name: nutrient.nutrientName,
        amount: nutrient.value,
        unit: nutrient.unitName,
      }));
      setNutritionalData(nutrients);
    } catch (error) {
      console.error("Error fetching nutritional data:", error);
    }
  };

  const [review, setReview] = useState("");
  const [reviews, setReviews] = useState(product.reviews || []);

  const fetchReviews = async () => {
    try {
      const reviewsSnapshot = await firebase
        .firestore()
        .collection("reviews")
        .where("productId", "==", product.ID)
        .get();
      const reviewsData = reviewsSnapshot.docs.map((doc) => doc.data());
      setReviews(reviewsData);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  };

  useEffect(() => {
    fetchNutritionalData(defaultTitle);
    fetchReviews();
  }, [defaultTitle]);

  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };

  const handleReviewSubmit = async (e) => {
    e.preventDefault();

    const newReview = {
      username: user.displayName,
      review: review,
    };

    const updatedReviews = [...reviews, newReview];
    setReviews(updatedReviews);

    try {
      const user = firebase.auth().currentUser;
      if (user) {
        const reviewRef = firebase.firestore().collection("reviews");
        await reviewRef.add({
          productId: product.ID,
          userId: user.uid,
          ...newReview,
        });

        setReview("");
      }
    } catch (error) {
      console.error("Error adding review:", error);
    }
  };

  return (
    <Layout title={defaultTitle} description={defaultDescription}>
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
            <div className="d-flex justify-content-left">
              <div className="flex-wrap me-auto">
                <p className="fs-3 mb-0 pb-0">Pricing Information</p>
                <p className="fw-light mt-0 pt-0">Price: {defaultPrice}</p>
              </div>
              <div className="flex-wrap me-auto">
                <p className="fs-3 mb-0 pb-0">Availability</p>
                <p className="fw-light mt-0 pt-0">{defaultAvailability}</p>
              </div>
            </div>
            <div className="d-flex justify-content-left">
              <button
                className="btn btn-dark me-5 d-flex align-items-center"
                onClick={openWhatsAppChat}
              >
                <i className="fab fa-whatsapp me-2"></i>
                WhatsApp
              </button>
              <button
                className="btn btn-dark  d-flex align-items-center"
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
            <p className="fs-5 mb-0 pb-0">H. S. Code</p>
            <p className="fw-light mt-0 pt-0">{defaultHSCode}</p>
            <p className="fs-5 mb-0 pb-0">Origin</p>
            <p className="fw-light mt-0 pt-0">{defaultOrigin}</p>
          </div>
          <div className="col-lg-4">
            <p className="fs-3">Packaging details</p>
            <p className="fs-5 mb-0 pb-0">Material used</p>
            <p className="fw-light mt-0 pt-0">{defaultPackagingMaterial}</p>
            <p className="fs-5 mb-0 pb-0">Size</p>
            <p className="fw-light mt-0 pt-0">{defaultPackSize}</p>
            <p className="fs-5 mb-0 pb-0">Special Qualities of packaging </p>
            <p className="fw-light mt-0 pt-0">
              {defaultSpecialPackagingFeature}
            </p>
          </div>
          <div className="col-lg-4">
            <p className="fs-3">Usage and Serving Suggestions</p>
            <p className="fs-4 mb-0 pb-0">Storage Suggetions</p>
            <p className="fw-light mt-0 pt-0">{defaultStorageInstructions}</p>
            <p className="fs-5 mb-0 pb-0">Preparation</p>
            <p className="fw-light mt-0 pt-0">
              {defaultPreparationInstructions}
            </p>
            <p className="fs-5 mb-0 pb-0">Serving</p>
            <p className="fw-light mt-0 pt-0">{defaultServingInstructions}</p>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-lg-12">
            <p className="fs-3">Nutritional Information</p>
            {nutritionalData ? (
              <table className="table table-dark table-striped">
                <thead>
                  <tr>
                    <th scope="col">Parameter</th>
                    <th scope="col">Amount per Serving</th>
                  </tr>
                </thead>
                <tbody>
                  {nutritionalData.map((nutrient, index) => (
                    <tr key={index}>
                      <td>{nutrient.name}</td>
                      <td>
                        {nutrient.amount} {nutrient.unit}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <table className="table table-dark table-striped">
                <thead>
                  <tr>
                    <th scope="col">Parameter</th>
                    <th scope="col">Amount per Serving</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.from({ length: 10 }).map((_, index) => (
                    <tr key={index}>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-lg-12">
            <h3>Customer Reviews</h3>
            {reviews.length > 0 ? (
              reviews.map((review, index) => (
                <div className="card mb-2 p-0" key={index}>
                  <div className="card-body">
                    <h5>{review.username}</h5>
                    <p>{review.review}</p>
                  </div>
                </div>
              ))
            ) : (
              <p>No reviews yet.</p>
            )}
          </div>
        </div>
        {user ? (
          <div className="row mt-3">
            <div className="col-lg-12">
              <h4>Write a Review</h4>
              <form onSubmit={handleReviewSubmit}>
                <div className="form-group">
                  <textarea
                    className="form-control custom-input"
                    rows="3"
                    placeholder="Enter your review"
                    value={review}
                    onChange={handleReviewChange}
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-dark mt-2">
                  Submit Review
                </button>
              </form>
            </div>
          </div>
        ) : (
          <div class="alert alert-warning" role="alert">
            <Link className="alert-link" to="/login">Log in</Link> and give your <Link className="alert-link" to="/profile">profile</Link> name to write your review!
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ProductPage;
