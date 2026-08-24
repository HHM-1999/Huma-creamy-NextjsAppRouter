import React from "react";


const features = [
  {
    icon: "🌿",
    title: "Natural Ingredients",
    description: "Made with real fruits, milk & nuts.",
  },
  {
    icon: "🍦",
    title: "Fresh Daily",
    description: "Prepared in small batches every single day.",
  },
  {
    icon: "♡",
    title: "Made with Love",
    description: "Every scoop is crafted with care & passion.",
  },
  {
    icon: "☺",
    title: "Happiness Guaranteed",
    description: "Because your smile is our sweetest reward.",
  },
];

const AboutUs = () => {
  return (
    <section className="about-section" id="about">

      {/* Decorative elements */}
      <div className="about-circle-top"></div>

      <div className="about-dots"></div>

      <div className="about-stripes">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="about-splash splash-left"></div>
      <div className="about-splash splash-right"></div>

      {/* Main container */}
      <div className="about-container">

        {/* =========================
            MAIN ABOUT CONTENT
        ========================== */}

        <div className="about-main">

          {/* LEFT CONTENT */}
          <div className="about-content">

            <div className="about-label">
              <span className="label-dot"></span>
              Our Story
            </div>

            <h2 className="about-title">
              About <span>Us</span>
            </h2>

            <div className="about-decoration">
              <span></span>
              <span>🍦</span>
            </div>

            <h3>
              Crafted with Passion, Served with Happiness
            </h3>

            <p>
              At Huma’s Creamy, we believe ice cream is more than just a
              dessert—it’s a feeling. Founded with a love for rich flavors,
              real ingredients, and joyful moments, we create every scoop to
              bring smiles to your day.
            </p>

            <p>
              From classic favorites to exciting new creations, our ice
              creams are made fresh daily with the finest ingredients and a
              whole lot of love.
            </p>

            <a href="/about" className="about-button">
              <span>Learn More About Us</span>
              <span className="about-arrow">→</span>
            </a>

          </div>

          {/* RIGHT IMAGE */}
          <div className="about-image-area">

            <div className="about-image-circle"></div>

            <div className="about-image-wrapper">
              <img
                src="/brandimg.png"
                alt="Huma's Creamy ice cream"
                className="img-fluid"
              />
            </div>

            <div className="about-orange-dot dot-one"></div>
            <div className="about-orange-dot dot-two"></div>

            {/* <div className="about-strawberry">🍓</div> */}

          </div>

        </div>

        {/* =========================
            FEATURES
        ========================== */}

        <div className="about-features">

          {features.map((feature, index) => (
            <React.Fragment key={feature.title}>

              <div className="about-feature">

                <div className="feature-round-icon">
                  {feature.icon}
                </div>

                <h4>{feature.title}</h4>

                <p>{feature.description}</p>

              </div>

              {index !== features.length - 1 && (
                <div className="feature-divider"></div>
              )}

            </React.Fragment>
          ))}

        </div>

      </div>

    </section>
  );
};

export default AboutUs;