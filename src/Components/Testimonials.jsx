import React from 'react'
import { testimonialsData } from '../assets/assets'



const Testimonials = () => {
  return (
    <div className='container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden' id='Testimonials'>
      <h2 className='text-2xl font-bold mb-4 text-center sm:text-4xl'>Customer <span className='text-grey-200 underline underline-offset-4 decoration-1 font-light'> Testimonials</span></h2>
      <p className='text-center text-gray-500 mb-12'>Real Stories from those who found home with us</p>
      <div className='flex md:flex-row justify-center gap-8 flex-col mx-8'>
       {testimonialsData.map((testimonial, index) =>(
        <div key={index} className='min-w-[340px] bg-[#1F2937] rounded-2xl  py-12 text-center shadow-[0_4px_20px_rgba(0,0,0,0.6)] hover:shadow-[0_4px_30px_rgba(0,0,0,0.8)] transition-transform duration-300 hover:scale-105'>
            <img className='w-36 h-36 rounded-full mx-auto mb-4 object-cover ' src={testimonial.image} alt="testimonial.alt" />
             <div className='flex flex-wrap justify-center items-center gap-6 mb-3'>
        <h2 className='text-xl font-semibold text-gray-200'>{testimonial.name}</h2>
       <div className='text-yellow-400 relative top-0 right-2 bottom-6'> {testimonial.rating} </div>
        <p className='text-gray-500'>{testimonial.Testimonials}</p>
       </div>



        </div>
       ))}
      
      </div>
      
    </div>
  )
}

export default Testimonials
