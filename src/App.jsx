import React from 'react'
import Header from './Components/Header'
import About from './Components/About'
import Project from './Components/Project'
import Testimonials from './Components/Testimonials'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

const App = () => {

  
  return (
    
    <div className='overflow-hidden w-full'>
      <Header/>
      <About/>
      <Project/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  )

}



export default App
