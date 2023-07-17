import React, { useState } from "react";
import firebase from "../firebase";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../Layout";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };
  const handleGoogleLogin = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
      await auth.signInWithPopup(provider);
      // User is now signed in with their Google account
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <Layout title={"Login"}>
      <div className="text-center">
        <div className="form-signin w-100 m-auto">
          <div className="alert alert-light m-2" role="alert">
            If you are first time on Ahlesunnat Global website{" "}
            <Link className="alert-link" to="/signup">
              Register yourself
            </Link>{" "}
            .
          </div>
          <form onSubmit={handleLogin}>
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
            {error && (
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            )}
            <div className="form-floating">
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
            <div className="form-floating">
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
            <div className="checkbox m-4">
              <label>
                <input type="checkbox" value="remember-me" /> Remember me
              </label>
            </div>
            <button className="w-100 btn btn-lg btn-dark mb-4" type="submit">
              Sign in
            </button>
          </form>
          <button
            className="w-100 btn btn-warning ms-2"
            onClick={handleGoogleLogin}
          >
            Sign in with Google
          </button>
          <div className="alert alert-info m-2" role="alert">
            If You lost your password, you can{" "}
            <Link className="alert-link" to="/forgot-password">
              reset your password
            </Link>{" "}
            here.
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
