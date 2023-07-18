import React, { useEffect, useState } from "react";
import iconPath from "../assets/icons/onlinelogomaker-070423-0133-3618.png";
import { NavLink, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

const Navbar = ({ user, isLoggedIn }) => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
    navigate(`/search-results?query=${encodeURIComponent(searchQuery)}`);
  };
  console.log(user)
  const handleLogout = () => {
    auth
      .signOut()
      .then(() => {
        navigate("/logout");
        window.location.reload();
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  const [profilePic, setProfilePic] = useState(
    "https://th.bing.com/th/id/R.b57286b3bdd46230446527255162d230?rik=S0%2byU7RX6xMplg&pid=ImgRaw&r=0"
  );

  useEffect(() => {
    if (user && user.photoURL !== null) {
      setProfilePic(user.photoURL);
    }
  }, []);
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark shadow">
      <div className="container-fluid">
        <button
          className="navbar-toggler me-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link className="navbar-brand me-auto" to="/">
          <img
            src={iconPath}
            alt="Ahlesunnat Global"
            width="50"
            height="50"
            className="d-inline-block align-text-center rounded"
          />
          <span className="ms-2">Ahlesunnat Global</span>
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/" className="nav-link" aria-current="page">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/ourproducts" className="nav-link">
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link">
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link">
                About Us
              </NavLink>
            </li>
          </ul>
          <div className="d-flex ms-auto">
            <form className="d-flex me-2" onSubmit={handleSearchInputChange}>
              <input
                className="form-control form-control-dark text-bg-dark custom-input"
                type="search"
                placeholder="Search Our products"
                aria-label="Search"
                value={searchQuery}
                onChange={handleSearchInputChange}
              />
            </form>
            {!isLoggedIn ? (
              <div className="authButtons">
                <Link to="/signup" className="btn btn-outline-light me-auto">
                  SignUp
                </Link>
                <Link to="/login" className="btn btn-warning ms-2">
                  LogIn
                </Link>
              </div>
            ) : (
              <div className="d-flex">
                <Link to="/profile" className="me-2">
                  <img
                    src={profilePic}
                    alt="mdo"
                    width="32"
                    height="32"
                    className="rounded-circle"
                  />
                </Link>
                <span className="text-white" onClick={handleLogout}>
                  Sign out
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
