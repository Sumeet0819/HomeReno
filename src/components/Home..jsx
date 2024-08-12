import React from "react";
import image from "../images/8.png";


const SplitContainer =() => {
  return (
    <>
      <div className="split-container">
        <div className="left-pane">
          <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quam
            cumque doloribus
          </p>
          <div className="btn-1">
            <button className="button type1">
              <span className="btn-txt">Our Services</span>
            </button>
          </div>
          <div className="btn-1">
            <button className="button type1">
              <span className="btn-txt">Read More</span>
            </button>
          </div>
        </div>
        <div className="right-pane">
          <img src={image} alt="" />
        </div>
      </div>
    </>
  );
};

export default SplitContainer;
