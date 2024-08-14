import React from 'react'
import "./Services.css"
export default function Services() {
  return (
      <div className="services-container">
        <div className="services-header">
            <span> 
                <h1>Our Services</h1>
                <p id='f'></p>
                <p>Transforming Spaces, Elevating Lives: Expert Renovations with a Creative Touch</p>
            </span> 
        </div>
        <div className="service">
            <div className="service-box">  
            <div className="overlay"></div>            
                <div className="circle">
                <img width="50" height="50" src="https://img.icons8.com/stickers/50/roller-brush.png" alt="roller-brush"/>
                </div>
                <div className="service-text">
                    <h1>Painting</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro facere ab distin</p>
                </div>
            </div>
            <div className="service-box">              
                <div className="circle">
                <img width="50" height="50" src="https://img.icons8.com/stickers/50/wooden-floor.png" alt="wooden-floor"/>
                </div>
                <div className="overlay"></div>
                <div className="service-text">
                    <h1>Flooring</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro facere ab distin</p>
                </div>
            </div>
            <div className="service-box">              
                <div className="circle">
                <img width="50" height="50" src="https://img.icons8.com/stickers/50/roofing.png" alt="roofing"/>
                </div>
                <div className="overlay"></div>
                <div className="service-text">
                    <h1>Roofing</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro facere ab distin</p>
                </div>
            </div>
            <div className="service-box">              
                <div className="circle">
                <img width="50" height="50" src="https://img.icons8.com/stickers/50/circular-saw.png" alt="circular-saw"/>
                </div>
                <div className="overlay"></div>
                <div className="service-text">
                    <h1>Carpentry</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro facere ab distin</p>
                </div>
            </div>
            <div className="service-box">              
                <div className="circle">
                <img width="50" height="50" src="https://img.icons8.com/stickers/50/furniture.png" alt="furniture"/>
                </div>
                <div className="overlay"></div>
                <div className="service-text">
                    <h1>Interior Design</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro facere ab distin</p>
                </div>
            </div>
            <div className="service-box">              
                <div className="circle">
                <img width="50" height="50" src="https://img.icons8.com/stickers/50/smart-home-automation.png" alt="smart-home-automation"/>
                </div>
                <div className="overlay"></div>
                <div className="service-text">
                    <h1>Smart Homes</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro facere ab distin</p>
                </div>
            </div>
            <div className="service-box">              
                <div className="circle">
                <img width="50" height="50" src="https://img.icons8.com/stickers/50/maintenance.png" alt="maintenance"/>
                </div>
                <div className="overlay"></div>
                <div className="service-text">
                    <h1>Structural Repairs</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro facere ab distin</p>
                </div>
            </div>
        </div>
        
      </div>
  )
}
