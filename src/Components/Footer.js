import React from 'react';
import './styles/Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h3>Company Name</h3>
          <p>About Us</p>
          <p>Contact Us</p>
        </div>
        <div className="footer-center">
          <h3>Explore</h3>
          <p>Services</p>
          <p>Blog</p>
          <p>Gallery</p>
        </div>
        <div className="footer-right">
          <h3>Connect With Us</h3>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Pet Website. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
