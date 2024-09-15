import React from 'react'
import './ContactUs.css'

export default function ContactUs() {
//   const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log('Form submitted')
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
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" required></textarea>
              </div>
              <button className="new-btn" type="submit">Send Message</button>
            </form>
          </div>

          <div className="contact-info">
            <h2>Contact Information</h2>
            <p>123 Minimalist Street, Design City, 12345</p>
            <p>Email: hello@minimalist.com</p>
            <p>Phone: (123) 456-7890</p>
            
            <div className="map">
              [Map placeholder - Replace with actual map component]
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