import "./Services.css";
import { useNavigate } from "react-router-dom";

export default function Services() {
  const navigate = useNavigate();

  const handleClick = (category) => {
    navigate(`/our-services/${category}`);
  };

  return (
    <div className="services-container">
      <div className="services-header">
        <span>
          <h1>Our Services</h1>
          <p id="f"></p>
          <p>
            Transforming Spaces, Elevating Lives: Expert Renovations with a
            Creative Touch
          </p>
        </span>
      </div>
      <div className="service">
        <div className="service-box" onClick={() => handleClick("Painting")}>
          <div className="circle">
            <img src="./images/Painting.jpg" alt="roller-brush" />
          </div>
          <div className="service-text ">
            <h1>Painting</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              facere ab distin
            </p>
          </div>
        </div>
        <div className="service-box" onClick={() => handleClick("Flooring")}>
          <div className="circle">
            <img src="./images/Flooring.jpg" alt="roller-brush" />
          </div>
          <div className="service-text">
            <h1>Flooring</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              facere ab distin
            </p>
          </div>
        </div>
        <div className="service-box" onClick={() => handleClick("Roofing")}>
          <div className="circle">
            <img src="./images/Repairs.jpg" alt="roller-brush" />
          </div>
          <div className="service-text">
            <h1>Repairs</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              facere ab distin
            </p>
          </div>
        </div>
        <div className="service-box" onClick={() => handleClick("Carpentry")}>
          <div className="circle">
            <img src="./images/Carpentry.jpg" alt="roller-brush" />
          </div>
          <div className="service-text">
            <h1>Carpentry</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              facere ab distin
            </p>
          </div>
        </div>
        <div
          className="service-box"
          onClick={() => handleClick("Interior Design")}
        >
          <div className="circle">
            <img src="./images/Kitchen (2).jpg" alt="roller-brush" />
          </div>
          <div className="service-text">
            <h1>Kitchen</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              facere ab distin
            </p>
          </div>
        </div>
        <div
          className="service-box"
          onClick={() => handleClick("Structural Repairs")}
        >
          <div className="circle">
            <img
              src="./images/LuxuryBathroom.jpg"
              alt="roller-brush"
            />
          </div>
          <div className="service-text">
            <h1>Luxury Bathroom</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              facere ab distin
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
