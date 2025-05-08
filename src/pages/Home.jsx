import React, { useEffect, useState } from "react";
import './Home.css';

const images = [
    "/images/slider1.jpg",
    "/images/slider2.jpg",
    "/images/slider3.jpg",
  ];

const Home = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
          setCurrent((prev) => (prev + 1) % images.length);
        }, 3000); // 3 seconds
        return () => clearInterval(interval);
      }, []);

  return (
    <>
    {/* Slider Section */}
    <div className="slider-container">
        {images.map((image, index) => (
          <div
            key={index}
            className={`slide ${index === current ? "active" : ""}`}
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ))}
      </div>
    <div className="home-container">
      {/* Taxi Service Section */}
       {/* Taxi Service Section */}
       <section className="taxi-service">
        <div className="taxi-service-content">
          <div className="taxi-service-text">
            <h1>Taxi Service in Udaipur</h1>
            <p>
              Looking for reliable and comfortable taxi services in Udaipur? Our fleet of well-maintained cabs is here to make your travel experience memorable. Whether you're traveling solo, with friends, or with family, we offer a range of vehicles to suit your needs.
            </p>
            <div className="contact-links">
              <p>
                📞 <a href="tel:8003320284">Call Now: 8003320284</a>
              </p>
              <p>
                📞 <a href="tel:6375905962">Call Now: 6375905962</a>
              </p>
              <p>
                💬 <a href="https://wa.me/918003320284" target="_blank" rel="noopener noreferrer">WhatsApp: 8003320284</a>
              </p>
            </div>
          </div>
          <div className="taxi-service-image">
            <img src="/images/udaipur1.jpg" alt="Taxi Service in Udaipur" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Services for which our taxi is booked in Udaipur for</h2>
        <div className="services-grid">
          <div className="service-card">
            <img src="/images/sightseen.jpg" alt="Udaipur Sightseeing" />
            <h3>Udaipur Sightseeing</h3>
          </div>
          <div className="service-card">
            <img src="/images/outstation.jpg" alt="Outstation Trips from Udaipur" />
            <h3>Outstation Trips from Udaipur</h3>
          </div>
          <div className="service-card">
            <img src="/images/airport.jpg" alt="Udaipur Airport Taxi" />
            <h3>Airport Taxi</h3>
          </div>
          <div className="service-card">
            <img src="/images/wedding.jpg" alt="Taxi for Weddings" />
            <h3>Taxi for Weddings</h3>
          </div>
        </div>
      </section>

    </div>
    </>
  );
};

export default Home;
