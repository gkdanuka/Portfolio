import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'

function About() {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About Me</h1>
            <img src={theme_pattern} alt='theme pattern'/>
        </div>
        <div className='about-section'>
            <div className="about-left">
                <img src={profile_img} alt="profile image"/>
            </div>
            <div className="about-right">
                <div className="about-para">
                <p>I am experience frontend developer with over 10 year of experience</p>
                <p>Passion is for front end development is not only for</p>
                </div>
                
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p> <hr style={{width:"50%"}} /></div>
                <div className="about-skill"><p>React Js</p> <hr style={{width:"70%"}} /></div>
                <div className="about-skill"><p>Javascript</p> <hr style={{width:"60%"}} /></div>
                <div className="about-skill"><p>Next Js</p> <hr style={{width:"50%"}} /></div>
            </div>
        </div>
        <div className="about-achievments">
            <div className="about-achivement">
                <h1>10+</h1>
                <p>years of experience</p>
            </div>
            <hr/>
            <div className="about-achivement">
                <h1>90+</h1>
                <p>Projects Completed</p>
            </div>
            <hr/>
            <div className="about-achivement">
                <h1>15+</h1>
                <p>Happy Cliets</p>
            </div>
        </div>
    </div>
    
  )
}

export default About