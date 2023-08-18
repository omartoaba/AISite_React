import React from 'react'

import {Header,Footer,Blog,Aisection,Features,Possibility}  from './containers'
import {Article,Brand,CTA,Feature,Navbar} from './components'
import './app.css'
function App() {
  return (
    <div className='App'>
      <div className='gradient__bg'>
         <Navbar/>
         <Header/>
      </div>
      <Brand/>
      <Aisection/>
      <Features/>
      <Possibility/>
      <CTA/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App