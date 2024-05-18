import React, { useEffect, useState } from "react";
import "./Hero.css";

function Hero() {
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsActive(prevIsActive => !prevIsActive);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="hero">
      <h1>Welcome to Developer Sooyoung's Portfolio<span className={isActive ? "cursor" : "cursor hidden"}>|</span></h1>
      <a href="#about">Learn about me</a>
    </div>
  );
}

export default Hero;
