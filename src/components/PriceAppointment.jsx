import React from "react";
import { Container, Row, Col, Table, Button, Form } from "react-bootstrap";
import "../assets/css/priceappointment.css";

const PriceAppointment = () => {
  return (
    <Container className="price-appointment-section py-5">
      <h2 className="text-center mb-4">Pricing & Book an Appointment</h2>

      {/* Pricing Table */}
      <Row className="mb-5">
        <Col>
          <h3 className="text-center">Our Pricing</h3>
          <Table striped bordered hover className="mt-3">
            <thead>
              <tr>
                <th>Service</th>
                <th>Price Range</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Custom Tailoring</td>
                <td>$100 - $500</td>
              </tr>
              <tr>
                <td>Alterations</td>
                <td>$20 - $100</td>
              </tr>
              <tr>
                <td>Bridal & Special Occasion</td>
                <td>$200 - $1,500</td>
              </tr>
              <tr>
                <td>Leather & Specialty Fabrics</td>
                <td>$150 - $800</td>
              </tr>
              <tr>
                <td>Repairs & Restoration</td>
                <td>$30 - $200</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>

      {/* Booking Form */}
      <Row>
        <Col md={6} className="mx-auto">
          <h3 className="text-center">Book an Appointment</h3>
          <Form className="mt-4">
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formService">
              <Form.Label>Select Service</Form.Label>
              <Form.Select>
                <option>Custom Tailoring</option>
                <option>Alterations</option>
                <option>Bridal & Special Occasion</option>
                <option>Leather & Specialty Fabrics</option>
                <option>Repairs & Restoration</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formDate">
              <Form.Label>Preferred Date</Form.Label>
              <Form.Control type="date" required />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100">
              Book Appointment
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default PriceAppointment;
