import React from 'react'
import "./feature.css"

const Feature = (props) => {
  return (
    <div className="gpt3_section-features">
    <div className='stying_whatgpt3-section'>
    <div >
      <div className='underline'></div>
      <h1 className='gpt3_features'>{props.name}</h1>
      
      
      <p className='gpt3_text'>{props.title}</p>
      </div>
    </div>
  </div>  
  )
}

export default Feature