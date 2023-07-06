import React, { useState } from "react";
import "../App.css";
import images from "../assets/data/imagesrc.json";
import Photoslider from "../components/Photoslider";

const Contact = () => {
  const imgsrc = images.officeimg;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;

    const mailtoUrl = `mailto:ahlesunnatglobal@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    )}`;

    window.location.href = mailtoUrl;
  };

  const openWhatsAppChat = () => {
    window.open("https://api.whatsapp.com/send?phone=+919433242956", "_blank");
  };

  const sendEmail = () => {
    window.location.href = "mailto:ahlesunnatglobal@gmail.com";
  };

  const openGoogleMaps = () => {
    window.open(`https://goo.gl/maps/ZuSaFHA6qyPpvi8o7`);
  };

  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <h4 className="card-header">Contact Information</h4>
            <ul className="list-group list-group-flush">
              <li
                className="list-group-item d-flex hoverable"
                onClick={openWhatsAppChat}
              >
                <i className="fab fa-whatsapp me-2"></i> Whatsapp Us
                +919433242956
              </li>
              <li
                className="list-group-item d-flex hoverable"
                onClick={sendEmail}
              >
                <i className="fas fa-envelope me-2"></i>
                Email Us - ahlesunnatglobal@gmail.com
              </li>
              <li
                className="list-group-item d-flex hoverable"
                onClick={openGoogleMaps}
              >
                <i className="fa-sharp fa-solid fa-location-dot me-2"></i>
                View it on Map - Gangaprasad colony, Malda, Kolkata, West
                Bengal, India - 732207
              </li>
            </ul>
          </div>
          <div
            className="img"
            style={{
              width: "auto",
              height: "330px",
            }}
          >
            <Photoslider imgsrcs={imgsrc} />
          </div>
        </div>
        <div className="col-md-6 h-100 d-inline-block">
          <div className="card shadow">
            <h4 className="card-header">Send us a Message</h4>
            <form className="p-2" onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-control custom-input"
                  id="name"
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-control custom-input"
                  id="email"
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-control custom-input"
                  id="subject"
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-control custom-input"
                  id="message"
                  rows="5"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-dark">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
