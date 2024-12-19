import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "../assets/css/footer.css";

const Footer = () => {
  return (
    <footer className="footer bg-light py-4">
      <Container>
        <Row className="text-center">
          <Col>
            <h5>Connect with us</h5>
            <div className="social-icons">
              <a
                href="https://www.instagram.com/geeroyal_official?igsh=MTY3NzVlNzJ5aTJ0Zg=="
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
              <a
                href="https://x.com/Vin_dzeal?t=FhCd0UwR0yscEgyI-c_44g&s=09"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
              <a
                href="https://www.linkedin.com/posts/olugu-uguru-onwuka-880a3757_a-fashion-designer-and-a-tailor-have-different-activity-7269037198497251329-bS2r?utm_source=share&utm_medium=member_android"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
            </div>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <p className="mb-0">
              &copy; {new Date().getFullYear()} Tailor's Studio. All Rights
              Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
