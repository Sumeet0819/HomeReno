import React , { useRef } from "react";
// import image from "../images/8.png";
import Tagline from "./Tagline";
import Services from "./Services";
import Projects from "./Projects";

const SplitContainer = () => {

  const servicesRef = useRef(null);

  const scrollToServices = () => {
    if (servicesRef.current) {
      servicesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="split-container">
        <div className="left-pane">
          <h1>OmLuxe-Brush</h1>
          <p>
            "OmLuxe-Brush: Breathing new life into your spaces with
            boundless creativity and flawless renovation, where every
            transformation tells a unique story."
          </p>
          <div className="btn-1">
            <button className="button type1">
              <span className="btn-txt" onClick={() => scrollToServices()}>Our Services </span>
            </button>
          </div>
          <div className="btn-1">
            <button className="button type1">
              <span className="btn-txt">Request Estimate</span>
            </button>
          </div>
        </div>
      </div>
      <div>
        <Tagline />
        <div ref={servicesRef} className="services">
        <Services />
        </div>
        <Projects />
      </div>
    </>
  );
};

export default SplitContainer;
