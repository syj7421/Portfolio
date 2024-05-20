import React from "react";
import "./Footer.css";  // Make sure this CSS file is correctly linked

function Footer() {
  return (
    <footer id="links">
      <div className="social-links">
        <a href="https://www.linkedin.com/in/sooyoungjung" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
        <a href="https://github.com/syj7421?tab=repositories" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
      </div>
      <p className="copyright">Sooyoung Jung ©2024</p>
    </footer>
  );
}

export default Footer;
