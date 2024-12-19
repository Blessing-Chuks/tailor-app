import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const AboutUs = () => {
  return (
    <Container className="py-5 bg-light rounded shadow">
      <h1 className="text-center mb-4 border-bottom pb-3">About Us</h1>

      <Row className="mb-4">
        <Col>
          <h2 className="text-primary">Welcome to Tailor-Design</h2>
          <p>
            At Tailor-Design, we are passionate about bringing your vision to
            life through the art of tailoring. Our commitment to excellence and
            attention to detail ensures that every garment we create not only
            meets but exceeds your expectations.
          </p>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col md={6}>
          <h2 className="text-primary">Our Story</h2>
          <p>
            Founded with a mission to redefine custom tailoring, Tailor-Design
            blends traditional craftsmanship with modern techniques. Over the
            years, we’ve grown into a trusted name, known for delivering
            unparalleled quality and style.
          </p>
        </Col>
        <Col md={6}>
          <h2 className="text-primary">Our Expertise</h2>
          <p>
            Our team comprises master tailors and designers who take pride in
            creating bespoke clothing for all occasions. From elegant evening
            wear to sharp business attire, every piece is handcrafted with
            precision and care.
          </p>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <h2 className="text-primary">What Sets Us Apart</h2>
          <ul>
            <li>Bespoke Tailoring: Perfect fit and personalized design.</li>
            <li>Premium Materials: Luxurious fabrics and rich textures.</li>
            <li>Innovative Design: Timeless styles with modern trends.</li>
            <li>
              Customer-Centric Service: Collaborating closely to bring your
              ideas to life.
            </li>
          </ul>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <h2 className="text-primary">Our Services</h2>
          <ul>
            <li>
              Custom-Made Clothing: Personalized suits, dresses, and more.
            </li>
            <li>
              Alterations and Repairs: Perfecting the fit of your wardrobe.
            </li>
            <li>
              Wedding and Event Attire: Bridal gowns, tuxedos, and formal wear.
            </li>
            <li>Seasonal Collections: Trends and styles for every season.</li>
          </ul>
        </Col>
      </Row>

      <Row>
        <Col>
          <h2 className="text-primary">Our Vision</h2>
          <p>
            We believe that clothing is more than fabric; it is an expression of
            individuality. At Tailor-Design, our vision is to empower our
            clients to feel confident and elegant through the art of custom
            tailoring.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
