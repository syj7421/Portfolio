import React, { useState } from 'react';
import './Projects.css';

function Projects() {
  const cards = [
    { title: 'Project1', languages: 'Python' },
    { title: 'Project2', languages: 'Javascript' },
    { title: 'Project3', languages: 'Typescript' },
    { title: 'Project4', languages: 'React' },
    { title: 'Project5', languages: 'Java' },
    { title: 'Project6', languages: 'Kotlin' },
    { title: 'Project7', languages: 'Go' },
    { title: 'Project8', languages: 'Python' },
    { title: 'Project9', languages: 'React' },
  ];
  const [hoverStates, setHoverStates] = useState(Array(cards.length).fill(false));

  function handleMouseEnter(index) {
    setHoverStates(current =>
      current.map((state, i) => i === index ? true : state));
  }

  function handleMouseLeave(index) {
    setHoverStates(current =>
      current.map((state, i) => i === index ? false : state));
  }

  return (
  <div id="projects">
    <h1>Projects</h1>
    <div className="grid-container">
      {cards.map((card, i) => (
    <div key={i} className={`card card-${i}`} onMouseEnter={() => handleMouseEnter(i)} onMouseLeave={() => handleMouseLeave(i)}>
      <div className="card-content" style={{ opacity: hoverStates[i] ? 1 : 0 }}>
        <p className="title">{card.title}</p>
        <p className="languages">{card.languages}</p>
        <button>LEARN MORE</button>
      </div>
    </div>
      ))}
      </div>
    </div>
  );
}

export default Projects;
