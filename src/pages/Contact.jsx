import React, { useState } from "react";
import "../App.css";

const Contact = () => {
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
      <h2 className="text-center mb-4">Contact Us</h2>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <img
            src="https://th.bing.com/th/id/R.e0e8423934684b58310805f00dd0550b?rik=uwuWqcxyxLhY6g&pid=ImgRaw&r=0"
            class="img-fluid img-thumbnail mb-2"
            style={{
              width: '41rem',
              height: '292px',
              backgroundColor: 'rgba(0,0,255,.1)',
            }}
            alt="ExportImport"
          />
          <div className="card shadow">
            <h4 className="card-header">Contact Information</h4>
            <ul className="list-group list-group-flush">
              <li className="list-group-item d-flex align-items-center">
                <i className="fab fa-whatsapp me-2"></i>
                +919433242956
                <button
                  className="btn btn-dark ms-auto"
                  onClick={openWhatsAppChat}
                >
                  WhatsApp
                </button>
              </li>
              <li className="list-group-item d-flex align-items-center">
                <i className="fas fa-envelope me-2"></i>
                ahlesunnatglobal@gmail.com
                <button className="btn btn-dark ms-auto" onClick={sendEmail}>
                  Email
                </button>
              </li>
              <li className="list-group-item d-flex align-items-center">
                <i className="fa-sharp fa-solid fa-location-dot me-2"></i>
                Gangaprasad colony, Malda, Kolkata, West Bengal, India - 732207
                <button
                  className="btn btn-dark ms-auto"
                  onClick={openGoogleMaps}
                >
                  View on Map
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-6">
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
