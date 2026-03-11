import React, { useEffect } from 'react'
import  { useState } from 'react';
import leftArrow from '../assets/icons/left-arrow.png'
import rightArrow from '../assets/icons/right-arrow.png'
import { projectsData } from '../assets/assets'



const Project = () => {
const [currentIndex, setCurrentIndex] = useState(0);
const[cardsToShow, setCardsToShow] = useState(0);

useEffect(()=>{
const upadatecCardsToShow = () =>{ //The code is written that when the window width is greater than or equal to 1024, we want all four cards to show, else set cards to show to just 1
  if(window.innerWidth >=1024){
    setCardsToShow(projectsData.length)
  } else{
    setCardsToShow(1)
  }
};
  upadatecCardsToShow();
  window.addEventListener('resize', upadatecCardsToShow); //this is the event that runs when the updateCards to show is called
  return() => window.removeEventListener('resize', upadatecCardsToShow)

},[])

const nextProject = () => {
  setCurrentIndex((prevIndex)=>(prevIndex + 1) % projectsData.length);//prevIndex to increase by one and % returns the cards to zero its original length once it has gotten to the end
}

const prevProject = () => {
  setCurrentIndex((prevIndex)=> prevIndex === 0 ? projectsData.length -1 : prevIndex -1);//if previndex is equal to zero, which is the begining we want the cards which is the project.length to reduce by 1 else(:) reduces the prevIndex by 1
}


  return (
    <div className='container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden' id='Projects'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Projects <span className='underline underline-offset-4 decoration-1 under 
      font-light'>Completed</span></h1>
      <p className='text-center text-grey-500 mb-8 max-w-80 mx-auto'>Crafting Spaces, Building Legacies-Explore Our Portfolio</p>

      <div className=' flex justify-end items-center mb-8'>
        <button onClick={prevProject} className='p-3 bg-gray-200 rounded mr-2 w-1/12 '><img src={leftArrow} alt="previous" /></button>
        <button onClick={nextProject} className='p-3 bg-gray-200 rounded w-1/12 mr-2'><img src={rightArrow} alt="next" /></button>
      </div>

      {/*...project slider container */}
      <div className='overflow-hidden ' id='Projects'>
        <div className='flex gap-8 transition-transform duration-500 ease-in-out'
        style={{transform: `translateX(-${(currentIndex * 100)/ cardsToShow}%)`}}>{/*.This is the project slider and the code interprets:translate in the negative -X and show 25% of the cards thats what the calaculation does.*/}
          {projectsData.map((project, index) =>(
            <div key={index} className='relative flex-shrink-0 sm:w-1/4 '>
              <img className=' h-56 mb-6 w-[260px] rounded-lg drop-shadow-md hover:scale-105' src={project.image} alt={project.title}/>
              <div className='left-0 right-0 buttom-3 flex jistify-center  items-center w-[260px] '>
                <div className='inline-block bg-[#242d3a] px-4 rounded'>
                <h2 className='text-xl font-semibold text-gray-500 text-center'>
                   {project.title}
                </h2>
                <p className='text-gray-500 text-sm'>{project.price} |<span className='px-1'>{project.location}</span></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

         </div>
  )
}

export default Project
