import React, { useState, useEffect } from "react";
import firebase from "../firebase";
import "firebase/firestore";

const ProfilePage = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    age: "",
    address: "",
    phone: "",
    // Add more fields as needed
  });

  useEffect(() => {
    // Fetch user data from Firebase
    const fetchUserData = async () => {
      try {
        const user = firebase.auth().currentUser;
        if (user) {
          const userSnapshot = await firebase.firestore().collection("users").doc(user.uid).get();
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  const saveUserData = async () => {
    try {
      const user = firebase.auth().currentUser;
      if (user) {
        await firebase.firestore().collection("users").doc(user.uid).set(userData);
        console.log("User data saved successfully!");
      }
    } catch (error) {
      console.error("Error saving user data:", error);
    }
  };

  return (
    <div>
      <h1>Profile Page</h1>
      <form>
        <label>
          Name:
          <input type="text" name="name" value={userData.name} onChange={handleInputChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={userData.email} onChange={handleInputChange} />
        </label>
        <label>
          Age:
          <input type="number" name="age" value={userData.age} onChange={handleInputChange} />
        </label>
        <label>
          Address:
          <input type="text" name="address" value={userData.address} onChange={handleInputChange} />
        </label>
        <label>
          Phone:
          <input type="tel" name="phone" value={userData.phone} onChange={handleInputChange} />
        </label>
        {/* Add more fields as needed */}
      </form>
      <button onClick={saveUserData}>Save</button>
    </div>
  );
};

export default ProfilePage;
