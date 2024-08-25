import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [fix, setFix] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to handle the fixed header on scroll
  function fixed() {
    if (window.scrollY >= 10) {
      setFix(true);
    } else {
      setFix(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", fixed);
    return () => {
      window.removeEventListener("scroll", fixed);
    };
  }, []);

  // Function to toggle the hamburger menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <nav className={`header ${fix ? "fixed" : ""}`}>
        <div className="logo">
          <a href="/" className="logo">
            InfiniteHue Decor
          </a>
        </div>
        <div className={`nav-links ${menuOpen ? "menu-active" : ""}`}>
          <a href="/">Home</a>
          <a href="/gallery">Our Gallery</a>
          <Link to="/project">Our Projects</Link>
          <a href="/">Cost Calculator</a>
          <a href="/">Contact Us</a>
        </div>
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  );
}
