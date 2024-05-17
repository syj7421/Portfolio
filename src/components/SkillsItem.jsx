import React from "react";
import "./SkillsItem.css";

function SkillsItem(props){
  return  <div className="skills-item">
    <h2>{props.title}</h2>
    <div>
      {props.skillsList.map((skill) => {
        return <div key={skill.name} className="skill-container"><img src={skill.loc} alt={skill.name}/></div>
      })}

    </div>
</div>
}

export default SkillsItem;