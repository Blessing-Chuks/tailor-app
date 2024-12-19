import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../assets/css/blog.css";

const Blog = () => {
  const navigate = useNavigate();

  const blogPosts = [
    {
      title: "The Art of Custom Tailoring",
      summary:
        "Discover how custom tailoring transforms garments into timeless piece of art.",
      content:
        "Custom tailoring combines precision and artistry to craft garments that perfectly fit your body and personality. Custom tailoring is a timeless craft that blends artistry, precision, and innovation to create garments uniquely tailored to the individual. It transcends the boundaries of traditional clothing design, offering a personalized experience where each detail reflects the wearer’s personality, lifestyle, and aspirations. At its heart, custom tailoring is a celebration of individuality and craftsmanship.The process of custom tailoring begins with understanding the client’s vision. It’s a collaboration between the tailor and the client, where the tailor listens carefully to preferences and translates them into a design blueprint. This stage often includes discussions about the occasion, desired style, and functional requirements of the garment. Measurements are meticulously taken to ensure every aspect of the piece complements the client’s physique. Our expertise ensures every detail aligns with your vision.",
      image:
        "https://res.cloudinary.com/dnb6x004q/image/upload/v1733491515/Tailor-Design/art_d4jeox.jpg",
    },
    {
      title: "Caring For Your Tailored Garments",
      summary:
        "Create unforgettable memories with a  handcrafted wedding gown.",
      content:
        "Your wedding gown should be as unique as your love story. Tailored garments are an investment in style and craftsmanship, deserving proper care to maintain their beauty and longevity. Always follow the fabric’s care instructions, opting for professional dry cleaning when required. Store suits, dresses, and coats on high-quality hangers to preserve their shape and avoid overcrowding your wardrobe. Protect garments from dust and moths using breathable garment bags. Spot clean spills promptly with a gentle touch to prevent staining. Rotate your wardrobe to give items time to rest, and use a fabric brush to remove lint and dirt. With thoughtful care, your tailored pieces will remain timeless and elegant. Explore our process for designing and tailoring the perfect bridal outfit for your special day.",
      image:
        "https://res.cloudinary.com/dnb6x004q/image/upload/v1733491842/Tailor-Design/caring_w4ydnr.webp",
    },
    {
      title: "Choosing the perfect fabric",
      summary: "Learn how to select fabrics that suits ur style and needs.",
      content:
        "Selecting the right fabric is a crucial step in creating a tailored garment that exudes style, comfort, and durability. Begin by considering the occasion—lightweight cotton or linen suits casual settings, while luxurious silk, wool, or velvet complements formal events. Evaluate the fabric’s texture, breathability, and how it drapes on your body. Opt for natural fibers for comfort and longevity, and ensure the color or pattern aligns with your personal style. Discuss your options with a knowledgeable tailor who can guide you based on your design vision. The perfect fabric elevates your outfit, blending functionality with elegance effortlessly, Consider the garment's purpose—light fabrics like cotton or linen suit warm weather, while wool or cashmere offer warmth for cooler seasons. Pay attention to the fabric's texture and how it feels against your skin, as comfort is essential. Assess its drape and structure to ensure it complements your body shape and the garment’s design. Don't overlook durability—high-quality fabrics maintain their appearance over time. Collaborate with your tailor to match fabric characteristics with your vision, ensuring a result that is both stylish and enduring..",
      image:
        "https://res.cloudinary.com/dnb6x004q/image/upload/v1733491731/Tailor-Design/fa4_cudsnn.webp",
    },
    {
      title: "Bridal Tailoring: Making Dreams Come True",
      summary: "How our tailoring services bring your wedding vision to life.",
      content:
        "From silk to leather, our tailors are skilled in working with a variety of specialty fabrics, ensuring every piece is handled with Bridal tailoring is an art form that transforms a bride’s vision into a reality, creating the perfect gown for one of the most important days of her life. Every bride has a unique dream, and custom tailoring ensures her dress captures her personality, style, and the essence of her special day. From the first consultation to the final fitting, bridal tailoring is a collaborative journey, focusing on every detail, from fabric selection to intricate embroidery,Tailors specializing in bridal attire bring expertise, precision, and creativity to the table, ensuring that each gown fits flawlessly and enhances the bride’s natural beauty. Whether it’s a timeless A-line design, an elegant mermaid silhouette, or a flowing ball gown, every gown is tailored to perfection, reflecting both elegance and tradition.Bridal tailoring isn’t just about creating a beautiful dress; it’s about crafting a meaningful experience. Every stitch, seam, and embellishment is made with care, symbolizing the joy, emotion, and memories of the wedding day. Custom-tailored bridal gowns offer the perfect fit, allowing brides to feel confident, comfortable, and radiant as they walk down the aisle.Bridal tailoring truly makes dreams come true, turning every bride’s vision into a breathtaking reality.  lace patterns, and silhouette design.",
      image:
        "https://res.cloudinary.com/dnb6x004q/image/upload/v1733492139/Tailor-Design/love_x09rwc.webp",
    },
    {
      title: "Sustainable Fashion: Tailoring with a Purpose",
      summary:
        "Sustainability is shaping the future of fashion, and custom tailoring leads the way by promoting slow, intentional design.",
      content:
        "Sustainability is shaping the future of fashion, and custom tailoring leads the way by promoting slow, intentional design. Unlike fast fashion, tailored garments are made to last, emphasizing quality craftsmanship over quantity. Choosing sustainable fabrics, such as organic cotton, recycled materials, or ethically sourced wool, ensures your wardrobe remains environmentally conscious without compromising style. Custom tailoring allows for minimal waste, as garments are created with purpose and fit. Additionally, altering or repurposing fabrics reduces landfill waste, encouraging a circular fashion economy.By choosing custom tailoring and focusing on sustainable choices, you invest in timeless, well-made garments while contributing to a greener planet. Sustainability and style go hand in hand in creating wardrobe staples that last for years.",
      image:
        "https://res.cloudinary.com/dnb6x004q/image/upload/v1733705478/Tailor-Design/Zinkata-Store_lfepp7.jpg",
    },
    {
      title:
        "The Benefits of Versatile Tailoring: Transitioning from Day to Night",
      summary:
        "One of the main advantages of custom tailoring is creating versatile pieces that seamlessly transition from daytime to evening wear.",
      content:
        "One of the main advantages of custom tailoring is creating versatile pieces that seamlessly transition from daytime to evening wear. A well-tailored suit, dress, or jacket can adapt to various settings by pairing it with the right accessories. For instance, a simple blazer can pair with tailored trousers for a professional meeting during the day and shift into a chic dress style by adding elegant heels or jewelry for evening events.Tailors can help design multi-functional wardrobe pieces that maximize your investment while ensuring you look polished and stylish. Versatile tailoring allows for functional, smart choices, creating timeless clothing for every moment in your busy lifestyle.Let me know if you need further adjustments!",
      image:
        "https://res.cloudinary.com/dnb6x004q/image/upload/v1733705481/Tailor-Design/daytonight_zgi1la.webp",
    },
  ];

  const handleReadMore = (title, content) => {
    navigate("/blog-details", { state: { title, content } });
  };

  return (
    <Container className="blog-section py-5">
      <h2 className="text-center mb-4">Our Blog</h2>
      <Row>
        {blogPosts.map((post, index) => (
          <Col md={4} className="mb-4" key={index}>
            <Card className="h-100">
              <Card.Img variant="top" src={post.image} />
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.summary}</Card.Text>
                <Button
                  variant="primary"
                  onClick={() => handleReadMore(post.title, post.content)}
                >
                  Read More
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Blog;
