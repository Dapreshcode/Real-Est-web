import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faEnvelope, faBars, faXmark  } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
   
 const[showMobileMenu, setShowMobileMenu] = useState(false)


  useEffect(() =>{
   if(showMobileMenu){
    document.body.style.overflow ? 'hidden' : 'auto'
   } 
   return () => {
    document.body.style.overflow = 'auto'
   }

  },[showMobileMenu])

 


  return (
    
      <div className='absolute top-0 left-0 w-full z-10'>
      <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparents'>
        <div className='text-gray-100 font-bold '><p>presh <span className='text-yellow-500'>dev</span></p></div>
        <ul className='hidden md:flex gap-7 text-white sticky '>
          <a href="#Header" className=' cursor-pointer hover:text-gray-400'>Home</a>
          <a href="#About" className=' cursor-pointer hover:text-gray-400'>About </a>
          <a href="#Projects" className=' cursor-pointer hover:text-gray-400'>Project</a>
          <a href="#Testimonials" className=' cursor-pointer hover:text-gray-400' >Testimonials</a>
        </ul>
        <button className='hidden md:block bg-white px-8 py-2 rounded-full text-gray-900'>Sign-up</button>
       <FontAwesomeIcon onClick={()=> setShowMobileMenu(true)} icon={faBars} className="text-xl cursor-pointer md:hidden" />
      </div>
     { /*------mobile menu---*/}
     
<div className= {` ${showMobileMenu ? 'translate-x-0' : '-translate-x-full'} fixed  w-full h-full top-0 left-0  bg-white  flex flex-col z-50 transform transition-all duration-300`}>
  <div className='flex justify-end p-6'>
    <FontAwesomeIcon onClick={()=> setShowMobileMenu(false)} icon={faXmark} className="md:hidden text-2xl cursor-pointer" />
  </div>
<ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium  transition-all'>
      <a  onClick={()=> setShowMobileMenu(false)}  href="#" className=' text-black px-4 py-2 rounded-full inline-block hover:text-black-300'>Home</a>
      <a onClick={()=> setShowMobileMenu(false)}  href="#" className=' text-black px-4 py-2 rounded-full inline-block hover:text-gray-400'>About</a>
      <a onClick={()=> setShowMobileMenu(false)} href="#" className=' text-black px-4 py-2 rounded-full inline-block hover:text-gray-400'>Testimonials</a>
     </ul>
</div>
    </div>
  )
}

export default Navbar
