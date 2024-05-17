import React from "react";
import "./SkillsSection.css";

function SkillsSection(props){
  return  <div className="skills-section">
    <h2>{props.title}</h2>
    <div>
      {props.skillsList.map((skill) => {
        return <div key={skill.name} className="skill-container"><img src={skill.loc} alt={skill.name}/></div>
      })}

    </div>
</div>
}

export default SkillsSection;