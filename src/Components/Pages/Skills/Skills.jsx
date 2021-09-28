import React from 'react'

import SkillsIcons from '../../Elements/Icons/SkillsIcons'
import SkillsCards from '../../Elements/Cards/SkillsCards'

import './Skills.css'

const Skills = () => {
    return (
        <div className="skillsCard">
            <div className="skillsTitle">
            <SkillsIcons/>
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
