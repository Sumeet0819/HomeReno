import React, { useState, useEffect, Suspense } from "react";
import "./Scroll.css";
import Marquee from "react-fast-marquee";
import { useNavigate } from "react-router-dom";

const images = [
  () => import("../images/kitchen/kitchen-1.jpg"),
  () => import("../images/House (2).jpg"),
  () => import("../images/House (3).jpg"),
  () => import("../images/House (4).jpg"),
  () => import("../images/House (5).jpg"),
  () => import("../images/House (6).jpg"),
  () => import("../images/carpentry/Carpentry-21.jpg"),
  () => import("../images/kitchen/kitchen-13.jpg"),
];

export default function Scroll() {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/gallery`);
  };

  return (
    <div className="scroll">
      <div className="slider">
        <Marquee>
          <div className="list">
            {images.map((loadImage, index) => (
              <Suspense fallback={<div>Loading...</div>} key={index}>
                <LazyImage loadImage={loadImage} position={index + 1} />
              </Suspense>
            ))}
          </div>
        </Marquee>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          className="button-2"
          style={{
            padding: "10px 20px",
            fontSize: "1em",
            marginBottom: "20px",
            textDecoration: "none",
          }}
          onClick={() => handleClick()}
        >
          View More
        </button>
      </div>
    </div>
  );
}

const LazyImage = ({ loadImage, position }) => {
  const [src, setSrc] = useState(null);

  useEffect(() => {
    loadImage().then((image) => {
      setSrc(image.default);
    });
  }, [loadImage]);

  return (
    <div className="item" style={{ "--position": position }}>
      {src ? <img src={src} alt={`House ${position}`} /> : <div>Loading...</div>}
    </div>
  );
};
