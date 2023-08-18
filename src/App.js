import React from 'react'

import {Header,Footer,Blog,Aisection,Features,Possibility}  from './containers'
import {Article,Brand,CTA,Feature,NavBar} from './components'

function App() {
  return (
    <div className='App'>
      <div className='gradient__bg'>
         <NavBar/>
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