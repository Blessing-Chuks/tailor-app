import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "../assets/css/bridaloccasion.css";

const BridalOccasion = () => {
  return (
    <Container className="bridal-section py-5">
      <h2 className="text-center mb-4">Bridal Occasion Tailoring</h2>
      <Row className="align-items-center">
        <Col md={6}>
          <Image
            src="https://res.cloudinary.com/dnb6x004q/image/upload/v1733486308/Tailor-Design/special_1_os1l5i.jpg"
            alt="Bridal tailoring"
            fluid
            className="rounded"
          />
        </Col>
        <Col md={6}>
          <h3>Tailoring Dreams for Your Special Day</h3>
          <p>
            At Tailor's Studio, we specialize in creating breathtaking attire
            for weddings and other significant celebrations. Whether it’s a
            bespoke bridal gown or a custom suit, we ensure that every stitch
            reflects your vision and enhances your elegance.
          </p>
          <h4>Our Bridal Occasion Services Include:</h4>
          <ul>
            <li>Custom bridal gown design</li>
            <li>Tailored suits for grooms and groomsmen</li>
            <li>Alterations for bridesmaids and family members</li>
            <li>Restoration and adjustment of heirloom dresses</li>
            <li>Special occasion dresses for galas and anniversaries</li>
          </ul>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <h3 className="text-center">Why Tailor's Studio?</h3>
          <p>
            We take pride in providing exceptional service, combining artistry
            with precision to craft garments that make your special occasion
            truly unforgettable. Our experienced team uses the finest materials
            and pays close attention to every detail.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default BridalOccasion;
