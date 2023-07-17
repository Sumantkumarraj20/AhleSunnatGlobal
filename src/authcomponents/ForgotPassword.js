import React, { useState } from "react";
import { auth } from "../firebase";
import Layout from "../Layout";
import { Link } from "react-router-dom";
const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [resetSent, setResetSent] = useState(false);
  const [error, setError] = useState(null);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await auth.sendPasswordResetEmail(email);
      setResetSent(true);
      setError(null);
    } catch (err) {
      setError(err.message);
      setResetSent(false);
    }
  };

  return (
    <Layout title={"Password Reset"}>
      <div className="text-center">
      <div className="form-signin w-100 m-auto">
          <h2>Forgot Password</h2>
          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}
          {resetSent ? (
            <div className="alert alert-success text-left" role="alert">
              <h4 className="alert-heading">Reset link sent!</h4>
              <p>A password reset link has been sent to your email. Click the link and enter new password and come back to <Link className="alert-link" to="/login"> sign in </Link>  with new password.</p>
              <hr />
              <p className="mb-0">
                If you have not received yet wait for minute before sending new
                request.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-floating m-2">
                <input
                  type="email"
                  className="form-control custom-input"
                  id="floatingInput"
                  placeholder="name@example.com"
                  value={email}
                  onChange={handleEmailChange}
                />
                <label htmlfor="floatingInput">Email address</label>
              </div>
              <button className="w-100 btn btn-lg btn-dark mt-4" type="submit">
                Reset Password
              </button>
            </form>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default ForgotPassword;
