// "use client";

// import Link from 'next/link';

// export default function Header() {
//   return (

//       <nav className="navbar navbar-expand-lg navbar-dark Dheader">
//         <div className="container">
//           <Link href="/" className="navbar-brand logo-area">
//             <img src="/CreamyLogo.png" alt="" className='img-fluid' />
//           </Link>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarNav"
//             aria-controls="navbarNav"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon" />
//           </button>
//           {/* <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav ms-auto">
//             <li className="nav-item">
//               <Link href="/" className="nav-link active" aria-current="page">
//                 Home
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link href="#flavors" className="nav-link">
//                 Flavors
//               </Link>
//             </li>

//             <li className="nav-item">
//               <Link href="#about" className="nav-link">
//                 About
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link href="#flavors" className="nav-link">
//                 Carrers
//               </Link>
//             </li>
//           </ul>
//         </div> */}
//           {/* Navigation */}
//           <nav className="main-nav">
//             <a href="/" className="nav-link active">
//               Home
//             </a>

//             <a href="/flavors" className="nav-link">
//               Flavors
//             </a>

//             <a href="/about" className="nav-link">
//               About
//             </a>

//             <a href="/story" className="nav-link">
//               Our Story
//             </a>

//             <a href="/careers" className="nav-link">
//               Careers
//             </a>

//             <span className="nav-divider"></span>

//             <a href="/order" className="order-btn">
//               Order Now
//               <span className="cart-icon">🛒</span>
//             </a>
//           </nav>
//         </div>
//       </nav>


//   );
// }
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