import React, { useEffect, useState } from "react";
import "./Hero.css";
import Icon from '@mdi/react/Icon'; // Ensure this is correctly imported
import { mdiArrowRight } from '@mdi/js'; // This provides the path data for the icon

function Hero() {
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsActive(prevIsActive => !prevIsActive);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="home">
      <h1>Welcome to Developer Sooyoung's Portfolio<span className={isActive ? "cursor" : "cursor hidden"}>|</span></h1>
      <a href="#about">
        <span>Learn about me</span> 
        <Icon path={mdiArrowRight} className="arrow"/>
      </a>
    </div>
  );
}

export default Hero;
