import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Ourservices.css";
import RequestEstimateButton from "./RequestEstimateButton";

export default function Ourservices() {
  const [processSteps, setProcessSteps] = useState([]);
  const [bgimg, setBgimg] = useState("");
  const [info, setInfo] = useState("");
  const [heading, setHeading] = useState("");
  const { category } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/Services.json");
        const data = await response.json();
        const categoryData = data.processes.find(
          (process) => process.category === category
        );
        if (categoryData) {
          setProcessSteps(categoryData.steps);
          setBgimg(categoryData.bgimg || "");
          setInfo(categoryData.info || ""); // Set the 'info' field
          setHeading(categoryData.heading || ""); // Set the 'heading' field
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [category]);

  return (
    <>
      <div className="Our-services">
        <div
          className="ourservice-view"
          style={{
            backgroundImage: `url(${bgimg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            borderImage: "fill 0 linear-gradient(#0001,#0000004d)",
          }}
        >
          <div className="text">
            <h1>{category}</h1>
            <p>{info}</p> {/* Dynamically fetched info */}
            <RequestEstimateButton/>
          </div>
        </div>
        <div className="process-heading">
          <h1>Our {category} Process</h1>
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
