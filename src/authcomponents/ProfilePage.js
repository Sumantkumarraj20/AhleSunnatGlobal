import React, { useState, useEffect } from "react";
import firebase from "../firebase";
import "firebase/firestore";
import Layout from "../Layout";

const ProfilePage = () => {
  const [userData, setUserData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    dateOfBirth: "",
    streetAddress: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
    companyName: "",
    businessType: "",
    businessAddress: "",
    businessLicense: "",
    dietaryRestrictions: "",
    allergies: "",
    productInterests: "",
    preferredPackaging: "",
    previousOrders: "",
    favoriteProducts: "",
    feedback: "",
    preferredLanguage: "",
    subscribeToNewsletter: false,
    marketingConsent: false,
    socialMediaHandles: "",
    paymentMethod: "",
    billingAddress: "",
    receiveNotifications: false,
    communicationChannels: "",
    interests: "",
    profilePicture: null,
  });

  useEffect(() => {
    // Fetch user data from Firebase
    const fetchUserData = async () => {
      try {
        const user = firebase.auth().currentUser;
        if (user) {
          const userSnapshot = await firebase
            .firestore()
            .collection("users")
            .doc(user.uid)
            .get();
          if (userSnapshot.exists) {
            const userData = userSnapshot.data();
            setUserData(userData);
          }
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  useEffect(() => {
    const user = firebase.auth().currentUser;
    if (user && user.photoURL) {
      setUserData((prevUserData) => ({
        ...prevUserData,
        profilePicture: user.photoURL,
      }));
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: checked,
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUserData((prevUserData) => ({
        ...prevUserData,
        profilePicture: URL.createObjectURL(file),
      }));
    }
  };

  const saveUserData = async () => {
    try {
      const user = firebase.auth().currentUser;
      if (user) {
        const { profilePicture, ...userDataWithoutPicture } = userData;
        await firebase
          .firestore()
          .collection("users")
          .doc(user.uid)
          .set(userDataWithoutPicture);

        console.log("User data saved successfully!");
      }
    } catch (error) {
      console.error("Error saving user data:", error);
    }
  };

  return (
    <Layout title={"My Profile"}>
      <div className="container rounded bg-white mt-5 mb-5">
        <div className="row">
          <div className="col-md-4">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
              <label htmlFor="profilePicture">
                <img
                  className="rounded-circle mt-5"
                  width="150px"
                  src={
                    userData.profilePicture ||
                    "https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                  }
                  alt="Profile"
                />
              </label>
              <input
                id="profilePicture"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                style={{ display: "none" }}
              />
            </div>
          </div>
          <div className="col-md-4 border-right">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="text-right">Personal Information</h4>
              </div>
              <div className="row mt-2">
                <div className="col-md-12">
                  <label className="labels">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    className="form-control"
                    placeholder="Full Name"
                    value={userData.fullName}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-12">
                  <label className="labels">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Email Address"
                    value={userData.email}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-12">
                  <label className="labels">Phone Number</label>
                  <input
                    type="text"
                    name="phoneNumber"
                    className="form-control"
                    placeholder="Phone Number"
                    value={userData.phoneNumber}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-12">
                  <label className="labels">Date of Birth</label>
                  <input
                    type="date"
                    name="dateOfBirth"
                    className="form-control"
                    value={userData.dateOfBirth}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="text-right">Address Details</h4>
              </div>
              <div className="row mt-2">
                <div className="col-md-12">
                  <label className="labels">Street Address</label>
                  <input
                    type="text"
                    name="streetAddress"
                    className="form-control"
                    placeholder="Street Address"
                    value={userData.streetAddress}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-6">
                  <label className="labels">City</label>
                  <input
                    type="text"
                    name="city"
                    className="form-control"
                    placeholder="City"
                    value={userData.city}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-md-6">
                  <label className="labels">State/Province</label>
                  <input
                    type="text"
                    name="state"
                    className="form-control"
                    placeholder="State/Province"
                    value={userData.state}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-6">
                  <label className="labels">Postal Code</label>
                  <input
                    type="text"
                    name="postalCode"
                    className="form-control"
                    placeholder="Postal Code"
                    value={userData.postalCode}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-md-6">
                  <label className="labels">Country</label>
                  <input
                    type="text"
                    name="country"
                    className="form-control"
                    placeholder="Country"
                    value={userData.country}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-4">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="text-right">Company Information</h4>
              </div>
              <div className="row mt-2">
                <div className="col-md-12">
                  <label className="labels">Company Name</label>
                  <input
                    type="text"
                    name="companyName"
                    className="form-control"
                    placeholder="Company Name"
                    value={userData.companyName}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-12">
                  <label className="labels">Business Type</label>
                  <input
                    type="text"
                    name="businessType"
                    className="form-control"
                    placeholder="Business Type"
                    value={userData.businessType}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-12">
                  <label className="labels">Business Address</label>
                  <input
                    type="text"
                    name="businessAddress"
                    className="form-control"
                    placeholder="Business Address"
                    value={userData.businessAddress}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-12">
                  <label className="labels">Business License/Registration Number</label>
                  <input
                    type="text"
                    name="businessLicense"
                    className="form-control"
                    placeholder="Business License/Registration Number"
                    value={userData.businessLicense}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="text-right">Product Preferences</h4>
              </div>
              <div className="row mt-2">
                <div className="col-md-12">
                  <label className="labels">Dietary Restrictions</label>
                  <input
                    type="text"
                    name="dietaryRestrictions"
                    className="form-control"
                    placeholder="Dietary Restrictions"
                    value={userData.dietaryRestrictions}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-12">
                  <label className="labels">Allergies</label>
                  <input
                    type="text"
                    name="allergies"
                    className="form-control"
                    placeholder="Allergies"
                    value={userData.allergies}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-12">
                  <label className="labels">Product Interests</label>
                  <input
                    type="text"
                    name="productInterests"
                    className="form-control"
                    placeholder="Product Interests"
                    value={userData.productInterests}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-12">
                  <label className="labels">Preferred Packaging</label>
                  <input
                    type="text"
                    name="preferredPackaging"
                    className="form-control"
                    placeholder="Preferred Packaging"
                    value={userData.preferredPackaging}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="text-right">Additional Information</h4>
              </div>
              <div className="row mt-2">
                <div className="col-md-12">
                  <label className="labels">Interests/Hobbies</label>
                  <input
                    type="text"
                    name="interests"
                    className="form-control"
                    placeholder="Interests/Hobbies"
                    value={userData.interests}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-4">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="text-right">Purchase History</h4>
              </div>
              <div className="row mt-2">
                <div className="col-md-12">
                  <label className="labels">Previous Orders</label>
                  <textarea
                    name="previousOrders"
                    className="form-control"
                    placeholder="Previous Orders"
                    value={userData.previousOrders}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-12">
                  <label className="labels">Favorite Products</label>
                  <textarea
                    name="favoriteProducts"
                    className="form-control"
                    placeholder="Favorite Products"
                    value={userData.favoriteProducts}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-12">
                  <label className="labels">Feedback on Past Purchases</label>
                  <textarea
                    name="feedback"
                    className="form-control"
                    placeholder="Feedback on Past Purchases"
                    value={userData.feedback}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="text-right">Language Preferences</h4>
              </div>
              <div className="row mt-2">
                <div className="col-md-12">
                  <label className="labels">Preferred Language</label>
                  <input
                    type="text"
                    name="preferredLanguage"
                    className="form-control"
                    placeholder="Preferred Language"
                    value={userData.preferredLanguage}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="text-right">Marketing Preferences</h4>
              </div>
              <div className="row mt-2">
                <div className="col-md-6">
                  <label className="labels">Subscribe to Newsletters</label>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      name="subscribeToNewsletter"
                      className="form-check-input"
                      checked={userData.subscribeToNewsletter}
                      onChange={handleCheckboxChange}
                    />
                    <label className="form-check-label">Yes</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <label className="labels">Marketing Consent</label>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      name="marketingConsent"
                      className="form-check-input"
                      checked={userData.marketingConsent}
                      onChange={handleCheckboxChange}
                    />
                    <label className="form-check-label">Yes</label>
                  </div>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-12">
                  <label className="labels">Social Media Handles</label>
                  <input
                    type="text"
                    name="socialMediaHandles"
                    className="form-control"
                    placeholder="Social Media Handles"
                    value={userData.socialMediaHandles}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-12">
                  <label className="labels">Receive Notifications</label>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      name="receiveNotifications"
                      className="form-check-input"
                      checked={userData.receiveNotifications}
                      onChange={handleCheckboxChange}
                    />
                    <label className="form-check-label">Yes</label>
                  </div>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-12">
                  <label className="labels">Communication Channels</label>
                  <input
                    type="text"
                    name="communicationChannels"
                    className="form-control"
                    placeholder="Communication Channels"
                    value={userData.communicationChannels}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-3 py-5">
              <div className="mt-5 text-center">
                <button
                  className="btn btn-primary profile-button"
                  type="button"
                  onClick={saveUserData}
                >
                  Save Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default React.memo(ProfilePage);
