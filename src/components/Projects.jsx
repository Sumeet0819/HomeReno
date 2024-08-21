import React from 'react';
import './Project.css';
import { useNavigate } from 'react-router-dom';

export default function Projects() {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/View-project/${id}`);
  };

  return (
    <div className='project-container'>
      <div className="project-header">
        <span>
          <h1>Our Projects</h1>
          <p id='p'></p>
          <p>Transforming Spaces, Elevating Lives: Expert Renovations with a Creative Touch</p>
        </span>
      </div>

      <div className="details-container">
        <div className="project-content">
          <span>
            <h1>Modern Kitchen</h1>
            <p id='p'></p>
            <p>This renovated kitchen features a modern, minimalist design with white cabinetry, a wooden island countertop, and light hardwood flooring. Natural light floods the space through a large glass wall and ceiling, creating an open and airy atmosphere. Sleek built-in appliances and contemporary light fixtures add to the kitchen's elegant and functional appeal.</p>
          </span>
        </div>
        <div className="project-image">
          <img src={require('../images/House (7).jpg')} alt="Modern Kitchen" />
        </div>
      </div>
      <div className="btn-1">
        <button className="button type1" onClick={() => handleClick(1)}>
          <span className="btn-txt">View Project</span>
        </button>
      </div>

      <div className="details-container">
        <div className="project-content">
          <span>
            <h1>Hallway Renovation</h1>
            <p id='p'></p>
            <p>This hallway renovation showcases a clean and modern look with glossy white floor tiles and a sleek staircase. The space is illuminated by recessed ceiling lights and soft blue LED accent lighting, creating a serene and contemporary ambiance. The design features smooth white walls and built-in storage, contributing to a minimalist and functional aesthetic.</p>
          </span>
        </div>
        <div className="project-image">
          <img src={require('../images/House (16).jpg')} alt="Hallway Renovation" />
        </div>
      </div>

      <div className="btn-1">
        <button className="button type1" onClick={() => handleClick(2)}>
          <span className="btn-txt">View Project</span>
        </button>
      </div>

      <div className="details-container">
        <div className="project-content">
          <span>
            <h1>Kitchen Renovation</h1>
            <p id='p'></p>
            <p>This kitchen renovation features a striking contrast between dark cabinetry and bright white countertops. A large farmhouse sink, brass fixtures, and black appliances add a touch of elegance to the space. The kitchen is illuminated by natural light from a skylight, enhancing the modern design and highlighting the spacious island, which offers ample workspace and seating. The overall aesthetic is sophisticated and contemporary, with clean lines and a functional layout.</p>
          </span>
        </div>
        <div className="project-image">
          <img src={require('../images/House (13).jpg')} alt="Kitchen Renovation" />
        </div>
      </div>
      <div className="btn-1">
        <button className="button type1" onClick={() => handleClick(2)}>
          <span className="btn-txt">View Project</span>
        </button>
      </div>
    </div>
  );
}
