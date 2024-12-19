import React from "react";
import "../assets/css/amazing.css";

const Amazing = () => {
  return (
    <section className="create-amazing-website">
      <div className="content">
        <h2 className="hedi">
          <span className="highlight">
            Create an amazing <br /> website
          </span>
          that your <br /> visitors will love <br />
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
          Suspendisse varius enim in eros <br /> elementum tristique. Duis
          cursus, mi quis viverra <br />
          ornare, eros dolor interdum nulla, ut commodo <br /> diam libero vitae
          erat.
        </p>
      </div>
      <div className="image-container">
        <img
          src={
            "https://res.cloudinary.com/dnb6x004q/image/upload/v1727341633/Tailor-Design/Rectangle_4000_1_jeqho7.png"
          }
          alt="People working on a laptop"
        />
      </div>
    </section>
  );
};

export default Amazing;
