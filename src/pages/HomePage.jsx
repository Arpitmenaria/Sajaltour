import React from 'react';
import './HomePage.css'; // Add your CSS file for HomePage

const HomePage = () => {
  return (
    <div>
      {/* Taxi Service Section */}
      <section className="taxi-service">
        <div className="taxi-service-content">
          <div className="taxi-service-text">
            <h1>Taxi Service in Udaipur</h1>
            <p>
              Looking for reliable and comfortable taxi services in Udaipur? Our fleet of well-maintained cabs is here to make your travel experience memorable. Whether you're traveling solo, with friends, or with family, we offer a range of vehicles to suit your needs.
            </p>
            <button>Book Now</button>
          </div>
          <div className="taxi-service-image">
            <img src="/images/udaipur1.jpg" alt="Taxi Service in Udaipur" />
          </div>
        </div>
      </section>

      {/* You can add other sections here */}
    </div>
  );
};

export default HomePage;
