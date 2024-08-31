import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Ourservices.css";

export default function Ourservices() {
  const [processSteps, setProcessSteps] = useState([]);
  const [bgimg, setBgimg] = useState(""); // Initialize state for the background image

  const { category } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Fetch the JSON file
    fetch("/Services.json")
      .then((response) => response.json())
      .then((data) => {
        const categoryData = data.processes.find(
          (process) => process.category === category
        );
        if (categoryData) {
          setProcessSteps(categoryData.steps);
          setBgimg(categoryData.bgimg || "");
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [category]);

  return (
    <>
      <div className="Our-services">
        <div 
          className="ourservice-view"        
          style={{
            backgroundImage:`url(${bgimg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            borderImage: "fill 0 linear-gradient(#0001,#0000004d)",
          }}>
          <div className="text">
            <h1>{category}</h1>
            <p>
              Our painting services include interior and exterior painting, trim
              work, and color consulting.
            </p>
            <button className="button-1">Request Estimate</button>
          </div>
        </div>
        <div className="process-heading">
          <h1>Our {category} Process</h1>
          <p>
            Painting not only enhances the aesthetic appeal of your home but
            also provides essential protection against the elements. A
            professionally executed exterior paint job by our team can breathe
            new life into your home.
          </p>
        </div>
        <div className="process">
          {processSteps.map((step) => (
            <div className="process-view" key={step.step}>
              <div className="process-details">
                <h1>{step.title}</h1>
                <p>{step.description}</p>
              </div>
              <div className="process-img">
                <img src={step.image} alt={step.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
