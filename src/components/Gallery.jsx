import React, { useState } from "react";
import { useEffect } from "react";
import "./Gallery.css";

export default function Gallery() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedCategory, setSelectedCategory] = useState("All");

  const posts = [
    {
      id: 1,
      category: "Painting",
      img: require("../images/painting/painting-1.jpg"),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 2,
      category: "Painting",
      img: require("../images/painting/painting-2.jpg"),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 3,
      category: "Painting",
      img: require("../images/painting/painting-3.jpg"),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 4,
      category: "Painting",
      img: require("../images/painting/painting-4.jpg"),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 5,
      category: "Painting",
      img: require("../images/painting/painting-5.jpg"),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id:6,
      category: "Painting",
      img: require("../images/painting/painting-6.jpg"),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 7,
      category: "Painting",
      img: require("../images/painting/painting-7.jpg"),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 8,
      category: "Painting",
      img: require("../images/painting/painting-8.jpg"),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 9,
      category: "Painting",
      img: require("../images/painting/painting-9.jpg"),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 10,
      category: "Painting",
      img: require("../images/painting/painting-10.jpg"),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 11,
      category: "Painting",
      img: require("../images/painting/painting-11.jpg"),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 12,
      category: "Carpentry",
      img: require("../images/carpentry/Carpentry-1.jpg"),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 13,
      category: "Carpentry",
      img: require("../images/carpentry/Carpentry-7.jpg"),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 14,
      category: "Carpentry",
      img: require("../images/carpentry/Carpentry-8.jpg"),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 15,
      category: "Carpentry",
      img: require("../images/carpentry/Carpentry-9.jpg"),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 16,
      category: "Carpentry",
      img: require("../images/carpentry/Carpentry-10.jpg"),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 17,
      category: "Carpentry",
      img: require("../images/carpentry/Carpentry-11.jpg"),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 18,
      category: "Carpentry",
      img: require("../images/carpentry/Carpentry-12.jpg"),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 19,
      category: "Carpentry",
      img: require("../images/carpentry/Carpentry-13.jpg"),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 20,
      category: "Carpentry",
      img: require("../images/carpentry/Carpentry-14.jpg"),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 21,
      category: "Carpentry",
      img: require("../images/carpentry/Carpentry-15.jpg"),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 22,
      category: "Carpentry",
      img: require("../images/carpentry/Carpentry-16.jpg"),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 23,
      category: "Carpentry",
      img: require("../images/carpentry/Carpentry-17.jpg"),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 24,
      category: "Carpentry",
      img: require("../images/carpentry/Carpentry-18.jpg"),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },    {
      id: 25,
      category: "Carpentry",
      img: require("../images/carpentry/Carpentry-25.jpg"),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 26,
      category: "Carpentry",
      img: require("../images/carpentry/Carpentry-20.jpg"),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 27,
      category: "Repairs",
      img: require("../images/repair/repair-1.jpg"),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 28,
      category: "Repairs",
      img: require("../images/repair/repair-2.jpg"),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 29,
      category: "Repairs",
      img: require("../images/repair/repair-3.jpg"),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 30,
      category: "Repairs",
      img: require("../images/repair/repair-4.jpg"),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 31,
      category: "Repairs",
      img: require("../images/repair/repair-5.jpg"),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },

    {
      id: 32,
      category: "Repairs",
      img: require("../images/repair/repair-6.jpg"),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 34,
      category: "Repairs",
      img: require("../images/repair/repair-7.jpg"),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 35,
      category: "Repairs",
      img: require("../images/repair/repair-8.jpg"),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 36,
      category: "Repairs",
      img: require("../images/repair/repair-9.jpg"),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 51,
      category: "Kitchen Renovations",
      img: require("../images/kitchen/kitchen-1.jpg"),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 52,
      category: "Kitchen Renovations",
      img: require("../images/kitchen/kitchen-2.jpg"),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 53,
      category: "Kitchen Renovations",
      img: require("../images/kitchen/kitchen-3.jpg"),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 54,
      category: "Kitchen Renovations",
      img: require("../images/kitchen/kitchen-4.jpg"),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 55,
      category: "Kitchen Renovations",
        img: require("../images/kitchen/kitchen-5.jpg"),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },

    {
      id: 56,
      category: "Kitchen Renovations",
        img: require("../images/kitchen/kitchen-6.jpg"),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 57,
      category: "Kitchen Renovations",
        img: require("../images/kitchen/kitchen-7.jpg"),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 65,
      category: "Kitchen Renovations",
        img: require("../images/kitchen/kitchen-8.jpg"),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 66,
      category: "Kitchen Renovations",
        img: require("../images/kitchen/kitchen-9.jpg"),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 58,
      category: "Kitchen Renovations",
        img: require("../images/kitchen/kitchen-10.jpg"),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 59,
      category: "Kitchen Renovations",
        img: require("../images/kitchen/kitchen-11.jpg"),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 60,
      category: "Kitchen Renovations",
        img: require("../images/kitchen/kitchen-12.jpg"),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 61,
      category: "Kitchen Renovations",
        img: require("../images/kitchen/kitchen-13.jpg"),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 62,
      category: "Kitchen Renovations",
        img: require("../images/kitchen/kitchen-14.jpg"),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 79,
      category: "Luxury Washroom",
      img: require("../images/luxuryWashroom/luxuryWashroom-1.jpg"),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 80,
      category: "Luxury Washroom",
      img: require("../images/luxuryWashroom/luxuryWashroom-2.jpg"),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 81,
      category: "Luxury Washroom",
      img: require("../images/luxuryWashroom/luxuryWashroom-13.jpg"),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 82,
      category: "Luxury Washroom",
      img: require("../images/luxuryWashroom/luxuryWashroom-4.jpg"),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 83,
      category: "Luxury Washroom",
      img: require("../images/luxuryWashroom/luxuryWashroom-5.jpg"),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 84,
      category: "Luxury Washroom",
      img: require("../images/luxuryWashroom/luxuryWashroom-12.jpg"),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 85,
      category: "Luxury Washroom",
      img: require("../images/luxuryWashroom/luxuryWashroom-11.jpg"),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 86,
      category: "Luxury Washroom",
      img: require("../images/luxuryWashroom/luxuryWashroom-10.jpg"),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 87,
      category: "Structural Repairs",
      img: require("../images/House (7).jpg"),
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
            <li onClick={() => setSelectedCategory("All")}>All</li>
            <li onClick={() => setSelectedCategory("Painting")}>Painting</li>
            <li onClick={() => setSelectedCategory("Carpentry")}>Carpentry</li>
            <li onClick={() => setSelectedCategory("Repairs")}>Repairs</li>
            <li onClick={() => setSelectedCategory("Interior Design")}>
              Interior Design
            </li>
            <li onClick={() => setSelectedCategory("Luxury Washroom")}>
            Luxury-Washroom
            </li>
            <li onClick={() => setSelectedCategory("Kitchen Renovations")}>
            Kitchen-Renovations
            </li>
          </div>
        </div>
        <div className="post">
          {filteredPosts.map((post) => (
            <div key={post.id} className="post-box">
              <img src={post.img} alt={post.description} className="post-img" />
              {/* <h2 className="category">{post.category}</h2> */}
              {/* <p className="post-description">{post.description}</p> */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
