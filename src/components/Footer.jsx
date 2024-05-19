import React from "react";
import "./Footer.css";  // Make sure to create this CSS file

function Footer() {
  return (
    <footer id="links">
      <div className="social-links">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
        <a href="https://example.com" target="_blank" rel="noopener noreferrer"><i className="fas fa-cube"></i></a>
      </div>
      <p className="copyright">Matthew Williams ©2015</p>
    </footer>
  );
}

export default Footer;
