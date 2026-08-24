import React from "react";


const Contact = () => {
    return (
        <section className="sweet-news-section">
            {/* ========================= HEADING ========================== */}
            <div className="best-sellers-heading">
                <div className="best-sellers-label">
                    <span></span>
                    Contact Us
                </div>
                <h2>Contact <span>Us</span></h2>
                <div className="heading-line">
                    <span></span>
                    <b>🍦</b>
                    <span></span>
                </div>
                <p> We’d love to hear from you — let’s make your day a little sweeter. </p>
            </div>
            <div className="sweet-news-container">
                {/* Left Content */}
                <div className="sweet-news-content">
                    <div className="sweet-news-label">
                        <span></span>
                        Newsletter
                    </div>

                    <h2>
                        Stay Updated with
                        <br />
                        <span>Sweet News!</span>
                    </h2>

                    <p>
                        Subscribe to our newsletter and get the latest updates,
                        new flavors, special offers and more.
                    </p>

                    <form className="sweet-news-form">
                        <div className="sweet-email-box">
                            <span className="email-icon">✉</span>

                            <input
                                type="email"
                                placeholder="Enter your email address"
                                required
                            />
                        </div>

                        <button type="submit">
                            Subscribe Now
                            <span>➤</span>
                        </button>
                    </form>

                    <div className="sweet-privacy">
                        <span>♢</span>
                        We respect your privacy. Unsubscribe anytime.
                    </div>

                </div>

                {/* Right Image */}
                <div className="sweet-news-image">

                    <div className="sweet-image-circle"></div>

                    <img
                        src="/icecreamBowl.png"
                        alt="Huma's Creamy ice cream"
                    />

                    <div className="sweet-orange-dot dot-one"></div>
                    <div className="sweet-orange-dot dot-two"></div>

                    <div className="sweet-strawberry">🍓</div>

                </div>

                {/* Decorative elements */}
                <div className="sweet-dots"></div>

                <div className="sweet-decoration">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

            </div>
        </section>
    );
};

export default Contact;