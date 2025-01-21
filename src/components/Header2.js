import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Header2.css';

function Header2() {
  return (
    <div className="header">
      <div className="profile">
        <p className='name'>Sahar Fathi</p>
        <p className='top'>Software Engineering Co-op Student</p>
        <p className='top'>3rd year @ McGill University</p>
      </div>
      <div className="social-icons">
        <a className= 'icon' href="https://github.com/fathisahar" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a className= 'icon' href="https://www.linkedin.com/in/sahar-fathi/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
      </div>
    </div>
  );
}

export default Header2;
