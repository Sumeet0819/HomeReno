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
            <img src="./images/Painting.jpg" alt="Error" />
          </div>
          <div className="service-text ">
            <h1>Painting</h1>
            <p>
            "Painting services start from 650 per room. Prices may vary based on room size and requirements."
            </p>
          </div>
        </div>
        <div className="service-box" onClick={() => handleClick("Flooring")}>
          <div className="circle">
            <img src="./images/Flooring.jpg" alt="Error" />
          </div>
          <div className="service-text">
            <h1>Flooring</h1>
            <p>
            "Building solid foundations with every step. Ensuring quality and precision in every project."
            </p>
          </div>
        </div>
        <div className="service-box" onClick={() => handleClick("Repairs")}>
          <div className="circle">
            <img src="./images/Repairs.jpg" alt="Error" />
          </div>
          <div className="service-text">
            <h1>Repairs</h1>
            <p>
            "Restoring strength, reviving spaces. Elevating the essence of every environment."
            </p>
          </div>
        </div>
        <div className="service-box" onClick={() => handleClick("Carpentry")}>
          <div className="circle">
            <img src="./images/Carpentry.jpg" alt="Error" />
          </div>
          <div className="service-text">
            <h1>Carpentry</h1>
            <p>
            "Crafting excellence, shaping your vision. Delivering unmatched quality, one project at a time."
            </p>
          </div>
        </div>
        <div
          className="service-box"
          onClick={() => handleClick("Kitchen Renovation")}
        >
          <div className="circle">
            <img src="./images/Kitchen (2).jpg" alt="Error" />
          </div>
          <div className="service-text">
            <h1>Kitchen</h1>
            <p>
            "Revitalize your heart of the home with style and function. Redefining your living space with a touch of sophistication."
            </p>
          </div>
        </div>
        <div
          className="service-box"
          onClick={() => handleClick("Luxury Bathroom")}
        >
          <div className="circle">
            <img
              src="./images/LuxuryBathroom.jpg"
              alt="Error"
            />
          </div>
          <div className="service-text">
            <h1>Luxury Bathroom</h1>
            <p>
            "Indulge in elegance, redefine your sanctuary. Transforming spaces into serene, luxurious retreats."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
