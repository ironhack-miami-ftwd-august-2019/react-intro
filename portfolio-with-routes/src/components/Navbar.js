// components/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';

const navbar = () => {
  return (
    <nav className="nav-style">
      <ul>
        <li><Link to='/'>Home</Link></li> 
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/education'>education</Link></li>
        <li><Link to='/cool'>cool</Link></li>
        <li><Link to='/projects'>projects</Link></li>

      </ul>
    </nav>
  )
}

export default navbar;