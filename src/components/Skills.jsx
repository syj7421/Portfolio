import React from "react";
import "./Skills.css";
import SkillsItem from "./SkillsItem";

const frontEndSkills = [
{
  name: 'Javascipt',
  loc: require("../Assets/Images/JavaScript-logo.png"),
},{
  name: 'Typescript',
  loc: require("../Assets/Images/typescript-logo.png"),
},{
  name: 'React',
  loc: require("../Assets/Images/react-logo.png"),
}
];
const backEndSkills = [{
  name: 'Node.js',
  loc: require("../Assets/Images/node-logo.png"),
},{
  name: 'Python',
  loc: require("../Assets/Images/python-logo.jpg"),
},];
const otherSkills = [{
  name: 'C++',
  loc: require("../Assets/Images/cpp-logo.png"),
}];

function Skills(){
  return <div className="skills" id="skills">
    <SkillsItem title="Front-end" skillsList={frontEndSkills}/>
    <SkillsItem title="Back-end" skillsList={backEndSkills}/>
    <SkillsItem title="Others" skillsList={otherSkills}/>
  </div>
}

export default Skills;