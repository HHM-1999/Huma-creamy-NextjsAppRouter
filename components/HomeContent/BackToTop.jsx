"use client"
import React, { useEffect, useState } from "react";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`back-to-top ${visible ? "show" : ""}`}
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      <span className="back-to-top-scoop">🍦</span>

      <span className="back-to-top-arrow">
       <img src="/backtotop.png" alt="Back to top"  title="back to top"/>
      </span>

      <span className="back-to-top-ripple"></span>
    </button>
  );
};

export default BackToTop;