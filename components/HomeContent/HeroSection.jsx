// "use client";

// import React from "react";
// import IceCreamAnimate from './IceCreamAnimate'

// export default function Hero() {
//   return (
//     <section className="container-fluid bg-light py-5">
//       <div className="row align-items-center">
//         <div className="col-lg-6 text-center text-lg-start px-5">
//           <h1 className="display-4 fw-bold">Delicious Ice Cream</h1>
//           <p className="lead mt-3">
//             Cool off with our handmade, creamy treats in every flavor imaginable.
//           </p>
//           <button className="btn btn-primary btn-lg mt-3">Order Now</button>
//         </div>
//         <div className="col-lg-6">
//           <IceCreamAnimate />
//         </div>
//       </div>
//     </section>
//   );
// }
import React from "react";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row align-items-center min-vh-75">

          {/* Left Content */}
          <div className="col-lg-6 col-md-7">
            <div className="hero-content">

              <span className="hero-badge">
                🍦 Fresh • Creamy • Delicious
              </span>

              <h1 className="hero-title">
                Happiness Served
                <span> One Scoop at a Time</span>
              </h1>

              <p className="hero-description">
                Discover deliciously creamy ice cream made with premium
                ingredients, irresistible flavors, and a whole lot of love.
              </p>

              <div className="hero-buttons">
                <a href="#flavors" className="hero-btn hero-btn-primary">
                  <i className="bi bi-ice-cream"></i>
                  Explore Flavors
                </a>

                <a href="#about" className="hero-btn hero-btn-secondary">
                  <i className="bi bi-heart"></i>
                  Our Story
                </a>
              </div>

              <div className="hero-info">
                <div>
                  <strong>20+</strong>
                  <span>Flavors</span>
                </div>

                <div className="hero-divider"></div>

                <div>
                  <strong>100%</strong>
                  <span>Fresh</span>
                </div>

                <div className="hero-divider"></div>

                <div>
                  <strong>5★</strong>
                  <span>Reviews</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Image */}
          <div className="col-lg-6 col-md-5">
            <div className="hero-image-wrapper">

              <div className="hero-circle"></div>

              <div className="hero-small-circle circle-one"></div>
              <div className="hero-small-circle circle-two"></div>

              <img
                src="/icecreamBowl.png"
                alt="Delicious Ice Cream"
                className="hero-image"
              />

              <div className="floating-card">
                <span className="floating-icon">🍨</span>
                <div>
                  <strong>Made Fresh</strong>
                  <small>Every single day</small>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;