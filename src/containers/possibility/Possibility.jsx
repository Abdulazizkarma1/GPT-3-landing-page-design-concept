import React from 'react'
import "./possibility.css"
import featureImage from "../../assets/featureImage.png"

const Possibility = () => {
  return (
    <div className='section_margin possibility_section'>
        <div className='possi_image'>
          <img src={featureImage} alt='possibility' />
        </div>

        <div className='request_section'>
          <p className='firstp'>Request Early Access to Get Started</p>

          <h1 className='gradient__text'> The Possibilities Are Beyond Your Imagination </h1>
          
          <p className='secondp'> This is just a random text i just created!! Lorem ipsem Lorem ipsum. The website I targeted at the design only. functionality will actually come later but for now, lets try to engage this for the meantime. Lorem Ipsum yetsbs chansbdc Highlife music is or Ghanaian sonsgs</p>
         
          <p className='thirdp'>Request Early Access to Get Started</p>

        </div>
    </div>
  )
}

export default Possibility