import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Ourservices.css";

export default function Ourservices() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [processSteps, setProcessSteps] = useState([]);

  const { category } = useParams();

  useEffect(() => {
    // Fetch the JSON file
    fetch("/Services.json")
      .then((response) => response.json())
      .then((data) => {
        const categoryData = data.processes.find(
          (process) => process.category.toLowerCase() === category.toLowerCase()
        );
        if (categoryData) {
          setProcessSteps(categoryData.steps);
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [category]);

  return (
    <>
      <div className="Our-services">
        <div className="ourservice-view">
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
                <img src="" alt="Loading" />
              </div>
            </div>
          ))}
        </div>
        <div className="ready">
          <h1>Ready to get started?</h1>
          <p>
            Join us today and let our experts help you achieve your goals with
            tailored solutions that meet your needs.
          </p>
          <button className="button-2">Request Estimate</button>
        </div>
      </div>
    </>
  );
}
