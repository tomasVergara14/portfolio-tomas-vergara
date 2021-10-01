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
                <div className="arrows">
                <ArrowBack onClick={prevSlide} className="arrowBack" style={{fontSize:"larger"}} />
                <ArrowForward onClick={nextSlide} className="arrowFoward" style={{fontSize:"larger"}} />
                </div>
                
                {projectData.map((slide, index)=>{
                    return(
                        <div className={index === current ? 'slide active' : 'slide'} key={index} >
                            {index === current && (<ProjectsCards projectName={slide.name}  image={slide.image} link={slide.git} web={slide.link} tech={slide.tech} />) }
                        </div>
                    )
                })}
                
            </div>
            
        </div>
    )
}

export default Projects
