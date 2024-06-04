import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'


const Contact = () => {
  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get in Touch</h1>
            <img src={theme_pattern} alt="theme pattern"/>
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>I'm currently avialble to take new project , so feel free to contact me</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon}/><p>gkdanuka@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={call_icon}/><p>+94717140248</p>
                    </div>
                    <div className="contact-detail">
                        <img src={location_icon}/><p>CA, United States</p>
                    </div>
                </div>
            </div>
            <form  className="contact-right">
                <label htmlFor=''>Your Name</label>
                <input type='text' placeholder='Enter Your name' name="name"/>
                <label htmlFor=''>Your Email</label>
                <input type='email' placeholder='Enter your email' />
                <label htmlFor=''>Write Your message here</label>
                <textarea name='message' rows="8" placeholder='Enter your message'>Submit now</textarea>
                <button type='submit' className='contact-submit'>Submit-now</button>
            </form>
        </div>
    </div>
  )
}

export default Contact