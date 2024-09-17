import React from "react";
import "./About.css";
export default function AboutUs() {
  return (
    <>
      <footer>
        <div className="footer-container">
          <div className="sec aboutus">
            <h2>About Us</h2>
            <p style={{ color: "#fff" }}>
              OmLuxe-Brush: Breathing new life into your spaces with boundless
              creativity and flawless renovation, where every transformation
              tells a unique story.
            </p>
            <ul className="sci">
              <li>
                <a href="/">
                  <i className="bx bxl-facebook" style={{ color: " #fff" }}></i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="bx bxl-instagram" style={{ color: "#fff" }}></i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="bx bxl-twitter" style={{ color: "#fff" }}></i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="bx bxl-linkedin" style={{ color: "#fff" }}></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="sec quicklinks">
            <h2>Quick Links</h2>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/contact-us">Contact Us</a>
              </li>
              <li>
                <a href="/project">Our Projects</a>
              </li>
              <li>
                <a href="/gallery">Gallery</a>
              </li>
            </ul>
          </div>
          <div className="sec contactBx">
            <h2>Contact Info</h2>
            <ul className="info">
              <li>
                <span>
                  <i className="bx bxs-phone" style={{ color: "#fff" }}>
                    +44 07597211128
                  </i>
                </span>
              </li>
              <li>
                <span>
                  <i className="bx bx-envelope"></i>
                </span>
                <p>
                  <a href="mailto:omluxebrush@gmail.com">
                    omluxebrush@gmail.com
                  </a>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div class="copyright-section">
          <p>&copy; 2024 OmuxeBrush. All rights reserved.</p>
          <p>Designed and Developed by OmLuxeBrush</p>
          <p>
            Unauthorized reproduction, in whole or in part, of any content,
            images, or designs is prohibited without prior written permission.
          </p>
          <p>
            For inquiries, contact us at{" "}
            <a href="mailto:contact@omluxebrush.com">contact@omluxebrush.com</a>.
          </p>
        </div>
    </>
  );
}
