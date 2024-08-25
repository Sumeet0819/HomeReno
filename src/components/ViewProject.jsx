import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./viewproject.css";

export default function ViewProject() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    // Fetch data from the JSON file
    const fetchData = async () => {
      const response = await fetch("/Project.json");
      const data = await response.json();

      // Find the project with the matching id
      const projectData = data.find((project) => project.id === parseInt(id));
      setProject(projectData);
    };

    fetchData();
  }, [id]);

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="viewproject-container">
        <div
          className="project-view"
          style={{
            backgroundImage: project.bgimage,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            borderImage: "fill 0 linear-gradient(#0001,#000)",
          }}
        >
          <div className="info">
            <h1>{project.name}</h1>
            <p>{project.description}</p>
          </div>
        </div>
        <div className="problem">
          <h1>The Problem</h1>
          <p>{project.problem}</p>
          <div className="problem-image">
            <div className="p-image">
              <img src={project.images[1]} alt="" />
            </div>
            <div className="p-image">
              <img src={project.images[2]} alt="" />
            </div>
            <div className="p-image">
              <img src={project.images[3]} alt="" />
            </div>
            <div className="p-image">
              <img src={project.images[0]} alt="" />
            </div>
          </div>
        </div>
        <div className="solution">
          <h1>The Solution</h1>
          <p>{project.solution}</p>
          <div className="solution-image">
            <div className="p-image">
              <img src={project.images[0]} alt="" />
            </div>
            <div className="p-image">
              <img src={project.images[1]} alt="" />
            </div>
            <div className="p-image">
              <img src={project.images[2]} alt="" />
            </div>
            <div className="p-image">
              <img src={project.images[3]} alt="" />
            </div>
          </div>
        </div>
        <div className="related-Projects">
          <h1>Related Projects</h1>
        </div>
        <div className="details-container">
          <div className="project-content">
            <span>
              <h1>{project.relatedProjects[1]}</h1>
              <p id="p"></p>
              <p>
                This kitchen renovation features a striking contrast between
                dark cabinetry and bright white countertops. A large farmhouse
                sink, brass fixtures, and black appliances add a touch of
                elegance to the space. The kitchen is illuminated by natural
                light from a skylight, enhancing the modern design and
                highlighting the spacious island, which offers ample workspace
                and seating. The overall aesthetic is sophisticated and
                contemporary, with clean lines and a functional layout.
              </p>
            </span>
          </div>
          <div className="project-image">
            <img src={require("../images/House (13).jpg")} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
