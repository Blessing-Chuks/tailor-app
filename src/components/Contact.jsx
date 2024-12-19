import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../assets/css/contact.css"; // Import custom styles

const Contact = () => {
  return (
    <div id="contact-section" className="contact-section">
      <Container>
        <Row className="mb-4">
          <Col>
            <h2>Contact Us</h2>
            <p>
              We’re here to help! Feel free to reach out with any questions or
              feedback.
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Form>
              <Form.Group controlId="formName" className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>
              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>
              <Form.Group controlId="formMessage" className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Enter your message"
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
          <Col md={6} className="contact-details">
            <h5>Reach Us At</h5>
            <p>
              <strong>Email:</strong> contact@tailorsstudio.com
            </p>
            <p>
              <strong>Phone:</strong> +123-456-7890
            </p>
            <p>
              <strong>Address:</strong> 123 Tailor's Lane, Fashion City
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
