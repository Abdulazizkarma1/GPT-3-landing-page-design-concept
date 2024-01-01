import React from 'react'
import "./brand.css"
import google from "../../assets/google.png";
import atlassian from "../../assets/atlassian.png";
import dropbox from "../../assets/dropbox.png";
import slack from "../../assets/slack.png";
import shopify from "../../assets/shopify.png";



const Brand = () => {
  return (
    <div className='gpt3_brand-section'>
      <div>
      <img src={google} alt="google" />
      </div>

      <div>
      <img src={atlassian} alt="google" />
      </div>

      <div>
      <img src={dropbox} alt="google" />
      </div>

      <div>
      <img src={slack} alt="google" />
      </div>
      
      <div>
      <img src={shopify} alt="google" />
      </div>

    </div>
  )
}

export default Brand