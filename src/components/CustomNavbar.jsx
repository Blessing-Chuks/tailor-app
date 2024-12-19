import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../assets/css/CustomNavbar.css";

const CustomNavbar = ({ onScrollToSection }) => {
  return (
    <Navbar bg="light" expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="navbar-brand">
          Tailor's Studio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link
              as={NavLink}
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-link active-link" : "nav-link"
              }
              end
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/about-us"
              className={({ isActive }) =>
                isActive ? "nav-link active-link" : "nav-link"
              }
            >
              About Us
            </Nav.Link>
            <NavDropdown title="Services" id="services-dropdown">
              <NavDropdown.Item
                as={NavLink}
                to="/custom-tailoring"
                className={({ isActive }) =>
                  isActive ? "dropdown-item active-link" : "dropdown-item"
                }
              >
                Custom Tailoring
              </NavDropdown.Item>
              <NavDropdown.Item
                as={NavLink}
                to="/alterations"
                className={({ isActive }) =>
                  isActive ? "dropdown-item active-link" : "dropdown-item"
                }
              >
                Alterations
              </NavDropdown.Item>
              <NavDropdown.Item
                as={NavLink}
                to="/repairs"
                className={({ isActive }) =>
                  isActive ? "dropdown-item active-link" : "dropdown-item"
                }
              >
                Repairs & Restoration
              </NavDropdown.Item>
              <NavDropdown.Item
                as={NavLink}
                to="/bridal-occasion"
                className={({ isActive }) =>
                  isActive ? "dropdown-item active-link" : "dropdown-item"
                }
              >
                Bridal & Special Occasions
              </NavDropdown.Item>
              <NavDropdown.Item
                as={NavLink}
                to="/specialty-fabrics"
                className={({ isActive }) =>
                  isActive ? "dropdown-item active-link" : "dropdown-item"
                }
              >
                Leather & Specialty Fabrics
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link
              as={NavLink}
              to="/portfolio"
              className={({ isActive }) =>
                isActive ? "nav-link active-link" : "nav-link"
              }
            >
              Portfolio
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/pricing"
              className={({ isActive }) =>
                isActive ? "nav-link active-link" : "nav-link"
              }
            >
              Pricing/Book Appointment
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/testimonials"
              className={({ isActive }) =>
                isActive ? "nav-link active-link" : "nav-link"
              }
            >
              Testimonials
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/blog"
              className={({ isActive }) =>
                isActive ? "nav-link active-link" : "nav-link"
              }
            >
              Blog
            </Nav.Link>
            <Nav.Link
              onClick={(e) => {
                e.preventDefault();
                onScrollToSection("contact-section");
              }}
              style={{ cursor: "pointer" }}
            >
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
