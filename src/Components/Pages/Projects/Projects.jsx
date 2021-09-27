import React,{useState} from 'react'

import ProjectsIcon from '../../Elements/Icons/ProjectsIcon'
import ProjectsCards from '../../Elements/Cards/ProjectsCards'

import { ArrowBack } from '@material-ui/icons'
import { ArrowForward } from '@material-ui/icons'

import { projectData } from '../../../data/projectsData'

import './Projects.css'

const Projects = ({slides}) => {

    const [current, setCurrent]= useState(0)
    const length = slides.length

    const prevSlide = ()=>{
        setCurrent(current === 0 ? length - 1 : current - 1)
    }
    const nextSlide = ()=>{
        setCurrent(current === length -1? 0 : current + 1)
    }
    console.log(current)


    return (
        <div className="projectsCard">
            <div className="ProjectsTitle">
                <ProjectsIcon/>
            </div>
            <div className="projectsList"> 
                <ArrowBack onClick={prevSlide} />
                {projectData.map((slide, index)=>{
                    return(
                        <div key={index} >
                            {index === current && (<ProjectsCards projectName={slide.name}  image={slide.image} link={slide.git} web={slide.link} />) }
                        </div>
                    )
                })}
                <ArrowForward onClick={nextSlide} />
                {/* <ProjectsCards projectName="Portfolio" image="Portfolio.png" link="https://github.com/tomasVergara14/portfolio-tomas-vergara" />
                <ProjectsCards projectName="CoffeShop" image="CoffeShop.png " link="https://github.com/tomasVergara14/proyecto-coffe" web="https://proyecto-coffeshop.web.app/" />
                <ProjectsCards projectName="Api Countries" image="ApiCountries.png" link="https://github.com/tomasVergara14/countries-react" web="https://country-react-14.herokuapp.com/" />
                <ProjectsCards projectName="To Do" image="toDo.png" link="https://github.com/tomasVergara14/to-do-vainilla" web="http://to-do-express.herokuapp.com/" /> */}
            </div>
            
        </div>
    )
}

export default Projects
