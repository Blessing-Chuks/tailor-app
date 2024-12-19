import React from "react";
import "../assets/css/latest.css";

const Latest = () => {
  return (
    <section className="latest-works">
      {/* Title Section */}
      <div className="title-section">
        <h2 className="title">
          <span className="highlight">Latest</span> Works
        </h2>
        <p className="description">
          At pulvinar egestas ornare ac hendrerit ante <br /> orci sit nisl
          ultrices enim pellentesque <br /> tristique donec et amet nunc Quis.
        </p>
      </div>

      {/* Images Section */}
      <div className="works-grid">
        <div className="work-item">
          <img
            src={
              "https://res.cloudinary.com/dnb6x004q/image/upload/v1727339241/Tailor-Design/Rectangle_3997_1_cairhx.png"
            }
            alt="Landing Page 1"
          />
          <p>(01) Landing page</p>
        </div>
        <div className="work-item">
          <img
            src={
              "https://res.cloudinary.com/dnb6x004q/image/upload/v1727339241/Tailor-Design/Rectangle_3998_1_y2yzc0.png"
            }
            alt="Landing Page 2"
          />
          <p>(02) Landing page</p>
        </div>
        <div className="work-item">
          <img
            src={
              "https://res.cloudinary.com/dnb6x004q/image/upload/v1727339260/Tailor-Design/Rectangle_3999_1_xomsv0.png"
            }
            alt="Landing Page 3"
          />
          <p>(03) Landing page</p>
        </div>
      </div>
    </section>
  );
};

export default Latest;

// import React from "react";
// import "../assets/css/latest.css";
// const Latest = () => {
//   return (
//     <section className="latest-works">
//       {/* Title Section */}
//       <div className="title-section">
//         <h2 className="title">
//           <span className="highlight">Latest</span>Works
//         </h2>
//         <p className="description">
//           At pulvinar egestas ornare ac hendrerit ante <br /> orci sit nisl ultrices
//           enim pellentesque <br /> tristique donec et amet nunc Quis.
//         </p>
//       </div>

//       {/* Images Section */}
//       <div className="works-grid">
//         <div className="work-item">
//           <img
//             src={
//               "https://res.cloudinary.com/dnb6x004q/image/upload/v1727339241/Tailor-Design/Rectangle_3997_1_cairhx.png"
//             }
//             alt="Landing Page 1"
//           />
//           <p>(01) Landing page</p>
//         </div>
//         <div className="work-item">
//           <img
//             src={
//               "https://res.cloudinary.com/dnb6x004q/image/upload/v1727339241/Tailor-Design/Rectangle_3998_1_y2yzc0.png"
//             }
//             alt="Landing Page 2"
//           />
//           <p>(02) Landing page</p>
//         </div>
//         <div className="work-item">
//           <img
//             src={
//               "https://res.cloudinary.com/dnb6x004q/image/upload/v1727339260/Tailor-Design/Rectangle_3999_1_xomsv0.png"
//             }
//             alt="Landing Page 3"
//           />
//           <p>(03) Landing page</p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Latest;
