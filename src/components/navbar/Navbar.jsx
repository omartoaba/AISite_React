import React, { useState } from 'react'
import {RiCloseLine,RiMenu3Line} from 'react-icons/ri'
import logo from '../../assets/ai.png'
import './navbar.css'
const Menu = () => {
  return(
  <>   
    <p><a href='#home'>Home</a></p>
    <p><a href='#ai'>AI</a></p>
    <p><a href='#possibility'>Chat-GPT</a></p>
    <p><a href='#features'>Features</a></p>
    <p><a href='#blog'>Blog</a></p>
  </>)
}
const Navbar = () => {
  const [toggleMenu,setToggleMenu] = useState(false); 
  return (
    <div className='ai__navbar'>
      <div className="ai__navbar-links">
        <div className="ai__navbar-links_logo">
          <img src={logo}  alt='logo'/>
        </div>
        <div className="ai__navbar-links_container">
            <Menu/>
        </div>
      </div>
      <div className="ai__navbar-sign">
          <p>Sign in</p>
          <button type='button' >Sign up</button>
      </div>
      <div className="ai__navbar-menu">
           {toggleMenu ? 
              <RiCloseLine color='white' size={20} onClick={() => setToggleMenu(false)}/> :
              <RiMenu3Line color='#fff' size={20} onClick={() => setToggleMenu(true)}/>}
           {toggleMenu && (
              <div className='ai__navbar-menu_container scale-up-center'>
                <div className="ai__navbar-menu-links_container">
                  <Menu/>
                </div>
                <div className="ai__navbar-menu_container-links-sign">
                     <p>Sign in</p>
                    <button type='button'>Sign up</button>
                </div>
              </div>
           )
           }
        </div>
    </div>
  )
}

export default Navbar