import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../assets/css/Hero.css";

const Hero = () => {
  return (
    <Container fluid className="hero-section py-5">
      <Row>
        {/* Left Column: Text Section */}
        <Col className="d-flex flex-column justify-content-center  headtext">
          <h1 className="hero-heading">
            <span style={{ fontWeight: "bold", color: "red" }}>Bigger</span>,
            Bolder & Better
          </h1>
          <p className="hero-subheading">
            Connect Otter to your Google or Microsoft <br /> calendar and it can
            automatically join and record.
          </p>
        </Col>

        {/* Right Column: Image Section */}
        <Col className="d-flex flex-column">
          <div className="image-container">
            {/* First Image */}
            <img
              src={
                "https://res.cloudinary.com/dnb6x004q/image/upload/v1727266782/Tailor-Design/Rectangle_3993_k5w2qu.png"
              }
              alt="Main Person"
              className="main-image"
            />
          </div>
        </Col>

        {/* Second Image */}
        <Col className="dope">
          <img
            src={
              "https://res.cloudinary.com/dnb6x004q/image/upload/v1727266782/Tailor-Design/Rectangle_3994_s3dswv.png"
            }
            alt="Sub Image"
            className="sub-image mt-3"
          />

          <p className="caption">
            There are many variations of passages of <br />
            Lorem Ipsum available, but the majority <br />
            have suffered alteration.
          </p>
        </Col>
      </Row>
    </Container>
  );
};
export default Hero;
