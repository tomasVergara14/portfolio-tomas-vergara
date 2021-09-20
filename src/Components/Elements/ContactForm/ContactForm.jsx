import React from 'react'

import emailjs from 'emailjs-com'

import './ContactForm.css'

const ContactForm = () => {

    
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_contact2021', 'template_g8aqs6d', e.target, 'user_2ekQ7iS2iExODDxugREGx')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      }

    return (
        <form className="contactForm" onSubmit={sendEmail}>
            
            <h4 className="TitleContactForm">Please leave your information and i will contact you.</h4>
            <div className="EachFormcContainer">
                <label className="ContactLabel" >Name</label>
                <input className="ContactInput" placeholder="Leave your name" type="text" name="user_name" />
            </div>
            <div className="EachFormcContainer">
                <label className="ContactLabel" >Email</label>
                <input className="ContactInput" placeholder="Leave your email" type="email" name="user_email" />
            </div>
            <div className="EachFormcContainer">
                <label className="ContactLabel" >Number</label>
                <input className="ContactInput" placeholder="Leave your number" type="text" name="contact_number" />                    
            </div>
            <div className="ContainerSend">
                <input className="ContactSendButton"  type="submit" value="Send" />
            </div>
        
        </form>
    )
}

export default ContactForm
