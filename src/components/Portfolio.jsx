import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../assets/css/portfolio.css";

const Portfolio = () => {
  const portfolioItems = [
    {
      title: "Bespoke Suits",
      description: "Elegant and perfectly tailored suits for every occasion.",
      image:
        "https://res.cloudinary.com/dnb6x004q/image/upload/v1733489256/Tailor-Design/suit_1_mq8khb.jpg",
    },
    {
      title: "Bridal Gowns",
      description:
        "Handcrafted bridal gowns that make your special day unforgettable.",
      image:
        "https://res.cloudinary.com/dnb6x004q/image/upload/v1733489354/Tailor-Design/b_gown_bovhnv.jpg",
    },
    {
      title: "Alterations Mastery",
      description: "Expert alterations to ensure a flawless fit every time.",
      image:
        "https://res.cloudinary.com/dnb6x004q/image/upload/v1733490639/Tailor-Design/Suit-Alteration_jicdwv.png",
    },
    {
      title: "Specialty Fabrics",
      description: "Tailored pieces created with unique and delicate fabrics.",
      image:
        "https://res.cloudinary.com/dnb6x004q/image/upload/v1733490022/Tailor-Design/fa_4_xa3nju.jpg",
    },
    {
      title: "Custom Jackets",
      description: "Stylish jackets tailored for comfort and elegance.",
      image:
        "https://res.cloudinary.com/dnb6x004q/image/upload/v1733489481/Tailor-Design/jacket_x1cwzi.jpg",
    },
    {
      title: "Evening Wear",
      description: "Sophisticated evening attire tailored to perfection.",
      image:
        "https://res.cloudinary.com/dnb6x004q/image/upload/v1733489603/Tailor-Design/e_wear_soauwo.jpg",
    },
  ];

  return (
    <Container className="portfolio-section py-5">
      <h2 className="text-center mb-4">Our Portfolio</h2>
      <p className="text-center mb-5">
        Explore some of our finest tailoring projects, showcasing our expertise
        in creating bespoke garments and custom designs tailored to perfection.
      </p>
      <Row>
        {portfolioItems.map((item, index) => (
          <Col md={4} className="mb-4" key={index}>
            <Card className="h-100 portfolio-card">
              <Card.Img variant="top" src={item.image} alt={item.title} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Portfolio;
