import React from 'react';
import { icons, skills } from '../constants/skills';
const Skills = (props) => {
    const listSkills = skills.map((skill) => {
        return (
            <div className="skillCheckbox" key={skill}>
                <label htmlFor={skill} className="skillCheckboxLabel">
                    <input id={skill} type="checkbox" checked={props.skills[skill]}
                        onChange={event => props.handleSkillsChange(skill)} />
                    <img className="skill-icon" src={icons[skill]}
                        alt={skill} />
                    <span className="tooltiptext">{skill}</span>
                </label>
            </div>
        );
    });
    return (
        <div>
            <div className="section-title">Skills</div>
            <div className="skills">
                {listSkills}
            </div>
        </div>
    );
}
export default Skills;