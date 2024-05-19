import React, { useState, useEffect } from 'react';
import './App.css';
import About from './components/About';
import Contacts from './components/Contacts';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Projects from './components/Projects';


function App() {
  const [isHeroVisible, setIsHeroVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.querySelector('#home'); // Ensure your Hero component has an id of 'hero'
      const heroHeight = hero.offsetHeight;
      const heroTop = hero.getBoundingClientRect().top;

      // Check if Hero is not visible, 0.95 is hard coded because without it there's a bit of glitch that the nav bar doesn't show up when the About page just started
      if (heroTop < -heroHeight * 0.95) {
        setIsHeroVisible(false);
      } else {
        setIsHeroVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {isHeroVisible ? null : <NavBar/>}
      <Hero/>
      <About/>
      <Projects/>
      <Contacts/>
    </div>
  );
}

export default App;
