import React from 'react'
import './viewproject.css'
import AboutUs from './AboutUs'



export default function viewproject(props) {
  return (
    <>
    <div className="viewproject-container">
    <div className="tagline-text viewproject">
            <span> 
            <h1>Our-Projects</h1>
                <p id='g'></p>
                <p>Make your space pop with a vibrant makeover. Our top-notch renovation services turn your vision into reality, making every corner of your home as lit as your imagination 🔥💫.</p> 
            </span> 
        </div>
        <div className="project-view">
          <div className="pic-container">
          <div className="project-image">
            <img  src={require('../images/House (13).jpg')} alt=""/></div>
          </div>
          <div className="info">
            <h1>{props.project}</h1>
            <p>This kitchen renovation features a striking contrast between dark cabinetry and bright white countertops. A large farmhouse sink, brass fixtures, and black appliances add a touch of elegance to the space. The kitchen is illuminated by natural light from a skylight, enhancing the modern design and highlighting the spacious island, which offers ample workspace and seating. The overall aesthetic is sophisticated and contemporary, with clean lines and a functional layout.</p>
            </div>
        </div>
        <div className="problem">
          <h1>The Problem</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nulla aliquam doloribus in quibusdam adipisci, necessitatibus veniam perferendis molestias delectus tempora, itaque quam at amet nesciunt impedit cum numquam. Officiis?</p>
          <div className="problem-image">
            <div className="p-image">
            <img  src={require('../images/House (13).jpg')} alt=""/>
            </div>
            <div className="p-image">
            <img  src={require('../images/House (13).jpg')} alt=""/>
            </div>         <div className="p-image">
            <img  src={require('../images/House (13).jpg')} alt=""/>
            </div>
            <div className="p-image">
            <img  src={require('../images/House (13).jpg')} alt=""/>
            </div>
          </div>
        </div>
        <div className="solution">
          <h1>The Solution</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro ipsum odio amet harum aliquam velit id, ducimus dicta quis excepturi beatae, dolorem fugiat impedit adipisci nobis molestias temporibus ab odit.</p>
          <div className="solution-image">
          <img  src={require('../images/House (13).jpg')} alt=""/>
          <img  src={require('../images/House (13).jpg')} alt=""/>
          <img  src={require('../images/House (13).jpg')} alt=""/>
          <img  src={require('../images/House (13).jpg')} alt=""/>
          </div>
        </div>
        <div className="related-Projects">
          <h1>Related Projects</h1>
        </div>
        <div className="details-container">
          <div className="project-content">
          <span> 
                <h1>Kitchen Renovation</h1>
                <p id='p'></p>
                <p>This kitchen renovation features a striking contrast between dark cabinetry and bright white countertops. A large farmhouse sink, brass fixtures, and black appliances add a touch of elegance to the space. The kitchen is illuminated by natural light from a skylight, enhancing the modern design and highlighting the spacious island, which offers ample workspace and seating. The overall aesthetic is sophisticated and contemporary, with clean lines and a functional layout.</p>
            </span>
          </div>
          <div className="project-image">
               <img  src={require('../images/House (13).jpg')} alt=""/>
          </div>
        </div>
  </div>
    
    <div>
        <AboutUs/> 
        </div>
    </>

  )
}
