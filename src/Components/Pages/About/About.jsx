import React from 'react'

import AboutMeIcon from '../../Elements/Icons/AboutMeIcon'

import './About.css'

const About = () => {
    return (
        <div className="aboutCard">
            <div className="aboutTitle">
                <AboutMeIcon/>
            </div>
            <p> An organized person who enjoys learning new skills, web development, sports and cooking. </p>
        </div>
        
    )
}

export default About
