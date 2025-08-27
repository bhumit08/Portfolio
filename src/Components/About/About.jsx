import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'

const About = () => {
  return (
    <div className='about'>
       <div className='about-title'>
        <h1>About me</h1>
        <img src={theme_pattern} alt=""/>
       </div>
       <div className='about-service'>
        <div className="about-left">
          <img src={profile_img} alt=" "/>
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>I am an experienced Full Stack Developer with over a six months of experence in this field. Throughout my career i have had the privlege of collaborating with prestigious organization</p>
          </div>
          <div className='about-skills'>
            <div className='about-skill'><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
            <div className='about-skill'><p>JavaScript</p><hr style={{width:"70%"}}/></div>
            <div className='about-skill'><p>React.Js</p><hr style={{width:"80%"}}/></div>
            <div className='about-skill'><p>Node.Js</p><hr style={{width:"70%"}}/></div>
            <div className='about-skill'><p>Express.Js</p><hr style={{width:"70%"}}/></div>
          </div>
        </div>
       </div>
       <div className='about-achievements'>
        <div className='about-achivement'>
          
        </div>
       </div>
    </div>
  )
}

export default About
