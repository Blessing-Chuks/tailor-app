import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../assets/css/alterations.css";

const Alterations = () => {
  return (
    <Container className="alterations-section py-5">
      <h2 className="text-center mb-4">Expert Alterations</h2>
      <p className="text-center mb-5">
        Transform your garments with precision and expertise. Our alteration
        services are designed to ensure the perfect fit and enhance the
        longevity of your wardrobe.
      </p>
      <Row>
        <Col md={6} className="mb-4">
          <Card className="h-100 alteration-card">
            <Card.Body>
              <Card.Title>Perfect Fit Guaranteed</Card.Title>
              <Card.Text>
                Whether it’s a suit, dress, or casual wear, we specialize in
                tailoring your garments to fit your body perfectly. From minor
                adjustments to major alterations, we’ve got you covered.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="mb-4">
          <Card className="h-100 alteration-card">
            <Card.Body>
              <Card.Title>Revive Your Favorite Pieces</Card.Title>
              <Card.Text>
                Don’t part with your favorite outfits! We can repair tears,
                replace zippers, or even modernize outdated styles, breathing
                new life into cherished pieces.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="mb-4">
          <Card className="h-100 alteration-card">
            <Card.Body>
              <Card.Title>Bridal & Formal Wear</Card.Title>
              <Card.Text>
                Your special day deserves perfection. We provide precise
                alterations for bridal gowns, tuxedos, and formal attire,
                ensuring you look flawless.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="mb-4">
          <Card className="h-100 alteration-card">
            <Card.Body>
              <Card.Title>Quick Turnaround</Card.Title>
              <Card.Text>
                Need alterations in a hurry? Our skilled team offers fast and
                efficient services without compromising on quality.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Alterations;
