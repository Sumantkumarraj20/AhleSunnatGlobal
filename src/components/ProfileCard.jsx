import React from "react";
import "../App.css";

const ProfileCard = (props) => {
  return (
    <div className="d-flex align-items-center">
      <img src={props.pic} alt="Profile" className="profile-image" />
      <div className="m-2">
        <p className="fs-5 fw-bold p-0 m-0">{props.name}</p>
        <p className="fs-6 fst-italic p-0 m-0">{props.position}</p>
        <p className="fw-lighter p-0 m-0"><i className="fas fa-envelope me-2"></i>{props.email}</p>
        <p className="p-0 m-0"><i className="fab fa-whatsapp me-2"></i>{props.contact}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
