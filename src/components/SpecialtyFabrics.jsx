import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "../assets/css/specialtyfabrics.css";

const SpecialtyFabrics = () => {
  return (
    <Container className="specialty-section py-5">
      <h2 className="text-center mb-4">Specialty Fabrics Tailoring</h2>
      <Row className="align-items-center">
        <Col md={6}>
          <Image
            src="https://res.cloudinary.com/dnb6x004q/image/upload/v1733487620/Tailor-Design/fabric2_n0h5uf.jpg"
            alt="Specialty Fabrics Tailoring"
            fluid
            className="rounded"
          />
        </Col>
        <Col md={6}>
          <h3>Expert Care for Unique Materials</h3>
          <p>
            At Tailor's Studio, we specialize in handling delicate and unique
            fabrics, ensuring that each piece receives the care and precision it
            deserves. Whether it’s leather, silk, velvet, or sequined materials,
            our skilled tailors are equipped to work with a variety of specialty
            fabrics.
          </p>
          <h4>Our Specialty Fabric Services Include:</h4>
          <ul>
            <li>Leather garment alterations and repairs</li>
            <li>Silk dress design and customization</li>
            <li>Sequined and embroidered fabric tailoring</li>
            <li>Velvet and delicate material restorations</li>
            <li>Bespoke designs for specialty fabrics</li>
          </ul>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <h3 className="text-center">Why Choose Tailor's Studio?</h3>
          <p>
            We understand that specialty fabrics require unique handling and
            expertise. Our team uses industry-leading techniques to deliver
            exceptional results while preserving the integrity of the material.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default SpecialtyFabrics;
