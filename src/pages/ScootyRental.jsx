import React from "react";

const ScootyRental = () => {
  return (
    <div className="scooty-container">
      <div className="scooty-header">
        <h1>Scooty Rental Services in Udaipur</h1>
        <p>
          Explore the city of lakes on two wheels! We offer the most affordable and hassle-free scooty rental services in Udaipur.
        </p>
      </div>

      <div className="scooty-features">
        <div className="feature-card">
          <img src="/images/activa.jpg" alt="Honda Activa Rental" />
          <h3>Honda Activa 6G</h3>
          <p>Rent starts at ₹300/day. Mileage friendly, perfect for local sightseeing.</p>
        </div>

        <div className="feature-card">
          <img src="/images/access.jpg" alt="Suzuki Access Rental" />
          <h3>Suzuki Access 125</h3>
          <p>Great performance and comfort. Ideal for couples and solo travellers.</p>
        </div>

        <div className="feature-card">
          <img src="/images/dio.jpg" alt="Honda Dio Rental" />
          <h3>Honda Dio</h3>
          <p>Stylish and reliable. Easy to ride with good suspension and pickup.</p>
        </div>
      </div>

      <div className="scooty-contact">
        <h2>Book Now</h2>
        <p>Call us: <a href="tel:8003320284">8003320284</a> | <a href="tel:6375905962">6375905962</a></p>
        <p>WhatsApp us: <a href="https://wa.me/918003320284" target="_blank" rel="noopener noreferrer">8003320284</a></p>
      </div>
    </div>
  );
};

export default ScootyRental;
