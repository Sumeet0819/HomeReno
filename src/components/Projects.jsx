import React,{useEffect} from "react";
import "./Project.css";
import { useNavigate } from "react-router-dom";

export default function Projects() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/View-project/${id}`);
  };

  return (
    <div className="project-container">
      <div className="project-header">
        <span>
          <h1>Our Projects</h1>
          <p id="p"></p>
          <p>
            Transforming Spaces, Elevating Lives: Expert Renovations with a
            Creative Touch
          </p>
        </span>
      </div>

      <div className="details-container">
        <div className="project-content">
          <span>
            <h1>Modern Kitchen</h1>
            <p id="p"></p>
            <p>
              This renovated kitchen features a modern, minimalist design with
              white cabinetry, a wooden island countertop, and light hardwood
              flooring. Natural light floods the space through a large glass
              wall and ceiling, creating an open and airy atmosphere. Sleek
              built-in appliances and contemporary light fixtures add to the
              kitchen's elegant and functional appeal.
            </p>
            <div className="btn-2">
              <button className="btn type2" onClick={() => handleClick(1)}>
                <span className="btn-txt">View Project</span>
              </button>
            </div>
          </span>
        </div>
        <div className="project-image">
          <img src={require("../images/kitchen/kitchen-2.jpg")} alt="Modern Kitchen" />
        </div>
      </div>
      <div className="details-container">
        <div className="project-content">
          <span>
            <h1>Interior Renovation</h1>
            <p id="p"></p>
            <p>
            This image shows a modern, spacious interior with a sleek, contemporary design. The floor is covered in glossy, light-colored marble or polished tile, reflecting light from the recessed ceiling lights. The ceiling features a unique layered structure with built-in LED lighting, casting a soft purple glow that adds a luxurious and futuristic ambiance to the room. At the center is a minimalist fireplace integrated into the wall, surrounded by a clean, neutral color palette. Large glass doors lead to another area, contributing to the open and airy feel of the space. Overall, the room appears uncluttered and stylish, with a high-end finish and modern lighting accents.
            </p>
            <div className="btn-2">
              <button className="btn type2" onClick={() => handleClick(2)}>
                <span className="btn-txt">View Project</span>
              </button>
            </div>
          </span>
        </div>
        <div className="project-image">
          <img
            src={require("../images/infrastructure/infrastructure-14.jpg")}
            alt="Hallway Renovation"
          />
        </div>
      </div>
      <div className="details-container">
        <div className="project-content">
          <span>
            <h1>Luxury-Bathroom</h1>
            <p id="p"></p>
            <p>
            The luxury washroom in the image features a sleek, minimalist design with large glass panels surrounding the walk-in shower area. A modern floating toilet is mounted against a marble-textured wall, complemented by a bidet spray. The vanity area showcases a contemporary basin with ample storage below, while natural light flows through the large window, highlighting the marble-effect walls and the polished concrete flooring. The overall aesthetic is clean and sophisticated.
            </p>
            <div className="btn-2">
              <button className="btn type2" onClick={() => handleClick(3)}>
                <span className="btn-txt">View Project</span>
              </button>
            </div>
          </span>
        </div>
        <div className="project-image">
          <img
            src={require("../images/luxuryWashroom/luxuryWashroom-3.jpg")}
            alt="Kitchen Renovation"
          />
        </div>
      </div>
    </div>
  );
}
