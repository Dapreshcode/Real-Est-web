import React from 'react'
import Navbar from './Navbar'
import { motion, useInView, useAnimation } from "framer-motion";

const Header = () => {
  return (
    <div className='min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden' style={{backgroundImage: "url('/background-header2.jpg')" }} id= 'Header'>
      <Navbar/>

      <div className='container text-center mx-auto py-4 md:px-20lg:32 text-white'>
        <motion.h2 
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2.0 }}
        viewport={{ once: true }}
        className='text-5xl sm:6xl md:text-[72px] inline-block max-w-3xl font-semibold'>Explore Homes that fut your dreams</motion.h2>
        <div className='space-x-5 mt-16'>
          <a href="#projects" className='border border-white rounded px-8 py-3'>Project</a>
           <a href="#contacts" className='border-white rounded px-8 py-3 bg-blue-500'>Contact us</a>
        </div>
      </div>
    </div>
  )
}

export default Header
