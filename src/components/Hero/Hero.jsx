import React from 'react'
import './Hero.css'
import profile_image from '../../assets/profile_img.svg'

const Hero = () => {
  return (
    <div className='hero'>
        <img src={profile_image} alt='Profile pic'/>
        <h1><span>I'm Alex Bannet,</span>frontend developer based in USA</h1>
        <p>I am a frontend developer from California, USA with 10 years of experience</p>
        <div className='hero-action'>
            <div className="hero-connect">Connect with me</div>
            <div className="hero-resume">My Resume</div>  
        </div>
    </div>
  )
}

export default Hero