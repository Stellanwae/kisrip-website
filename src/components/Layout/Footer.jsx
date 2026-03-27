import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Kenya Settlements</h3>
          <p>Transforming informal settlements for sustainable urban living in Kenya.</p>
        </div>
        
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/news">News & Updates</Link></li>
            <li><Link to="/reports">Reports</Link></li>
            <li><Link to="/about">About Us</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Contact</h3>
          <ul>
            <li>Email: kisrp.pm@gmail.com</li>
            <li>Phone: +254 20 123 4567</li>
            <li>Address: Ardhi House, 2nd Floor, 1st Ngong Avenue,Nairobi, Kenya</li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Follow Us</h3>
          <ul>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2026 Kenya Informal Settlements Redevelopment Program. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;