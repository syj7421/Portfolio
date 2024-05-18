import React from "react";
import './NavBar.css';

function NavBar(){
  return <nav>
    <ul className="navbar">
        <li><a href="#hero">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contacts">Contact</a></li>
    </ul>
  </nav>
}

export default NavBar;