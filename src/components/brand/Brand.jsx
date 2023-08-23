import React from 'react'
import { google,slack,shopify,atlassian,dropbox } from './imports';
import './brand.css'
const Brand = () => {
  return (
    <div className='ai__brand section-padding'>
      <div>
        <img src={google} alt="Google"/>
      </div>  
      <div>
        <img src={atlassian} alt="Atlassian" />
      </div>
      <div>
        <img src={slack} alt="Slack" />
      </div>
      <div>
        <img src={dropbox} alt="DropBox" />
      </div>
      <div>
        <img src={shopify} alt="Shopify" />
      </div>
    </div>
  )
}

export default Brand