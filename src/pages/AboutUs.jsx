import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-container">
      <section className="about-header">
        <h1>About Sajal Tours</h1>
        <p>
          Welcome to Sajal Tours – your trusted travel partner in Udaipur. Whether you're a tourist or a local resident, our mission is to provide reliable, comfortable, and affordable transport solutions.
        </p>
      </section>

      <section className="about-section taxi-service">
        <h2>Our Taxi Services</h2>
        <p>
          We specialize in full-day and half-day taxi rentals in Udaipur. Whether it's a city tour, airport pickup/drop, or an outstation trip, our fleet is ready to serve you 24/7.
        </p>
        <ul>
          <li>Airport transfers and Railway station pickups</li>
          <li>Udaipur sightseeing tours</li>
          <li>Outstation trips to Mount Abu, Kumbhalgarh, Chittorgarh & more</li>
          <li>Experienced local drivers with clean, sanitized cars</li>
        </ul>
      </section>

      <section className="about-section scooty-service">
        <h2>Our Scooty Rental Services</h2>
        <p>
          Want to explore Udaipur your own way? Rent a scooty with us! It's budget-friendly, fun, and gives you the freedom to explore every corner of this beautiful city at your pace.
        </p>
        <ul>
          <li>Affordable daily and hourly rates</li>
          <li>Options like Honda Activa, Dio, and Suzuki Access</li>
          <li>Helmets included for safety</li>
          <li>Easy pickup and drop services available</li>
        </ul>
      </section>

      <section className="about-contact">
        <h2>Contact Us</h2>
        <p>📞 Call us at: <a href="tel:8003320284">8003320284</a>, <a href="tel:6375905962">6375905962</a></p>
        <p>📱 WhatsApp us at: <a href="https://wa.me/918003320284" target="_blank" rel="noopener noreferrer">8003320284</a></p>
        <p>📧 Email: <a href="mailto:info@sajaltours.com">info@sajaltours.com</a></p>
      </section>
    </div>
  );
};

export default AboutUs;
