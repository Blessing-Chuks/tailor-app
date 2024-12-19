import React from "react";
import "../assets/css/award.css";
const awardsData = [
  { title: "Websites Of The Year 2020", studio: "Lewis Studio", link: "#" },
  { title: "Websites Of The Year 2020", studio: "Lewis Studio", link: "#" },
  { title: "Websites Of The Year 2020", studio: "Lewis Studio", link: "#" },
  { title: "Websites Of The Year 2020", studio: "Lewis Studio", link: "#" },
];

const Award = () => {
  return (
    <section className="awards-section">
      <h2>Our Awards</h2>
      <div className="awards-container">
        {awardsData.map((award, index) => (
          <div className="award-item" key={index}>
            <div className="award-text">
              <h3>{award.title}</h3>
              <p>{award.studio}</p>
            </div>
            <div className="award-link">
              <img
                src={
                  "https://res.cloudinary.com/dnb6x004q/image/upload/v1727441176/Tailor-Design/image_110_gb9k9q.png"
                }
                alt=""
              />
              <p>See Project</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Award;
