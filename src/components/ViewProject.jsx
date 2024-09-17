import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./viewproject.css";

export default function ViewProject() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [relatedProjects, setRelatedProjects] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Fetch data from the JSON file
    const fetchData = async () => {
      const response = await fetch("/Project.json");
      const data = await response.json();

      // Find the project with the matching id
      const projectData = data.find((project) => project.id === parseInt(id));
      setProject(projectData);

      // Fetch related projects
      if (projectData) {
        const relatedProjectsData = data.filter((proj) =>
          projectData.relatedProjects.includes(proj.name)
        );
        setRelatedProjects(relatedProjectsData);
      }
    };

    fetchData();
  }, [id]);

  if (!project) {
    return <div>Loading...</div>;
  }

  const handleNavigate = (relatedProjectId) => {
    // Navigate to the project page with the related project ID
    navigate(`/view-project/${relatedProjectId}`);
    window.scrollTo(0, 0);
  };

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
            borderImage: "fill 0 linear-gradient(#0001,#0000004d)",
          }}
        >
          <div className="info">
            <h1>{project.name}</h1>
            <p>{project.description}</p>
          </div>
        </div>

        <div className="problem">
          {/* <h1>The Problem</h1> */}
          {/* <p>{project.problem}</p> */}
          <div className="problem-image">
            <div className="p-image">
              <img src={project.images[1]} alt="Problem" />
            </div>
            <div className="p-image">
              <img src={project.images[0]} alt="Problem" />
            </div>
          </div>
        </div>

        <div className="solution">
          {/* <h1>The Solution</h1> */}
          <p>{project.solution}</p>
          {/* <div className="solution-image">
            <div className="p-image">
              <img src={project.images[0]} alt="Solution" />
            </div>
            <div className="p-image">
              <img src={project.images[1]} alt="Solution" />
            </div>
          </div> */}
        </div>

        {/* Related Projects Section */}
        <div className="related-Projects">
          <span>
            <h1>Related Projects</h1>
          </span>
          {relatedProjects.length > 0 ? (
            relatedProjects.map((relatedProject) => (
              <div key={relatedProject.id} className="details-container">
                <div className="project-content">
                  <h1>{relatedProject.name}</h1>
                  <span>
                    <p>{relatedProject.description}</p>
                  </span>

                  <button
                    className="btn type2"
                    onClick={() => handleNavigate(relatedProject.id)}
                  >
                    <span className="btn-txt">View Project</span>
                  </button>
                </div>
                <div className="project-image">
                  <img
                    src={relatedProject.images[0]}
                    alt={relatedProject.name}
                  />
                </div>
              </div>
            ))
          ) : (
            <p>No related projects found.</p>
          )}
        </div>
      </div>
    </>
  );
}
