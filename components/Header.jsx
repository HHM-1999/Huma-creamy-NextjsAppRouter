"use client";

import Link from 'next/link';

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark Dheader">
      <div className="container">
        <Link href="/" className="navbar-brand logo-area">
          <img src="/CreamyLogo.png" alt="" className='img-fluid' />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        {/* <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link href="/" className="nav-link active" aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#flavors" className="nav-link">
                Flavors
              </Link>
            </li>

            <li className="nav-item">
              <Link href="#about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#flavors" className="nav-link">
                Carrers
              </Link>
            </li>
          </ul>
        </div> */}
                {/* Navigation */}
                <nav className="main-nav">
          <a href="/" className="nav-link active">
            Home
          </a>

          <a href="/flavors" className="nav-link">
            Flavors
          </a>

          <a href="/about" className="nav-link">
            About
          </a>

          <a href="/story" className="nav-link">
            Our Story
          </a>

          <a href="/careers" className="nav-link">
            Careers
          </a>

          <span className="nav-divider"></span>

          <a href="/order" className="order-btn">
            Order Now
            <span className="cart-icon">🛒</span>
          </a>
        </nav>
      </div>
    </nav>
  );
}
