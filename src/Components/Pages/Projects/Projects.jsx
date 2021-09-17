import React from 'react'

import ProjectsIcon from '../../Elements/Icons/ProjectsIcon'

import './Projects.css'

const Projects = () => {
    return (
        <div className="projectsCard">
            <div className="ProjectsTitle">
                <ProjectsIcon/>
            </div>
            <p className="bodyProjects">My name is Tomas, I am 25 years old and I live in Cordoba.</p>
            <p> An organized person who enjoys learning new skills, web development, sports and cooking. </p>
        </div>
    )
}

export default Projects
