import React from 'react'
import "./features.css"
import { Feature } from '../../components/export'

const Features = () => {
  return (
    <div className='section_margin section_container'>
       <div className='Features_section'>
            <div className='features_heading' >
              <h1 className='gradient__text'> The Future Is Now And You Need To Realize It. Step Into Future Today & Make It Happen</h1>
              <p id='colour'>Request Early Access To Get Started</p>
            </div>


          <div className='features_note-section'>
            <div className='features_note'>
              <Feature name = "Age of Arteficial Intelligence"/>
              <Feature name = "Become what you Aspire " />
              <Feature name = "AI Accepted Globally" />
              <Feature name = "ChatGPT-3 Is here to Stay" />

            </div>

            <div className='features_explain'>
            <Feature 
               title  = "From the age, we tend to make things happen in a real world where expectations actually comes to reality amd things will actually come back to Normal with respect to time"
            />
            <Feature 
               title  = "From the age, we tend to make things happen in a real world where expectations actually comes to reality amd things will actually come back to Normal with respect to time"
            />
            <Feature 
               title  = "From the age, we tend to make things happen in a real world where expectations actually comes to reality amd things will actually come back to Normal with respect to time"
            />
            <Feature 
               title  = "From the age, we tend to make things happen in a real world where expectations actually comes to reality amd things will actually come back to Normal with respect to time"
            />
             
            </div>
            
              
          
             
  
            </div>
       </div>
    </div>
  )
}

export default Features