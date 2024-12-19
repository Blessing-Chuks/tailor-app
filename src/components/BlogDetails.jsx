import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import "../assets/css/blogdetails.css";

const BlogDetails = () => {
  const location = useLocation();
  const { title, content } = location.state || {
    title: "The Art of Custom Tailoring",
    content: `
      Custom tailoring is a timeless craft that blends artistry, precision, and innovation to create garments uniquely tailored to the individual. It transcends the boundaries of traditional clothing design, offering a personalized experience where each detail reflects the wearer’s personality, lifestyle, and aspirations. At its heart, custom tailoring is a celebration of individuality and craftsmanship.

      The process of custom tailoring begins with understanding the client’s vision. It’s a collaboration between the tailor and the client, where the tailor listens carefully to preferences and translates them into a design blueprint. This stage often includes discussions about the occasion, desired style, and functional requirements of the garment. Measurements are meticulously taken to ensure every aspect of the piece complements the client’s physique.

      Fabric selection is one of the most crucial aspects of custom tailoring. Tailors work with an array of luxurious textiles, from rich silks and soft cashmeres to structured wools and delicate lace. The choice of fabric not only dictates the garment's appearance but also its feel, drape, and durability. A skilled tailor advises clients on the best materials for their design, balancing aesthetics with practicality.

      Once the design and materials are finalized, the tailoring process truly begins. This stage involves cutting the fabric with precision, sewing individual panels, and shaping the garment to achieve a flawless fit. Traditional hand-stitching techniques, honed through generations, are often combined with modern tools to ensure accuracy and refinement. Every detail, from the alignment of patterns to the placement of buttons, reflects the tailor’s commitment to perfection.

      Custom tailoring offers numerous benefits beyond aesthetics. One of its most significant advantages is sustainability. Unlike mass-produced garments, bespoke pieces are made with intention, minimizing waste and emphasizing quality over quantity. These garments are designed to last, reducing the environmental impact of disposable fashion.

      Moreover, custom tailoring empowers clients to express their individuality. Whether it’s a sleek business suit, a flowing evening gown, or a stylish casual jacket, every piece becomes a reflection of the wearer’s personal brand. The confidence that comes from wearing a garment made exclusively for you is unparalleled. It fits like a second skin, enhancing not only appearance but also self-assurance.

      Custom tailoring also has a rich history, deeply rooted in cultural and social traditions. It has been an essential part of royal courts, high society, and everyday life for centuries. Today, it continues to evolve, embracing modern trends while preserving the authenticity of the craft. Tailors now integrate contemporary design elements and innovative techniques, ensuring their creations remain relevant in a fast-changing fashion landscape.

      In a world increasingly dominated by fast fashion, custom tailoring serves as a reminder of the value of craftsmanship and attention to detail. It’s about more than clothing; it’s about creating pieces that tell a story, celebrate individuality, and stand the test of time.

      Ultimately, the art of custom tailoring is a testament to human ingenuity and creativity. It transforms fabric into fashion, vision into reality, and moments into memories. For those who seek elegance, sustainability, and exclusivity, custom tailoring offers an experience unlike any other—a harmonious blend of art and function.
    `,
  };

  return (
    <Container className="blog-details-section py-5">
      <Row>
        <Col md={10} className="mx-auto">
          <h2 className="text-center mb-4">{title}</h2>
          <p className="lead">{content}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default BlogDetails;
