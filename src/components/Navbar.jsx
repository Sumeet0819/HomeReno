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
          OmLuxe-Brush
          </a>
        </div>
        <div className={`nav-links ${menuOpen ? "menu-active" : ""}`}>
          <a href="/">Home</a>
          <Link to="/gallery">Our Gallery</Link>
          <Link to="/project">Our Projects</Link>
          <Link to="/contact-us">Contact Us</Link>
        </div>
        <button className="button-3">Request Estimate</button>
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
