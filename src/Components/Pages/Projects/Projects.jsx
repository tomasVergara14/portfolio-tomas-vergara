import React from 'react'

import ProjectsIcon from '../../Elements/Icons/ProjectsIcon'
import ProjectsCards from '../../Elements/Cards/ProjectsCards'

import './Projects.css'

const Projects = () => {
    return (
        <div className="projectsCard">
            <div className="ProjectsTitle">
                <ProjectsIcon/>
            </div>
            <div className="projectsList"> 
                <ProjectsCards projectName="Portfolio" image="Portfolio.png" link="https://github.com/tomasVergara14/portfolio-tomas-vergara" web="http://to-do-express.herokuapp.com/" />
                <ProjectsCards projectName="CoffeShop" image="CoffeShop.png " link="https://github.com/tomasVergara14/proyecto-coffe" web="https://proyecto-coffeshop.web.app/" />
                <ProjectsCards projectName="Api Countries" image="ApiCountries.png" link="https://github.com/tomasVergara14/countries-react" web="https://country-react-14.herokuapp.com/" />
                <ProjectsCards projectName="To Do" image="toDo.png" link="https://github.com/tomasVergara14/to-do-vainilla" web="http://to-do-express.herokuapp.com/" />
            </div>
            
        </div>
    )
}

export default Projects
