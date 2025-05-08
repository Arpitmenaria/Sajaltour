import React from 'react';
import "./App.css"
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import WhatsAppIcon from './components/WhatsAppIcon';
import Home from './pages/Home';
import TaxiService from './pages/TaxiService';
import ScootyRental from './pages/ScootyRental';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import Footer from './components/Footer';

const App = () => (
  <div>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/taxi-service" element={<TaxiService />} />
      <Route path="/About" element={<AboutUs />} />
      <Route path="/scooty-rental" element={<ScootyRental />} />
      <Route path="/contact" element={<ContactUs />} />
    </Routes>
    <WhatsAppIcon />
    <Footer />
  </div>
);

export default App;