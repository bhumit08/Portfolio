import React from 'react';
import logo3 from '../../assets/logo3.png';
import './Navbar.css';

const Navbar = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='navbar'>
      <img className='img1' src={logo3} alt="Logo" />
      <ul className='nav-menu'>
        <li onClick={() => scrollToSection('home')} style={{ cursor: 'pointer' }}>Home</li>
        <li onClick={() => scrollToSection('about')} style={{ cursor: 'pointer' }}>About Me</li>
        <li onClick={() => scrollToSection('projects')} style={{ cursor: 'pointer' }}>Projects</li>
        <li onClick={() => scrollToSection('certificate')} style={{ cursor: 'pointer' }}>Certificate</li>
        <li onClick={() => scrollToSection('contact')} style={{ cursor: 'pointer' }}>Contact</li>
      </ul>
      <div className='nav-connect' onClick={() => scrollToSection('contact')} style={{ cursor: 'pointer' }}>
        Connect with Me
      </div>
    </div>
  );
};

export default Navbar;
