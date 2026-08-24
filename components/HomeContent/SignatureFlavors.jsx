import React from "react";

const flavors = [
  {
    name: "Belgian Chocolate",
    description: "Rich, creamy, and indulgently chocolatey.",
    image: "/chocolate.png",
  },
  {
    name: "Strawberry Bliss",
    description: "A fruity burst of real strawberry goodness.",
    image: "/strawberry.png",
  },
  {
    name: "Classic Vanilla",
    description: "Timeless flavor made with pure vanilla.",
    image: "/vanilla.png",
  },
  {
    name: "Mango Delight",
    description: "Tropical, juicy, and absolutely refreshing.",
    image: "/mango.png",
  },
];

const features = [
  {
    icon: "🍦",
    title: "Premium Ingredients",
    description: "We use only the finest and freshest ingredients.",
  },
  {
    icon: "🌿",
    title: "Made Fresh Daily",
    description: "Every batch is made fresh to ensure best quality.",
  },
  {
    icon: "♡",
    title: "Made with Love",
    description: "Crafted with passion and care in every scoop.",
  },
  {
    icon: "☺",
    title: "Loved by All",
    description: "Delighting ice cream lovers of all ages.",
  },
];

const SignatureFlavors = () => {
  return (
    <section className="signature-section">

      {/* Decorative top curve */}
      <div className="signature-top-curve"></div>

      <div className="signature-container">

        {/* =========================
            SECTION HEADING
        ========================== */}

        <div className="signature-heading">
          <div className="heading-decoration">
            <span></span>
            <span className="heading-icon">🍦</span>
            <span></span>
          </div>

          <h2>Our Signature Flavors</h2>

          <p>
            Handcrafted with love, made for moments that matter.
          </p>
        </div>

        {/* =========================
            CONTENT
        ========================== */}

        <div className="signature-content">

          {/* Flavors */}
          <div className="flavors-area">

            <div className="flavors-grid">

              {flavors.map((flavor, index) => (
                <div className="flavor-card" key={index}>

                  <div className="flavor-image-wrapper">
                    <img
                      src={flavor.image}
                      alt={flavor.name}
                      className="flavor-image"
                    />
                  </div>

                  <div className="flavor-info">
                    <h3>{flavor.name}</h3>

                    <p>{flavor.description}</p>
                  </div>

                  <button
                    className="favorite-btn"
                    aria-label={`Add ${flavor.name} to favorites`}
                  >
                    ♡
                  </button>

                </div>
              ))}

            </div>

            <div className="view-flavors-wrapper">
              <a href="/flavors" className="view-flavors-btn">
                <span>View All Flavors</span>
                <span className="arrow">›</span>
              </a>
            </div>

          </div>

          {/* =========================
              WHY CHOOSE US
          ========================== */}

          <aside className="why-us">

            <h2>Why Choose Us?</h2>

            <div className="why-divider"></div>

            {features.map((feature, index) => (
              <div className="feature-item" key={index}>

                <div className="feature-icon">
                  {feature.icon}
                </div>

                <div className="feature-content">
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </div>

              </div>
            ))}

          </aside>

        </div>

        {/* =========================
            CTA BANNER
        ========================== */}

        <div className="icecream-cta">

          <div className="cta-decoration cta-left">
            <div className="cta-icecream">
              <div className="cta-scoop pink"></div>
              <div className="cta-cone"></div>
            </div>
          </div>

          <div className="cta-text">
            <h2>Life is short, eat more ice cream!</h2>

            <p>
              Treat yourself or someone special today.
            </p>
          </div>

          <a href="/order" className="cta-order-btn">
            Order Now
            <span>🛒</span>
          </a>

          <div className="cta-decoration cta-right">
            <div className="cta-icecream">
              <div className="cta-scoop chocolate"></div>
              <div className="cta-cone"></div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default SignatureFlavors;