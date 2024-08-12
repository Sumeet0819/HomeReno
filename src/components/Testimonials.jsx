import React from 'react'
import './Testimonials.css'
import Marquee from 'react-fast-marquee'
export default function Testimonials() {
  return (
    <div className='testimonials-contianer'>
        
                <div className="content">
                    <h2>"Hear the Buzz: What People Are Saying About Us"</h2>
                </div>
                <Marquee delay={5}>
                <div className="test-1">
                    <div className="testimonial ">
                        <h3>Testimonial-1</h3>
                        <p>"I love the way they work, they are very professional and always deliver on time/</p>
                    </div>
                    <div className="testimonial ">
                    <h3>Testimonial-2</h3>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor"</p>
                    </div>
                    <div className="testimonial ">
                    <h3>Testimonial-3</h3>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor"</p>
                    </div>
                    <div className="testimonial ">
                    <h3>Testimonial-4</h3>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor"</p>
                    </div>
                    <div className="testimonial ">
                    <h3>Testimonial-5</h3>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor"</p>
                    </div>
                    <div className="testimonial ">
                    <h3>Testimonial-6</h3>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor"</p>
                    </div>
                    <div className="testimonial ">
                    <h3>Testimonial-7</h3>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor"</p>
                    </div>
                    <div className="testimonial ">
                    <h3>Testimonial-8</h3>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor"</p>
                    </div>
                </div>
               </Marquee > 
               <Marquee direction='right'>
                <div className="test-2">
                    <div className="testimonial ">
                        <h3>Testimonial-1</h3>
                        <p>"I love the way they work, they are very professional and always deliver on time/</p>
                    </div>
                    <div className="testimonial ">
                    <h3>Testimonial-2</h3>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor"</p>
                    </div>
                    <div className="testimonial ">
                    <h3>Testimonial-3</h3>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor"</p>
                    </div>
                    <div className="testimonial ">
                    <h3>Testimonial-4</h3>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor"</p>
                    </div>
                    <div className="testimonial ">
                    <h3>Testimonial-5</h3>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor"</p>
                    </div>
                    <div className="testimonial ">
                    <h3>Testimonial-6</h3>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor"</p>
                    </div>
                    <div className="testimonial ">
                    <h3>Testimonial-7</h3>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor"</p>
                    </div>
                    <div className="testimonial ">
                    <h3>Testimonial-8</h3>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor"</p>
                    </div>
                </div>
        </Marquee> 
    </div>
  )
}
