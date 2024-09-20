import React from "react";
import "./Ready.css";
import RequestEstimateButton from "./RequestEstimateButton";
export default function Ready() {
  return (
    <div className="ready">
      <div className="content-container">
        <h1>Ready to get started?</h1>
        <p>
          Join us today and let our experts help you achieve your goals with
          tailored solutions that meet your needs.
        </p>
        <RequestEstimateButton/>
      </div>
    </div>
  );
}
