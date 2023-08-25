import React from 'react'
import './possibility.css'
import possibilityimage from '../../assets/possibility.png'
function Possibility() {
  return (
    <div className='ai__possibility section__paddging' id='possibility'>
      <div className="ai__possibility-image">
        <img src={possibilityimage} alt="possibility" />
      </div>
      <div className="ai__possibility-content">
        <h4>Request early access to get started</h4>
        <h1 className="gradient__text">The possibilities are beyond youor imagination</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, ab est, minima commodi cum dolore odio porro illum id nisi iusto at hic, officiis sed dolorum? Ratione nam officia accusantium.</p>
         <h4>Request early access to get started</h4>
      </div>
    </div>
  )
}

export default Possibility