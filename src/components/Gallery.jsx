import React from 'react'
import './Gallery.css'
import AboutUs from './AboutUs'


export default function Gallery() {
  return (
    <>
    <div className="gallery-container">
    <div className="tagline-text gallery">
            <span> 
            <h1>Gallery</h1>
                <p id='g'></p>
                <p>Make your space pop with a vibrant makeover. Our top-notch renovation services turn your vision into reality, making every corner of your home as lit as your imagination 🔥💫.</p> 
            </span> 
        </div>
        <div className="bar">
          <div className="bar-item">
            <li>Painting</li>
            <li>Carpentry</li>
            <li>Roofing</li>
            <li>Interior Design</li>
            <li>Smart Homes</li>
            <li>Structural Repairs</li>
          </div>
        </div>
  <div className="post">
    <div className="post-box">
       <img  src={require('../images/House (2).jpg')} alt="Loading" className='post-img'/>
          <h2 className="category">Tech</h2>
          <p className="post-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia alias illo minima provident ratione expedita consequuntur ipsa.</p>
        </div>
        <div className="post-box">
       <img  src={require('../images/House (2).jpg')} alt="Loading" className='post-img'/>
          <h2 className="category">Tech</h2>
          <p className="post-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia alias illo minima provident ratione expedita consequuntur ipsa.</p>
        </div>
        <div className="post-box">
       <img  src={require('../images/House (2).jpg')} alt="Loading" className='post-img'/>
          <h2 className="category">Tech</h2>
          <p className="post-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia alias illo minima provident ratione expedita consequuntur ipsa.</p>
        </div>
        <div className="post-box">
       <img  src={require('../images/House (2).jpg')} alt="Loading" className='post-img'/>
          <h2 className="category">Tech</h2>
          <p className="post-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia alias illo minima provident ratione expedita consequuntur ipsa.</p>
        </div>
    </div>
  </div>

    <div>
        <AboutUs/> 
        </div>
    </>

  )
}
