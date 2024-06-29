import React from "react";
import "./About.css";

const skills = [
  { skill: "Python", level: 90 },
  { skill: "Javascript", level: 90 },
  { skill: "Typescript", level: 90 },
  { skill: "React", level: 90 },
  { skill: "Node.js", level: 80 },
  { skill: "Django", level: 80 },
  { skill: "Flask", level: 80 },
  { skill: "C#", level: 70 },
  { skill: "Kotlin", level: 60 },
  { skill: "Swift", level: 60 }
];

function About() {
  return <div id="about">
    <h1 className="about-header">ABOUT</h1>
    <div className="profile-skills-container">
      <div className="profile">
        <img src={require('../Assets/Images/profile_pic.jpg')} alt="Profile"/>
        <p className="profile-title">Who's this guy?</p>
        <p className="profile-content">I'm a Full-stack Developer and Cloud Engineer, born in Seoul, South Korea, and raised in Melbourne, Australia. I have a deep passion for creating applications that are both innovative and useful for people.</p>
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
