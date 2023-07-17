import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC3lfmZHEmvJo_VZQ3V3cEX4ORubiZDwbo",
  authDomain: "ahlesunnatweb.firebaseapp.com",
  projectId: "ahlesunnatweb",
  storageBucket: "ahlesunnatweb.appspot.com",
  messagingSenderId: "104192323841",
  appId: "1:104192323841:web:35999a70acc5ccdad1ab00",
  measurementId: "G-RQZPF9XM3G"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Enable persistence
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);

// Export the Firebase modules
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();

export default firebase;
