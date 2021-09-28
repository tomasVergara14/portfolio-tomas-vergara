import React from 'react'

import SkillsIcons from '../../Elements/Icons/SkillsIcons'
import SkillsCards from '../../Elements/Cards/SkillsCards'

import CheckIcon from '../../Elements/Icons/CheckIcon'

import './Skills.css'

const Skills = () => {
    return (
        <div className="skillsCard">
            
            <div className="skillsTitle">
            <SkillsIcons/>
            </div>
            <div className="certification">
            <CheckIcon/>
            <p> REACT JS - CoderHouse</p>
            </div>
            <div className="certification">
            <CheckIcon/>
            <p> DESARROLLO WEB FULL STACK - Digital House Argentina.</p>
            </div>
            <div className="certification">
            <CheckIcon/>
            <p> PRODUCTIVIDAD PERSONAL - Santa Maria la Real.</p>
            </div>
            <div className="skillsList">
                <SkillsCards skill="HTML"/>
                <SkillsCards skill="CSS"/>
                <SkillsCards skill="JS"/>
                <SkillsCards skill="NODE JS"/>
                <SkillsCards skill="Trello"/>
                <SkillsCards skill="REACT JS"/>
                <SkillsCards skill="Material UI"/>
                <SkillsCards skill="SCRUM"/>
            </div>
            
        </div>
    )
}

export default Skills
