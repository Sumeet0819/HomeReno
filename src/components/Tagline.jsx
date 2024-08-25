import React from "react";
import "./Tagline.css";
import Scroll from "../components/Scroll";
export default function Tagline() {
  return (
    <>
      <div className="tagline-container">
        <div className="tagline-text">
          <span>
            <h1>Gallery</h1>
            <p id="g"></p>
            <p>
              Make your space pop with a vibrant makeover. Our top-notch
              renovation services turn your vision into reality, making every
              corner of your home as lit as your imagination 🔥💫.
            </p>
          </span>
        </div>
        <Scroll />
      </div>
    </>
  );
}
