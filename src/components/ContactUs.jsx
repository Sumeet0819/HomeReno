import React, { useState,useEffect } from 'react'
import emailjs from 'emailjs-com'
import './ContactUs.css'

export default function ContactUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Replace with your EmailJS service info
    const serviceId = 'service_aqd98lo' // from EmailJS after configuring SMTP
    const templateId = 'template_6m3x2hb'    // from EmailJS email template
    const userId = 'HOtnQ9psSaBllUHIn'            // from EmailJS dashboard

    emailjs.send(serviceId, templateId, formData, userId)
      .then((result) => {
        console.log(result.text)
        alert('Message sent successfully!')

        // Clear the form after the message is successfully sent
        setFormData({
          name: '',
          email: '',
          message: ''
        })
      }, (error) => {
        console.log(error.text)
        alert('Failed to send message, please try again.')
      })
  }

  return (
    <div className="contact-page">
      <div className="container-us">
        <h1>Contact Us</h1>
        
        <div className="contact-grid">
          <div className="contact-form">
            <h2>Send us a message</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required>
                </textarea>
              </div>
              <button className="new-btn" type="submit">Send Message</button>
            </form>
          </div>

          <div className="contact-info">
            <h2>Contact Information</h2>
            {/* <p>123 Minimalist Street, Design City, 12345</p> */}
            <p>Email: omluxebrush@gmail.com</p>
            <p>Phone: +44 07597211128</p>
            
            <div className="map">
              [Available soon]
            </div>
          </div>
        </div>

        <div className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-item">
            <h3>What are your business hours?</h3>
            <p>We are open Monday to Friday, 9 AM to 5 PM EST.</p>
          </div>
          <div className="faq-item">
            <h3>How long does it take to get a response?</h3>
            <p>We aim to respond to all inquiries within 24 business hours.</p>
          </div>
          <div className="faq-item">
            <h3>Do you offer refunds?</h3>
            <p>Yes, we offer a 30-day money-back guarantee on all our products.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
