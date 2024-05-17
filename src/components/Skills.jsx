import React from "react";
import "./Skills.css";
import SkillsSection from "./SkillsSection";

function Skills(){
  return <div className="skills">
    <SkillsSection title="Front-end"/>
    <SkillsSection title="Back-end"/>
    <SkillsSection title="Others"/>
  </div>
}

export default Skills;