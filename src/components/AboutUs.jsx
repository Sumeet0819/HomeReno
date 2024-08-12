import React from 'react'
import'./About.css'
export default function AboutUs() {
  return (
    <>
        <footer>
        <div className="footer-container">
            <div className="sec aboutus">
            <h2>About Us</h2>
            <p style={{color: '#fff'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, obcaecati nam saepe eaque praesentium voluptatem cumque adipisci quisquam explicabo unde qui sint tempore deleniti, possimus magnam nihil laboriosam ipsa quasi!</p>
            <ul className="sci">
                <li><a href="/"><i className="bx bxl-facebook"style={{color:' #fff'}}></i></a></li>
                <li><a href="/"><i className="bx bxl-instagram"style={{color: '#fff'}}></i></a></li>
                <li><a href="/"><i className="bx bxl-twitter"style={{color: '#fff'}}></i></a></li>
                <li><a href="/"><i className="bx bxl-linkedin"style={{color: '#fff'}}></i></a></li>
            </ul>
            </div>
            <div className="sec quicklinks">
            <h2>Quick Links</h2>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
            </ul>
            </div>
            <div className="sec contactBx">
            <h2>Contact Info</h2>
            <ul className="info">
                <li>
                    <span><i className="bx bxs-map"></i></span>
                    <span>6444 London street <br/>Brighton PA33445 <br/>UK</span>
                </li>
                <li>
                    <span><i className="bx bx-envelope"></i></span>
                    <p><a href="mailto:codehobby9@gmail.com">Codemyhobby9@gmail.com</a></p>
                </li>
            </ul>
            </div>
        </div>
        </footer>
    </>
  )
}
