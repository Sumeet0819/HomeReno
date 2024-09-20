import React, { useState } from "react";
import emailjs from 'emailjs-com';
import "./RequestEstimateButton.css";

export default function RequestEstimateButton() {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const [email, setEmail] = useState("");

  const handleTooltipToggle = () => {
    setIsTooltipVisible(!isTooltipVisible);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSendEstimateRequest = (e) => {
    e.preventDefault();
    
    const templateParams = {
      to_email: email,
      subject: 'Estimate Request',
      message: 'A request for an estimate has been received.',
    };

    emailjs.send('service_aqd98lo', 'template_2grq43b', templateParams, 'HOtnQ9psSaBllUHIn')
      .then((response) => {
        console.log('Email sent successfully:', response);
        setEmail("");
        setIsTooltipVisible(false);
        alert("Estimate request sent successfully!");
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        alert("Failed to send estimate request.");
      });
  };

  return (
    <div className="request-estimate">
      <button className="button-2" onClick={handleTooltipToggle}><span className="btn-txt">Request Estimate</span></button>
      {isTooltipVisible && (
        <div className="tooltip">
          <div className="tooltip-content">
            <span className="close" onClick={handleTooltipToggle}>&times;</span>
            <h2>Request an Estimate</h2>
            <form onSubmit={handleSendEstimateRequest}>
              <label>
                Enter Your Email Address:
                <input 
                  type="email" 
                  value={email} 
                  onChange={handleEmailChange} 
                  required 
                />
              </label>
              <button type="submit" className="button-2">Send Request</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
