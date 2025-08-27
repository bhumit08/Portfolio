import React from 'react'
import './Hero.css'
import profile_img1 from '../../assets/profile_img1.png'

const Hero = () => {
  return (
    <div className='hero'>
      <img className="profile_img" src={profile_img1} alt=""/>
      <h1><span>I'm Bhumit Thumar,</span> Full Stack Developer</h1>
      <p>I am student and learn related Software devloping.</p>
      <div className='hero-action'>
        <div className="hero-connect">Connect With Me</div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  )
}

export default Hero
