import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "../assets/css/customtailoring.css";

const CustomTailoring = () => {
  return (
    <Container className="custom-tailoring-section py-5">
      <h2 className="text-center mb-4">Custom Tailoring Services</h2>
      <Row className="align-items-center">
        <Col md={6}>
          <Image
            src="https://res.cloudinary.com/dnb6x004q/image/upload/v1733483580/Tailor-Design/service_1_wabn6k.jpg"
            alt="Custom tailoring"
            fluid
            className="rounded"
          />
        </Col>
        <Col md={6}>
          <h3>Tailored to Perfection</h3>
          <p>
            At Tailor's Studio, we specialize in creating bespoke clothing
            tailored to your unique style, measurements, and preferences. Our
            custom tailoring services ensure you always look your best, whether
            it's for a corporate event, wedding, or casual wear.
          </p>
          <h4>Why Choose Our Custom Tailoring?</h4>
          <ul>
            <li>Expert tailors with years of experience</li>
            <li>High-quality fabrics and materials</li>
            <li>Attention to detail and precision</li>
            <li>Personalized consultations</li>
            <li>Timely delivery to meet your schedule</li>
          </ul>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <h3 className="text-center">How It Works</h3>
          <ol>
            <li>
              <strong>Consultation:</strong> Schedule a one-on-one consultation
              with our expert tailors.
            </li>
            <li>
              <strong>Design:</strong> Share your vision, and we’ll create a
              design tailored to your needs.
            </li>
            <li>
              <strong>Fittings:</strong> Experience multiple fittings to ensure
              the perfect fit.
            </li>
            <li>
              <strong>Delivery:</strong> Receive your custom outfit, ready to
              wear and impress.
            </li>
          </ol>
        </Col>
      </Row>
    </Container>
  );
};

export default CustomTailoring;
