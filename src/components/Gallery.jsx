import React, { useState, useEffect, Suspense } from "react";
import "./Gallery.css";

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      setLoading(false);
    }, 1500); // Simulating loading
  }, []);
  

  // Lazy load images
  const posts = [
    {
      id: 1,
      category: "Painting",
      img: () => import("../images/painting/painting-1.jpg"),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 2,
      category: "Painting",
      img: () => import("../images/painting/painting-2.jpg"),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 3,
      category: "Painting",
      img: () => import("../images/painting/painting-3.jpg"),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 4,
      category: "Painting",
      img: () => import("../images/painting/painting-4.jpg"),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 5,
      category: "Painting",
      img: () => import("../images/painting/painting-5.jpg"),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 6,
      category: "Painting",
      img: () => import("../images/painting/painting-6.jpg"),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 7,
      category: "Painting",
      img: () => import("../images/painting/painting-7.jpg"),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 8,
      category: "Painting",
      img: () => import("../images/painting/painting-8.jpg"),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 9,
      category: "Painting",
      img: () => import("../images/painting/painting-9.jpg"),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 10,
      category: "Painting",
      img: () => import("../images/painting/painting-10.jpg"),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 11,
      category: "Painting",
      img: () => import("../images/painting/painting-11.jpg"),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 14,
      category: "Carpentry",
      img: () => import("../images/carpentry/Carpentry-5.jpg"),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 15,
      category: "Carpentry",
      img: () => import("../images/carpentry/Carpentry-14.jpg"),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 16,
      category: "Carpentry",
      img: () => import("../images/carpentry/Carpentry-18.jpg"),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 17,
      category: "Carpentry",
      img: () => import("../images/carpentry/Carpentry-20.jpg"),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 27,
      category: "Repairs",
      img: () => import("../images/repair/repair-2.jpg"),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 28,
      category: "Repairs",
      img: () => import("../images/repair/repair-4.jpg"),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 29,
      category: "Repairs",
      img: () => import("../images/repair/repair-5.jpg"),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 30,
      category: "Repairs",
      img: () => import("../images/repair/repair-6.jpg"),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 51,
      category: "Kitchen Renovations",
      img: () => import("../images/kitchen/kitchen-1.jpg"),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 52,
      category: "Kitchen Renovations",
      img: () => import("../images/kitchen/kitchen-2.jpg"),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 53,
      category: "Kitchen Renovations",
      img: () => import("../images/kitchen/kitchen-3.jpg"),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 54,
      category: "Kitchen Renovations",
      img: () => import("../images/kitchen/kitchen-4.jpg"),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 55,
      category: "Kitchen Renovations",
      img: () => import("../images/kitchen/kitchen-5.jpg"),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 56,
      category: "Kitchen Renovations",
      img: () => import("../images/kitchen/kitchen-6.jpg"),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 57,
      category: "Kitchen Renovations",
      img: () => import("../images/kitchen/kitchen-9.jpg"),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 65,
      category: "Kitchen Renovations",
      img: () => import("../images/kitchen/kitchen-10.jpg"),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 66,
      category: "Kitchen Renovations",
      img: () => import("../images/kitchen/kitchen-13.jpg"),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 58,
      category: "Kitchen Renovations",
      img: () => import("../images/kitchen/kitchen-14.jpg"),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 79,
      category: "Luxury Washroom",
      img: () => import("../images/luxuryWashroom/luxuryWashroom-1.jpg"),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 80,
      category: "Luxury Washroom",
      img: () => import("../images/luxuryWashroom/luxuryWashroom-2.jpg"),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 81,
      category: "Luxury Washroom",
      img: () => import("../images/luxuryWashroom/luxuryWashroom-13.jpg"),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 82,
      category: "Luxury Washroom",
      img: () => import("../images/luxuryWashroom/luxuryWashroom-4.jpg"),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 83,
      category: "Luxury Washroom",
      img: () => import("../images/luxuryWashroom/luxuryWashroom-5.jpg"),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 84,
      category: "Luxury Washroom",
      img: () => import("../images/luxuryWashroom/luxuryWashroom-12.jpg"),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 85,
      category: "Luxury Washroom",
      img: () => import("../images/luxuryWashroom/luxuryWashroom-11.jpg"),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 86,
      category: "Luxury Washroom",
      img: () => import("../images/luxuryWashroom/luxuryWashroom-10.jpg"),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 87,
      category: "Structural Repairs",
      img: () => import("../images/House (7).jpg"),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];
  

  const filteredPosts =
    selectedCategory === "All"
      ? posts
      : posts.filter((post) => post.category === selectedCategory);

  return (
    <>
      <div className="gallery-container">
        <div className="tagline-text gallery">
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

        <div className="bar">
          <div className="bar-item">
            <li
              onClick={() => setSelectedCategory("All")}
              className={selectedCategory === "All" ? "active" : ""}
            >
              All
            </li>
            <li
              onClick={() => setSelectedCategory("Carpentry")}
              className={selectedCategory === "Carpentry" ? "active" : ""}
            >
              Carpentry
            </li>
            <li
              onClick={() => setSelectedCategory("Painting")}
              className={selectedCategory === "Painting" ? "active" : ""}
            >
              Painting
            </li>
            <li
              onClick={() => setSelectedCategory("Repairs")}
              className={selectedCategory === "Repairs" ? "active" : ""}
            >
              Repairs
            </li>
            <li
              onClick={() => setSelectedCategory("Luxury Washroom")}
              className={
                selectedCategory === "Luxury Washroom" ? "active" : ""
              }
            >
              Luxury Washroom
            </li>
            <li
              onClick={() => setSelectedCategory("Kitchen Renovations")}
              className={
                selectedCategory === "Kitchen Renovations" ? "active" : ""
              }
            >
              Kitchen Renovations
            </li>
          </div>
        </div>

        <div className="post">
          {loading
            ? Array(6)
                .fill(null)
                .map((_, index) => (
                  <div key={index} className="post-box skeleton-box">
                    <div className="skeleton-img"></div>
                  </div>
                ))
            : filteredPosts.map((post) => (
                <Suspense fallback={<div className="skeleton-box"></div>} key={post.id}>
                  <LazyImage loadImage={post.img} description={post.description} />
                </Suspense>
              ))}
        </div>
      </div>
    </>
  );
}

// Component to lazy load images
const LazyImage = ({ loadImage, description }) => {
  const [src, setSrc] = useState(null);

  useEffect(() => {
    loadImage().then((image) => setSrc(image.default));
  }, [loadImage]);

  return (
    <div className="post-box">
      {src ? (
        <img src={src} alt={description} className="post-img" />
      ) : (
        <div className="skeleton-box"></div>
      )}
    </div>
  );
};
