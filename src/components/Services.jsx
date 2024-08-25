import "./Services.css";
import { useNavigate } from "react-router-dom";

export default function Services() {
  const navigate = useNavigate();

  const handleClick = (category) => {
    navigate(`/our-services/${category}`);
  };

  return (
    <div  className="services-container">
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
          <div className="overlay"></div>
          <div className="circle">
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/stickers/50/roller-brush.png"
              alt="roller-brush"
            />
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
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/stickers/50/wooden-floor.png"
              alt="wooden-floor"
            />
          </div>
          <div className="overlay"></div>
          <div className="service-text">
            <h1>Flooring</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              facere ab distin
            </p>
          </div>
        </div>
        <div className="service-box"onClick={() => handleClick("Roofing")}>
          <div className="circle">
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/stickers/50/roofing.png"
              alt="roofing"
            />
          </div>
          <div className="overlay"></div>
          <div className="service-text">
            <h1>Roofing</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              facere ab distin
            </p>
          </div>
        </div>
        <div className="service-box"onClick={() => handleClick("Carpentry")}>
          <div className="circle">
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/stickers/50/circular-saw.png"
              alt="circular-saw"
            />
          </div>
          <div className="overlay"></div>
          <div className="service-text">
            <h1>Carpentry</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              facere ab distin
            </p>
          </div>
        </div>
        <div className="service-box"onClick={() => handleClick("Interior Design")}>
          <div className="circle">
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/stickers/50/furniture.png"
              alt="furniture"
            />
          </div>
          <div className="overlay"></div>
          <div className="service-text">
            <h1>Interior Design</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              facere ab distin
            </p>
          </div>
        </div>
        <div className="service-box" onClick={() => handleClick("Smart Homes")}>
          <div className="circle">
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/stickers/50/smart-home-automation.png"
              alt="smart-home-automation"
            />
          </div>
          <div className="overlay"></div>
          <div className="service-text">
            <h1>Smart Homes</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              facere ab distin
            </p>
          </div>
        </div>
        <div className="service-box"onClick={() => handleClick("Structural Repairs")}>
          <div className="circle">
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/stickers/50/maintenance.png"
              alt="maintenance"
            />
          </div>
          <div className="overlay"></div>
          <div className="service-text">
            <h1>Structural Repairs</h1>
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
