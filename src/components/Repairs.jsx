import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../assets/css/Repairs.css";

const RepairAndRestoration = () => {
  return (
    <Container className="repair-restoration-section py-5">
      <h2 className="text-center mb-4">Repair & Restoration Services</h2>
      <p className="text-center mb-5">
        Extend the life of your cherished garments with our expert repair and
        restoration services. We combine craftsmanship with precision to bring
        your clothing back to life.
      </p>
      <Row>
        <Col md={6} className="mb-4">
          <Card className="h-100 repair-card">
            <Card.Body>
              <Card.Title>Precise Repairs</Card.Title>
              <Card.Text>
                We specialize in repairing damages such as tears, holes, and
                loose seams. Our meticulous approach ensures that the repairs
                blend seamlessly with the original design.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="mb-4">
          <Card className="h-100 repair-card">
            <Card.Body>
              <Card.Title>Vintage Restoration</Card.Title>
              <Card.Text>
                Have a beloved vintage piece? Let us restore it to its former
                glory while preserving its unique character and charm.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="mb-4">
          <Card className="h-100 repair-card">
            <Card.Body>
              <Card.Title>Leather & Specialty Fabric Repairs</Card.Title>
              <Card.Text>
                We handle complex repairs for leather and specialty fabrics,
                ensuring durability and a flawless finish.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="mb-4">
          <Card className="h-100 repair-card">
            <Card.Body>
              <Card.Title>Color Matching & Fabric Replacement</Card.Title>
              <Card.Text>
                Our experts can match colors and replace damaged fabric sections
                to restore the garment’s original look and feel.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default RepairAndRestoration;
