import React from 'react';
import { RiMenu3Line, RiCloseLin } from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/logo.svg';
const Navbar = () => {
  return (
    <div className = "portfolio__navbar">
      <div className = "portfolio__navbar-links">
        <div className = "portfolio__navbar-links_logo">
          <img src={logo} alt="logo" style={{height:30, width:118}}/>
        </div>
      </div>
    </div>
  )
}

export default Navbar