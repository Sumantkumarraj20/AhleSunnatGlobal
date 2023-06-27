import React from "react";
import Photoslider from "../components/Photoslider";
import "../App.css";
import ProfileCard from "../components/ProfileCard";
import Members from "../assets/data/profiledata.json";
import clients from "../assets/data/clientdata.json";
import images from "../assets/data/imagesrc.json";

const About = () => {
  const imgsrc = images.photosliderimage;
  const meet = images.officeimg;
  return (
    <div className="container-fluid">
      <section className="company-overview">
        <div className="row">
          <div className="col-md-6">
            <div className="card shadow p-2 mb-2">
              <h3 className="card-hearder text-center">Who We Are</h3>
              <Photoslider imgsrcs={meet} />
              <div className="card-body">
                <p>
                  Ahlesunnat Global is a dynamic export-import company rooted in
                  the vibrant culture and rich heritage of West Bengal, India.
                  With a deep understanding of the local working style and
                  cultural norms, we have emerged as a trusted name in the
                  global trade industry.
                </p>
                <p>
                  Our extensive range of high-quality products showcases the
                  diversity and craftsmanship that India is renowned for. From
                  exquisite textiles and handicrafts to agricultural commodities
                  and industrial goods, we bring the essence of India to the
                  world stage.
                </p>
                <p>
                  Driven by our vision to be the guiding light in the global
                  trade industry, we navigate the complexities of international
                  business with ease and expertise. Our mission is to empower
                  businesses with seamless import and export solutions,
                  fostering growth, trust, and lasting global connections.
                </p>
                <p>
                  At Ahlesunnat Global, we pride ourselves on our unwavering
                  commitment to integrity, reliability, and customer
                  satisfaction. With a dedicated team of professionals, we go
                  above and beyond to exceed expectations and deliver
                  exceptional value to our clients.
                </p>
                <p>
                  Partner with us and experience the true essence of Indian
                  trade, as we embark on a journey of success, collaboration,
                  and mutual growth. Discover the world of opportunities with
                  Ahlesunnat Global - your trusted partner in international
                  trade.
                </p>
              </div>
            </div>
            <div className="card shadow mb-2">
              <div className="card-header fw-bold fs-4">
                Mission of AhleSunnat Global
              </div>
              <div className="card-body">
                At Ahlesunnat Global, our mission is to facilitate seamless
                international trade by providing comprehensive export and import
                solutions tailored to our clients' unique needs. We strive to
                deliver excellence through our extensive network, efficient
                processes, and unwavering commitment to customer satisfaction.
                We aim to build long-term partnerships with our clients,
                enabling their growth and success in the global market.
              </div>
            </div>
            <div className="card shadow mb-2">
              <div className="card-header fw-bold fs-4">
                Vision of AhleSunnat Global
              </div>
              <div className="card-body">
                To become the preferred global partner in export and import
                services, recognized for our exceptional quality, reliability,
                and customer-centric approach.
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card shadow mb-2">
              <div className="card-header fw-bold fs-4">
                AhleSunnat Global team
              </div>
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  {Members.map((member) => (
                    <li key={member.id} className="list-group-item">
                      <ProfileCard
                        name={member.name}
                        position={member.position}
                        email={member.email}
                        contact={member.contact}
                        pic={member.pic}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="card shadow mb-2">
              <div className="card-header fw-bold fs-4">
                AhleSunnat Global Client
              </div>
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  {clients.map((member) => (
                    <li key={member.id} className="list-group-item">
                      <ProfileCard
                        name={member.name}
                        position={member.position}
                        email={member.email}
                        contact={member.contact}
                        pic={member.pic}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="product-showcase">
        <h3>Our Products</h3>
        <Photoslider imgsrcs={imgsrc} />
      </section>

      <section className="expertise-section">
        <h3>Our Export-Import Expertise</h3>
        <p>{/* Add details about your expertise */}</p>
      </section>

      <section className="testimonials-section">
        <h3>Testimonials</h3>
        <div className="row">
          <div className="col-md-6">
            {/* Add testimonial with customer name and feedback */}
          </div>
          <div className="col-md-6">
            {/* Add testimonial with customer name and feedback */}
          </div>
        </div>
      </section>
      <section className="contact-section">
        <h3>Contact Us</h3>
        <p>{/* Add contact details */}</p>
        {/* Add contact form or other contact information */}
      </section>
    </div>
  );
};

export default About;
