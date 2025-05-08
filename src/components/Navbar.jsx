import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import {
  FaPhoneAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaBars,
} from "react-icons/fa";

const Navbar = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setCurrentDateTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Top Header */}
      <div className="top-header">
        <div className="social-icons">
          <FaFacebookF />
          <FaTwitter />
          <FaInstagram />
          <FaLinkedinIn />
        </div>
        <div className="header-center">
          <span className="header-text">Welcome to Sajal Tours!</span>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="main-navbar">
        <div className="hamburger" onClick={toggleMobileMenu}>
          <FaBars />
        </div>
        <ul className={isMobileMenuOpen ? "open" : ""}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/scooty-rental">Scooty Rental</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
