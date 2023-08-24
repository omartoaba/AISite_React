import React from 'react'
import './header.css'
import ai from '../../assets/airobot.jpg'
import people from '../../assets/people.png'
function Header() {
  return (
    <div className='ai__header section__padding' id='home'>
      <div className="ai__header-content">
        <h1 className='gradient__text'>
         Let's Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem sit quam rem laborum voluptatum ducimus quaerat ut, reiciendis facilis. Cumque quisquam sequi dolor eligendi quis quo enim suscipit quidem aut expedita aspernatur minima quaerat et libero atque, saepe blanditiis error ducimus ea ut quia qui. Perferendis eaque ex esse praesentium?
        </p>
        <div className="ai__header-content__input">
          <input type="email" placeholder='your email address'/>
          <button type='button'>Get Started</button>
        </div>
        <div className="ai__header-content__people">
          <img src={people} alt='people'/>
          <p>1.600 people already access in past 24 hours</p>
        </div>
      </div>
        <div className="ai__header-image">
          <img src={ai} alt="AI" />
        </div>
   </div>
  )
}

export default Header