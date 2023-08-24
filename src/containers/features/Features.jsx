import React from 'react'
import './features.css'
import {Feature} from '../../components' 
const featuresData = [
  {
     title:'Improving and distrcut instantly',
     text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, recusandae quisquam. Harum in, maiores rem temporibus nisi quam nobis doloremque'
  },
  {
      title:'Become the tended active',
     text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, recusandae quisquam. Harum in, maiores rem temporibus nisi quam nobis doloremque'
  },
  {
     title:'Message or nothing',
     text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, recusandae quisquam. Harum in, maiores rem temporibus nisi quam nobis doloremque'
  },
  {
    title:'Really everything is new',
    text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, recusandae quisquam. Harum in, maiores rem temporibus nisi quam nobis doloremque'
  },
];
function Features() {
  return (
   <div className='ai__features section__padding' id='features'>
    <div className="ai__features-heading">
      <h1 className='gradient__text'> 
        the future is now and you just need to realize it, step into future today & maki ti happen
      </h1>
      <p>Reqest early access</p>
    </div>
    <div className="ai__features-container">
      {featuresData.map((item,index) => {
        return(<Feature key={index + item.title} title={item.title} text={item.text}/>);
      })}
    </div>
   </div>
  )
}

export default Features