import React from "react";
import Photoslider from "../components/Photoslider";
import "../App.css";
import ProfileCard from "../components/ProfileCard";
import Members from "../assets/data/profiledata.json";
import clients from "../assets/data/clientdata.json";
import images from "../assets/data/imagesrc.json";
import { Link } from "react-router-dom";

const About = () => {
  const imgsrc = images.productimage;
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
            <div className="card shadow mb-2">
              <h5 className="card-header">Contact</h5>
              <div className="card-body">
                <h5 className="card-title">Contact details</h5>
                <p className="card-text">
                  Ready to take your business to new heights? Contact us today
                  and unlock the power of international trade. Our dedicated
                  team is here to provide exceptional solutions tailored to your
                  needs. Reach out now and let's shape a successful future
                  together.
                </p>
                <Link to="/contact" className="btn btn-dark">
                  Contact us
                </Link>
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
            <div className="product-showcase">
              <h3>Our Products</h3>
              <Photoslider imgsrcs={imgsrc} />
            </div>
          </div>
        </div>
      </section>

      <section className="expertise-section">
        <div className="card shadow-sm mb-2">
          <div className="card-body">
            <h2 className="card-title">Our Export-Import Expertise</h2>
            <p className="card-text">
              At AhleSunnat Global, we specialize in providing comprehensive
              export-import solutions tailored to meet the unique requirements
              of our clients. With years of experience and a dedicated team of
              professionals, we have established ourselves as a trusted partner
              in the international trade market.
            </p>
            <ol className="card-text">
              <li>
                Global Market Access: We have extensive knowledge and
                understanding of various international markets, allowing us to
                assist our clients in expanding their business reach and
                exploring new opportunities across borders.
              </li>
              <li>
                Product Sourcing and Supplier Management: We excel in
                identifying reliable suppliers, negotiating favorable terms, and
                ensuring the highest quality standards for the products our
                clients seek to import. We conduct thorough due diligence and
                maintain strong relationships with suppliers worldwide.
              </li>
              <li>
                Compliance and Documentation: Navigating the complex world of
                import-export regulations and documentation can be challenging.
                Our team is well-versed in customs procedures, trade compliance,
                and documentation requirements, ensuring smooth and efficient
                transactions while adhering to all applicable laws and
                regulations.
              </li>
              <li>
                Logistics and Supply Chain Management: We offer end-to-end
                logistics and supply chain management services, including
                freight forwarding, warehousing, transportation, and customs
                clearance. Our expertise ensures timely and cost-effective
                delivery of goods to our clients' desired destinations.
              </li>
              <li>
                Risk Mitigation and Insurance: We understand the risks
                associated with international trade and work closely with our
                clients to identify and mitigate potential risks. We also
                provide insurance solutions to safeguard their interests and
                minimize financial exposure.
              </li>
              <li>
                Market Research and Analysis: Our team conducts in-depth market
                research and analysis to help our clients make informed
                decisions. We provide insights into market trends, competitor
                analysis, pricing strategies, and regulatory changes, enabling
                our clients to stay ahead in a competitive global marketplace.
              </li>
            </ol>
            <p className="card-text">
              At AhleSunnat Global, we are committed to delivering exceptional
              service, fostering long-term partnerships, and facilitating
              successful import-export transactions for our clients. Whether you
              are a seasoned player in the international trade arena or
              venturing into it for the first time, we have the expertise and
              resources to support your business growth and maximize your global
              trade opportunities.
            </p>
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <h3>Testimonials</h3>
        <div className="row">
          {clients.map((testimonial) => (
            <div key={testimonial.id} className="col-md-6">
              <div className="card shadow-sm mb-2">
                <div className="card-body">
                  <blockquote className="blockquote mb-0">
                    <p>{testimonial.testimonial}</p>
                    <footer className="blockquote-footer fw-bold mb-0 pb-0">
                      {testimonial.name}
                    </footer>
                    <div className="Card-text fs-6 fw-light ms-3 mt-0 pt-0">
                      {testimonial.company}
                    </div>
                  </blockquote>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
