import React, { useState } from 'react'
import "./navbar.css"
import logo from "../../assets/GPT-3.svg"
import { RiCloseLine, RiMenu3Line } from 'react-icons/ri'


const MenuLinks = () => (
  <>
  <p> <a href='#home'>Home</a></p>
  <p> <a href='#About'>What is GPT</a></p>
  <p> <a href='#Features'>Open AI</a></p>
  <p> <a href='#possibilit'> Case Studies</a></p>
  <p> <a href='#blog'>Library</a></p>
  </>
)

const Navbar = () => {



  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3_navbar-links_logo'>
          <img  src={logo} alt="logo"/>
        </div>
        <div className='gpt3_navbar-links_container'>
       <MenuLinks />
       </div>
      </div>
      <div className='gpt3_navbar-sign'>
        <p>Sign in</p>
        <button type='button'>Sign Up</button>
      </div>
      <div className='gpt3_navbar-menu'>
          {toggleMenu ? <RiCloseLine color="#fff" size="27" onClick= {() => setToggleMenu(false)}/>
          :<RiMenu3Line color="#fff" size="27" onClick= {() => setToggleMenu(true)}/>
          }
          { toggleMenu && (
            <div className='gpt3_navbar-menu_container  scale-up-center'>
              <div className='gpt3_navbar-menu_container-links'>  <MenuLinks />
              <div className='gpt3_navbar-links_container-sign'>
               <p>Sign in</p>
               <button type='button'>Sign Up</button>
               </div>
              </div>

             </div>
          )}
      </div>
    </div>
  )
}

export default Navbar