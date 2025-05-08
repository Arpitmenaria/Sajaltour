import React from "react";
import "./Footer.css"
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Top Section */}
      <div className="footer-top">
        <div className="footer-contact">
          <div>
            <FaPhoneAlt />
            <a href="tel:8003320284">Call us: 8003320284</a>
          </div>
          <div>
            <FaEnvelope />
            <a href="mailto:sajaltours@gmail.com">Mail us: sajaltours@gmail.com</a>
          </div>
          <div>
            <FaMapMarkerAlt />
            <p>Locate us: Gokul Bliss Apartment, Opp. Celebration Mall, Udaipur </p>
          </div>
        </div>

        <div className="footer-description">
          <h2>Sajal Tours</h2>
          <p>
            Welcome to Sajal Tour Service, where every journey is an
            adventure waiting to happen.
          </p>
          <div className="footer-socials">
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/scooty-rental">Scooty Rental</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Sajal Tours | All rights reserved | Developed by SST Web Designing</p>
      </div>
    </footer>
  );
};

export default Footer;
