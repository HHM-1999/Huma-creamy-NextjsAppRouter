"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <nav className="navbar navbar-dark Dheader">
        <div className="container header-container">

          {/* Logo */}
          <Link
            href="/"
            className="navbar-brand logo-area"
            onClick={closeMenu}
          >
            <img
              src="/CreamyLogo.png"
              alt="Creamy"
              className="img-fluid"
            />
          </Link>

          {/* Mobile Menu Button */}
          <button
            className={`mobile-menu-btn ${menuOpen ? "open" : ""}`}
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* Navigation */}
          <div className={`main-nav ${menuOpen ? "menu-open" : ""}`}>

            <Link
              href="/"
              className="nav-link active"
              onClick={closeMenu}
            >
              Home
            </Link>

            <Link
              href="/flavors"
              className="nav-link"
              onClick={closeMenu}
            >
              Flavors
            </Link>

            <Link
              href="/about"
              className="nav-link"
              onClick={closeMenu}
            >
              About
            </Link>

            <Link
              href="/story"
              className="nav-link"
              onClick={closeMenu}
            >
              Our Story
            </Link>

            <Link
              href="/careers"
              className="nav-link"
              onClick={closeMenu}
            >
              Careers
            </Link>

            <span className="nav-divider"></span>

            <Link
              href="/order"
              className="order-btn"
              onClick={closeMenu}
            >
              Order Now
              <span className="cart-icon">🛒</span>
            </Link>

          </div>
        </div>
      </nav>
    </header>
  );
}