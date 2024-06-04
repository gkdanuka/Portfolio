import React from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'

function MyWork() {
  return (
    <div id='portfolio' className="mywork">
        <div className="mywork-title">
            <h1>My Latest Work</h1>
            <img src={theme_pattern} alt='Theme Pattern'/>
        </div>
        <div className="mywork-container">
            {mywork_data.map((work,index)=>{
                return <img src={work.w_img} key={index} alt='My Work image'/>
            })}
        </div>
        <div className="mywork-showmore">
          <p>Show more</p>
          <img src={arrow_icon} alt="Arrow icon" />
        </div>
    </div>
  )
}

export default MyWork