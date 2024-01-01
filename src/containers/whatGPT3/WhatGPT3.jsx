import React from 'react'
import "./whatGPT3.css"
import { Feature } from '../../components/export'

const WhatGPT3 = () => {
  return (
    <div className='section_margin gpt3_feature-section'> 
    <div className='margins'>
    {/* <div className='gpt3_feature'>
      <Feature name="What is GPT-3" 
               title="we friedns so opiniion message me last night about it and a plate was heard. His dfective nor convince residene.
                      Connection has a lot consiconsieh but we go again today to accomplish our mission"

         />
    </div> */}
    <div className='gpt3_feature-heading'>
      <h1 className='gradient__text'>The Possibilities are beyond your imagination</h1>
      <p>Explore the library</p>
    </div>
    <div className='gpt3_features'>
    <div className='sections'>
      <Feature 
        name="Chatbots"
        title="we so opinion friends message me as delight. Whole front do a lot of plate heard oh ought"
      />
      </div>
      <div className='sections'>
      <Feature className="gpt3_features"
        name="Knowledgebase"
        title="At jointure ladyship an insisted so humanity he. A Friendly bachelor handle by the galaxy of the cretor"
      />
      </div>
    <div className='sections'>
      <Feature 
        name="Education"
        title="At jointure ladyship an insisted so humanity her. friendly bachelor entrance to om by. As put imposible in own apartment"
      />
      </div>
    </div>
    </div>
    </div>
  )
}

export default WhatGPT3