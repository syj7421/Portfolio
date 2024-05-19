import React from "react";
import "./About.css";

const skills = [
  { skill: "CSS", level: 80 },
  { skill: "HTML", level: 75 },
  { skill: "React", level: 70 },
  { skill: "JavaScript", level: 85 },
  { skill: "NextJS", level: 60 },
  { skill: "Node.js", level: 65 },
  { skill: "Ruby/Rails", level: 50 },
  { skill: "Python", level: 55 },
  { skill: "Figma", level: 45 },
  { skill: "Illustrator", level: 40 }
];

function About() {
  return <div id="about">
    <h1 className="about-header">ABOUT</h1>
    <div className="bold-line">-</div>
    <div className="profile-skills-container">
      <div className="profile-section">
        <img src={require('../Assets/Images/github-logo.png')} alt="Profile"/>
        <p className="profile-title">Who's this guy?</p>
        <p className="profile-content">I'm a Front-End Developer for ChowNow in Los Angeles, CA.
          I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences.</p>
      </div>
      <div className="skill-charts">
        {skills.map(skill => (
          <div className="skill-chart" key={skill.skill}>
            <div className="label">{skill.skill}</div>
            <div className="skill-bar">
              <div className="skill-level" style={{'--skill-level': `${skill.level}%`}}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
}


export default About;
