import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.svg'

function Footer() {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={footer_logo}/>
                <p>I am a frontend developer from USA with 10 years of experience i companies</p>
            </div>
            <div className="foote-top-right">
                <div className="footer-email-input">
                    <img src={user_icon}/>
                    <input type='email' placeholder='Enter your email'/>
                </div>
                <div className="footer-subscribe">
                    Subscribe
                </div>
            </div> 
        </div>
        <hr />  
        <div className="footer-bottom">
            <p className='footer-bottom-left'>© 2023 Alex Bennett. All rights reserved.</p>
            <div className="footer-bottom-right">
                <p>Terms pf Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer