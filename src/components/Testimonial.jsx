import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../assets/css/testimonial.css"; // Add custom styles if needed

const Testimonial = () => {
  const testimonials = [
    {
      name: "John Doe",
      title: "Business Executive",
      feedback:
        "Tailor's Studio exceeded my expectations! The custom suit they designed for me was impeccable and perfectly fit my professional style.",
      image:
        "https://res.cloudinary.com/dnb6x004q/image/upload/v1733479932/Tailor-Design/tailor_3_mewkft.jpg",
    },
    {
      name: "Jane Smith",
      title: "Fashion Blogger",
      feedback:
        "The craftsmanship at Tailor's Studio is unmatched. They turned my vision into reality with their stunning bridal dress design.",
      image:
        "https://res.cloudinary.com/dnb6x004q/image/upload/v1733480358/Tailor-Design/tailor_5_j1uv6c.jpg",
    },
    {
      name: "Michael Johnson",
      title: "Photographer",
      feedback:
        "I’ve used their alteration services multiple times. They’re quick, professional, and the results are always flawless.",
      image:
        "https://res.cloudinary.com/dnb6x004q/image/upload/v1733480077/Tailor-Design/tailor_4_pv7dgg.webp",
    },
    {
      name: "Emily Carter",
      title: "Event Planner",
      feedback:
        "Tailor's Studio brought my ideas to life for my event. Their attention to detail and expertise in designing custom gowns ensured I looked stunning for my clients. Highly recommend their services for anyone looking for elegance and precision.",
      image:
        "https://res.cloudinary.com/dnb6x004q/image/upload/v1733481149/Tailor-Design/tailor_6_xfv09w.jpg",
    },
    {
      name: "David Reynolds",
      title: "CEO, Reynolds Corp",
      feedback:
        "I’ve been to several tailoring shops over the years, but none compare to Tailor's Studio. Their bespoke suits are a perfect fit, and the fabric quality is exceptional. Their professionalism and dedication are truly unparalleled.",
      image:
        "https://res.cloudinary.com/dnb6x004q/image/upload/v1733481796/Tailor-Design/tailor_9_n5o5sr.jpg",
    },
    {
      name: "Sophia Martinez",
      title: "Professional Dancer",
      feedback:
        "As a performer, my outfits need to be both functional and visually captivating. Tailor's Studio crafted a costume that not only fit perfectly but also made me stand out on stage. Their work exceeded all my expectations!",
      image:
        "https://res.cloudinary.com/dnb6x004q/image/upload/v1733482171/Tailor-Design/tailor_0_ny0e4v.webp",
    },
  ];

  return (
    <Container className="testimonial-section py-5">
      <h2 className="text-center mb-4">What Our Clients Say</h2>
      <Row>
        {testimonials.map((testimonial, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card className="testimonial-card shadow-sm">
              <Card.Img
                variant="top"
                src={testimonial.image}
                alt={`${testimonial.name}'s picture`}
                className="testimonial-image"
              />
              <Card.Body>
                <Card.Title>{testimonial.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {testimonial.title}
                </Card.Subtitle>
                <Card.Text>"{testimonial.feedback}"</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Testimonial;
