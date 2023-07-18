import React, { useState } from "react";
import { auth } from "../firebase";
import firebase from "../firebase";
import Layout from "../Layout";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [Name, setName] = useState("");
  const [Surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSignUp = async (e) => {
    e.preventDefault();
    const displayName = `${Name} ${Surname}`;

    try {
      const userCredential = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      const user = userCredential.user;

      // Update the user's display name
      await user.updateProfile({
        displayName: displayName,
      });

      // Clear form fields
      setName("");
      setSurname("");
      setEmail("");
      setPassword("");

      // Redirect or show success message to the user
    } catch (error) {
      setError(error.message);
    }
  };

  const handleGoogleSignUp = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
      await auth.signInWithPopup(provider);
      alert("You have successfully signed up.");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Layout title="Sign Up">
      <div className="text-center">
        <div className="form-signin w-100 m-auto">
          <form onSubmit={handleSignUp}>
            <h1 className="h3 mb-3 fw-normal">Sign Up</h1>
            {error && (
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            )}
            <div className="form-floating m-2">
              <input
                type="text"
                className="form-control custom-input"
                id="floatingInput"
                placeholder="Sumant"
                value={Name}
                onChange={(e) => setName(e.target.value)}
              />
              <label htmlfor="floatingInput">Name</label>
            </div>
            <div className="form-floating m-2">
              <input
                type="text"
                className="form-control custom-input"
                id="floatingInput"
                placeholder="Surname"
                value={Surname}
                onChange={(e) => setSurname(e.target.value)}
              />
              <label htmlfor="floatingInput">Surname</label>
            </div>
            <div className="form-floating m-2">
              <input
                type="email"
                className="form-control custom-input"
                id="floatingInput"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlfor="floatingInput">Email address</label>
            </div>
            <div className="form-floating m-2">
              <input
                type="password"
                className="form-control custom-input"
                id="floatingPassword"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlfor="floatingPassword">Password</label>
            </div>
            <button className="w-100 btn btn-dark m-2" type="submit">
              Sign Up
            </button>
          </form>

          <button
            className="w-100 btn btn-lg btn-warning m-2"
            onClick={handleGoogleSignUp}
          >
            Sign up with Google
          </button>
          <div className="alert alert-info m-2" role="alert">
            If you already have an account{" "}
            <Link className="alert-link" to="/login">
              login here
            </Link>{" "}
            .
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SignUp;
