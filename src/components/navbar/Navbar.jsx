import React from 'react'

import logo from '../../assets/ai.png'
import './navbar.css'
const Navbar = () => {
  return (
    <div className='ai__navbar'>
      <div className="ai__navbar-links">
        <div className="ai__navbar-links_logo">
          <img src={logo}  alt='logo'/>
        </div>
        <div className="ai__navbar-links_container">
            <p><a href='#home'>Home</a></p>
            <p><a href='#ai'>AI</a></p>
            <p><a href='#possibility'>Chat-GPT</a></p>
            <p><a href='#home'>Features</a></p>
            <p><a href='#blog'>Blog</a></p>
        </div>
        <div className="ai__navbar-sign">
          <p>Sign in</p>
          <button type='button'>Sign up</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar