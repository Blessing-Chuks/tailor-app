import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap"; // Import required components from React Bootstrap
import "../assets/css/creative.css";

const Creative = () => {
  return (
    <section className="creative-design-section">
      {/* Text Section */}
      <Container className="text-section">
        <Row>
          <Col>
            <h2 className="hedo">
              <span className="highlight">Creative Design</span> <br />&
              Advertising
            </h2>
            <p className="description">
              At pulvinar egestas ornare ac hendrerit ante orci sit nisl
              ultrices enim pellentesque tristique donec et amet nunc quis
              bibendum aenean odio malesuada pellentesque sem semper turpis
              faucibus sociis porttitor sed pellentesque faucibus dapibus luctus
              sed.
            </p>
          </Col>
        </Row>
      </Container>

      {/* Images Section */}
      <Container className="images-section">
        <Row>
          <Col md={6}>
            <Image
              src="https://res.cloudinary.com/dnb6x004q/image/upload/v1727266782/Tailor-Design/Rectangle_3995_ihmkwl.png"
              alt="Creative Design Work 1"
              fluid
            />
          </Col>
          <Col md={6}>
            <Image
              src="https://res.cloudinary.com/dnb6x004q/image/upload/v1727339241/Tailor-Design/Rectangle_3996_1_j5hogq.png"
              alt="Creative Design Work 2"
              fluid
            />
          </Col>
        </Row>
      </Container>

      {/* Stats Section */}
      <Container className="stats-section">
        <Row>
          <Col md={4} className="stat">
            <h4>2560</h4>
            <p>Happy Clients in 25 Years</p>
          </Col>
          <Col md={4} className="stat">
            <h4>7650</h4>
            <p>Projects Completed On the Worldwide</p>
          </Col>
          <Col md={4} className="stat">
            <h4>
              Call Us directly: (88) <br /> 325 3264 33
            </h4>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Creative;
