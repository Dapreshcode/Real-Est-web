import React from 'react'
import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";

const About = () => {

const ref = useRef(null);
const isInView = useInView(ref, { amount: 0.3 }); // triggers when 30% visible
const controls = useAnimation();

// Start animation when in view, and reverse when out of view
useEffect(() => {
  if (isInView) {
    controls.start("visible");
  } else {
    controls.start("hidden");
  }
}, [isInView, controls]);



   const leftVariant = {
  hidden: { opacity: 0, x: -150 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.8, ease: "easeInOut" }, // slower, smoother
  },
};


   const rightVariant = {
  hidden: { opacity: 0, x: 150 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.8, ease: "easeInOut" },
  },
};



  return (
    <div className='flex flex-col items-center justify-center container mx-auto p-14 md:px-32 w-full overflow-hidden bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white' id='About'>
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.9 }}
        viewport={{ once: true }}
        className="text-2xl sm:text-4xl font-bold mb-2"
      >
        About{" "}
        <span className="underline underline-offset-4 decoration-1 font-light">
          Our Brand
        </span>
      </motion.h1>

       <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2.2, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-gray-500 max-w-800 text-center mb-8"
      >
        Passionate About Properties, and Dedicated to Your Vision
      </motion.p>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // triggers when 30% visible
        className="flex flex-col md:flex-row items-center md:items-start md:gap-20"
      >
        <motion.img
    variants={leftVariant}
    className="w-full sm:w-1/2 max-w-lg"
    src="/about-imgage.jpg"
    alt="About image"
  />
      

      <motion.div
    variants={rightVariant}
    className="flex flex-col items-center md:items-start mt-10 text-gray-600"
  >
        
      <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>  
       <div>
        <p className='text-4xl font-meduim text-gre'>10+</p>
        <p>Year of Experience</p>
       </div>

       {/*.<div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>..*/}

        <div>
        <p className='text-4xl font-meduim text-gre'>12+</p>
        <p>Project Completed</p>
       </div>

        <div>
        <p className='text-4xl font-meduim text-gre'>20+</p>
        <p>Mn. Sq. Ft. Delivered</p>
       </div>

        <div>
        <p className='text-4xl font-meduim text-gre'>25+</p>
        <p>Ongoing Projects</p>
       </div>
      </div>
   <p className='my-10 max-w-lg'>
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis obcaecati maxime quam cum voluptate! Assumenda!
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis qui ea tempore pariatur voluptatem sunt!
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia et inventore consequuntur magni, in repudiandae tempore non!
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, maxime!
   </p>
   <button className='bg-blue-600 text-white px-8 py-2 rounded'>Learn More</button>
      </motion.div>
      </motion.div>
    </div>
    
  )
}

export default About
