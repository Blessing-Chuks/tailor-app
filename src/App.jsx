import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CustomNavbar from "./components/CustomNavbar";
import Hero from "./components/Hero";
import Creative from "./components/Creative";
import Latest from "./components/Latest";
import Amazing from "./components/Amazing";
import Autority from "./components/Autority";
import Award from "./components/Award";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Testimonial from "./components/Testimonial";
import CustomTailoring from "./components/CustomTailoring";
import BridalOccasion from "./components/BridalOccasion";
import SpecialtyFabrics from "./components/SpecialtyFabrics";
import PriceAppointment from "./components/PriceAppointment";
import Portfolio from "./components/Portfolio";
import Blog from "./components/Blog";
import Alterations from "./components/Alterations";
import Repairs from "./components/Repairs";
import BlogDetails from "./components/BlogDetails";
import "./App.css";

function App() {
  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Router>
      <>
        <CustomNavbar onScrollToSection={handleScrollToSection} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Creative />
                <Latest />
                <Amazing />
                <Autority />
                <Award />
                <Contact />
                <Footer />
              </>
            }
          />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/testimonials" element={<Testimonial />} />
          <Route path="/custom-tailoring" element={<CustomTailoring />} />
          <Route path="/bridal-occasion" element={<BridalOccasion />} />
          <Route path="/specialty-fabrics" element={<SpecialtyFabrics />} />
          <Route path="/pricing" element={<PriceAppointment />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/alterations" element={<Alterations />} />
          <Route path="/repairs" element={<Repairs />} />
          <Route path="/blog-details" element={<BlogDetails />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
