import React, { useState, useEffect } from "react";
import "./Testimonials.css";
import Marquee from "react-fast-marquee";

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    // Fetch the testimonials data
    fetch("/testimonials.json")
      .then((response) => response.json())
      .then((data) => setTestimonials(data))
      .catch((error) => console.error("Error fetching testimonials:", error));
  }, []);

  return (
    <div className="testimonials-container">
      <div className="content">
        <h1>Testimonials</h1>
        <h2>"Hear the Buzz: What People Are Saying About Us"</h2>
      </div>
      <Marquee delay={5}>
        <div className="test-1">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial" key={index}>
              <h3>{testimonial.name}</h3>
              <div className="rating">
                {Array.from({ length: 5 }, (_, i) => (
                  <span
                    key={i}
                    className="star"
                    style={{ color: i < Math.floor(testimonial.rating) ? "#f39c12" : "#ddd" }}
                  >
                    &#9733;
                  </span>
                ))}
              </div>
              <p>{testimonial.testimonial}</p>
            </div>
          ))}
        </div>
      </Marquee>
      <Marquee direction="right">
        <div className="test-2">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial" key={index}>
              <h3>{testimonial.name}</h3>
              <div className="rating">
                {Array.from({ length: 5 }, (_, i) => (
                  <span
                    key={i}
                    className="star"
                    style={{ color: i < Math.floor(testimonial.rating) ? "#f39c12" : "#ddd" }}
                  >
                    &#9733;
                  </span>
                ))}
              </div>
              <p>{testimonial.testimonial}</p>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
}
