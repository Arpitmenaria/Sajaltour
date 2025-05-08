import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>

      <div className="contact-info">
        <div className="info-block">
          <h3>📞 Call Us</h3>
          <p><a href="tel:8003320284">8003320284</a>, <a href="tel:6375905962">6375905962</a></p>
        </div>

        <div className="info-block">
          <h3>📧 Email Us</h3>
          <p><a href="mailto:info@sajaltours.com">info@sajaltours.com</a></p>
        </div>

        <div className="info-block">
          <h3>📍 Location</h3>
          <p>Ganesh Plaza, Navrangpura, Ahmedabad</p>
        </div>
      </div>

      {/* Google Maps Embed */}
      <div className="map-section">
      <iframe
  title="Gokul Bliss Apartment Location"
  src="https://www.google.com/maps?q=Gokul+Bliss+APPARTMENT,+JP73%2BX2H,+Gaurav+Path,+Pulla+Bhuwana,+Bhuwana,+Udaipur,+Rajasthan+313001&output=embed"
  width="100%"
  height="350"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

      </div>
    </div>
  );
};

export default ContactUs;
