
const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row">

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