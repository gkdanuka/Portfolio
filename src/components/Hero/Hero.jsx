import React from 'react'
import './Hero.css'
import profile_image from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = './src/assets/testCV.PDF';  
    link.download = 'testCV.PDF';  
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

  return (
    <div className='hero'>
        <img src={profile_image} alt='Profile pic'/>
        <h1><span>I'm Alex Bannet,</span>frontend developer based in USA</h1>
        <p>I am a frontend developer from California, USA with 10 years of experience</p>
        <div className='hero-action'>
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
            <div className="hero-resume" onClick={handleDownload}>My Resume</div>  
        </div>
    </div>
  )
}

export default Hero