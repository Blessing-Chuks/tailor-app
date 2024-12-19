import React from "react";
import "../assets/css/autority.css";
const Autority = () => {
  return (
    <section className="chef-section">
      <div className="hero-content">
        <h1>
          Build authority, gain exposure <br /> and connect with your audience
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />{" "}
          Suspendisse varius enim in eros elementum tristique. Duis <br />{" "}
          cursus, mi quis viverra ornare.
        </p>
        <img
          src={
            "https://res.cloudinary.com/dnb6x004q/image/upload/v1732758018/Tailor-Design/icon_1_wrhonv.png"
          }
          alt=""
        />
        {/* <button className="hero-button">
          <span>Play</span>
        </button> */}
      </div>
    </section>
  );
};

export default Autority;
