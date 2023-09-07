import React from 'react'
import './footer.css'
import ailogo from '../../assets/ai.png'
function Footer() {
  return (
    <div className='ai__footer section__padding'>
      <div className="ai__footer-heading">
        <h1 className="gradient__text">
          Do you want to step in to the future before others
        </h1>
      </div>

      <div className="ai__footer-btn">
        <p>Request early access</p>
      </div>
      <div className="ai__footer-links">
        <div className="ai__footer-links_logo">
          <img src={ailogo} alt="Logo" />
          <p>Ai groupes All rights reserved</p>
        </div>
        <div className="ai__footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contacts</p>
        </div>
        <div className="ai__footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>42852-5546</p>
          <p>info@atme.com</p>
        </div>
      </div>
        <div className="ai__footer-copyright">
          <p>2023 AI-Groupe. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer