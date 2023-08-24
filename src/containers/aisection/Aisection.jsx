import React from 'react'
import './aisection.css'
import { Feature } from '../../components'

function Aisection() {
  return (
    <div className='ai__aisection section-padding' id='ai'>
        <div className="ai__aisection-feature">
            <Feature title='What is AI' text='Lorem ipsum dolor sit amet consectetur
             adipisicing elit. Ab omnis minus molestias unde aut enim quaerat,
              laborum esse fugit rerum.'/>
        </div>
        <div className="ai__aisection-heading">
          <h1 className='gradient__text'>
              The possibilities are beyond your imagination
          </h1>
          <p>Explore The Library</p>
        </div>
        <div className="ai__aisection-container">
            <Feature title='Chatbots' text='Lorem ipsum dolor sit amet consectetur
             adipisicing elit. Ab omnis minus molestias unde aut enim quaerat,
              laborum esse fugit rerum.'/>
            <Feature title='Knowledgebase' text='Lorem ipsum dolor sit amet consectetur
             adipisicing elit. Ab omnis minus molestias unde aut enim quaerat,
              laborum esse fugit rerum.'/>
            <Feature title='Education' text='Lorem ipsum dolor sit amet consectetur
             adipisicing elit. Ab omnis minus molestias unde aut enim quaerat,
              laborum esse fugit rerum.'/>
        </div>
    </div>
  )
}

export default Aisection