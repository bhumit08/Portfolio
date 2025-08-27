import React from 'react'
import logo3 from '../../assets/logo3.png'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img className='img1' src={logo3} alt=" "/>
      <ul className='nav-menu'>
        <li>Home</li>
        <li>About Me</li>
        <li>Services</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
      <div className='nav-connect'>Connect with Me</div>
    </div>
  )
}

export default Navbar
