import React from 'react';
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

const Header = () => {
  return (
    <div className='gpt3_header-section section_padding' id="home">
    <div className='gpt3_header-content'>
      <h1 className='gradient__text'> Let's Build Something Amazing with Modern Design Concept</h1>

      <div className='gpt3_header-content'>
      <p>This is GPT-3, This website has no functionility. I built this so i can master modern web designs. It is a Figma Design which has been coded into an actual website. In future, I may add functionality to It
        Thank you. </p>
      <div className='gpt3_header_content-input'> 
        <input type="email" placeholder='Your email address' />
        <button type='button'>Get Started</button>
        </div>
      </div>


      <div className='gpt3_header_content-people'>
        <img src={people} alt="people"/>
        <p>1,600 people requested access to a visit in last 24 hours </p>
      </div>
    </div> 
      <div className='gpt_header-image'>
      <img src={ai} alt="header"/>
      
    </div>
    </div>

  )
}

export default Header