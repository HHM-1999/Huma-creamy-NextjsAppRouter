import React from "react";

const products = [
  {
    name: "Chocolate Fudge Brownie",
    description: "Rich chocolate ice cream with fudge brownie chunks.",
    image: "/chocolate-fudge-brownie.png",
    rating: "5",
    reviews: "128",
    price: "€4.50",
  },
  {
    name: "Strawberry Delight",
    description: "Creamy strawberry ice cream with real strawberry bits.",
    image: "/strawberry-delight.png",
    rating: "5",
    reviews: "96",
    price: "€4.20",
  },
  {
    name: "Mango Mania",
    description: "Tropical mango ice cream full of real mango goodness.",
    image: "/mango-mania.png",
    rating: "5",
    reviews: "110",
    price: "€4.30",
  },
  {
    name: "Cookies & Cream",
    description: "Classic vanilla ice cream with crunchy cookies.",
    image: "/cookies-cream.png",
    rating: "5",
    reviews: "88",
    price: "€4.10",
  },
];

const BestSellers = () => {
  return (
    <section className="best-sellers-section">

      {/* Decorative background */}
      <div className="best-sellers-dots"></div>
      <div className="best-sellers-circle"></div>
      <div className="best-sellers-stripes"></div>

      <div className="best-sellers-container">

        {/* ========================= HEADING ========================== */}

        <div className="best-sellers-heading">
          <div className="best-sellers-label">
            <span></span>
            Best Sellers
          </div>
          <h2>
            Our <span>Best Sellers</span>
          </h2>
          <div className="heading-line">
            <span></span>
            <b>🍦</b>
            <span></span>
          </div>
          <p>
            Most loved flavors by our happy customers.
          </p>
        </div>

        {/* ========================= PRODUCT CARDS ========================== */}
        <div className="products-grid">
          {products.map((product) => (
            <div className="product-card" key={product.name}>
              <button
                className="product-favorite"
                aria-label={`Favorite ${product.name}`}
              >
                ♡
              </button>
              <div className="product-image-wrapper">
                <img
                  src={product.image}
                  alt={product.name}
                />
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <div className="product-rating">
                  <span className="stars">★★★★★</span>
                  <span className="review-count">
                    ({product.reviews})
                  </span>
                </div>
                <div className="product-bottom">
                  <strong>{product.price}</strong>
                  <button className="add-cart-btn">
                    <span>🛒</span>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* =========================
            VIEW ALL
        ========================== */}
        <div className="view-all-wrapper">
          <a href="/flavors" className="view-all-btn">
            View All Flavors
            <span>→</span>
          </a>
        </div>
        {/* =========================
            REWARD BANNER
        ========================== */}
        <div className="reward-banner">
          <div className="reward-content">
            <div className="reward-icon">
              🎁
            </div>
            <div className="reward-text">
              <span className="reward-small">
                Sweet Rewards
              </span>
              <h3>
                Join Our Creamy Club!
              </h3>
              <p>
                Earn points with every order and get
                exciting rewards & discounts.
              </p>
              <a href="/rewards" className="join-btn">
                Join Now
                <span>→</span>
              </a>
            </div>
          </div>

          <div className="reward-badge">
            <span>Earn Up To</span>
            <strong>25%</strong>
            <small>Rewards</small>
          </div>

          <div className="reward-image">
            <img src="/icecreamBowl.png" alt="Huma's Creamy ice cream"/>
          </div>
        </div>
      </div>
    </section>
  );
};
export default BestSellers;