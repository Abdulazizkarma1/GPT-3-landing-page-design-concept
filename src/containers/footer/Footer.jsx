import React from 'react'
import "./footer.css"
import logo from "../../assets/GPT-3.svg"

const Footer = () => {

  const Currentdate = new Date().getUTCFullYear();
  




  return (
    <div className='footer__container '>
        <div className='footer_content'>
            <h1 className='gradient__text'>Do you want to step into the </h1> 
            <p className='gradient__text'>future with others?</p>
            <h6>Request Early Access</h6>
        </div>
        
        <div className='header_two'>
            <div className='footer_logo'>
              <img src={logo } alt='logo'/>
            
            </div>

            <div className='footer-links'>
            <div className='first_link'>
              <p>Links</p>
              <a href='#links'>Blog</a>
              <a href='#links'>Social Media</a>
              <a href='#links'>Counters</a>
              <a href='#links'>Contact</a>
            </div>
            <div className='second_link'>
              <p>Company</p>
              <a href='#links'>Terms and Conditions</a>
              <a href='#links'>Privacy Policy</a>
              <a href='#links'>Contact</a>
            </div>
            <div className='third_link'>
              <p>Get in touch</p>
              <a href='#links'> E Ext 485 Bethel House, Tamale - Ghana </a>
              <a href='#links'>0241656566</a>
              <a href='#links'>alhassanabdulaziz96@gmail.com</a>
            </div>
            </div>


        </div>

        <div className='copyright'>

        <p>Made With ❤️ By Abdul Aziz</p>
      
        <p>&copy; 2023 - {Currentdate} GPT-3, All rights reserved.  </p>
        </div>
    </div>
  )
}

export default Footer