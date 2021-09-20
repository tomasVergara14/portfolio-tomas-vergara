import React from 'react'

import GitHubIcons from '../../Elements/Icons/GitHubIcons'
import LinkedInIcons from '../../Elements/Icons/LinkedInIcons'

import ContactForm from '../../Elements/ContactForm/ContactForm'

import './Contact.css'

const Contact = () => {
    return (
        <div className="ContactMe">
            <div className="IconsContact">
                <h4>LinkedIn</h4>
                <LinkedInIcons/>
            </div>
            <div className="IconsContact">
                <h4>GitHub</h4>
                <GitHubIcons />
            </div>
            <ContactForm/>
            
        </div>
        
    )
}

export default Contact
