import React from 'react'
import {SkillInfo} from '../../constants.js'
import Tilt from 'react-parallax-tilt';

const Skills = () => {
  return (
   <section
   id='skills'
   className='py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom '
   >
    
    <div className='text-center mb-4'>
      <h2 className='text-3xl sm:text-4xl font-bold text-white'>Tech Skills </h2>
      <div className='w-48 h-1 bg-purple-500 mx-auto mt-2'></div>
      <div>
        <p className='text-gray-400 mt-4 text-lg font-semibold'>A collection of my technical skills and expertise honed through various projects and experiences</p>
      </div>


    
    <div className='flex flex-wrap gap-1 lg:gap-5 py-10 justify-between'>
        {SkillInfo.map((category) =>(
          <div
          key={category.title}
          className='bg-gray-900 backdrop-blur-md px-6 sm:px-10 py-8 sm:py-6 mb-10 w-full sm:w-[48%] rounded-2xl  border-white shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]'>
            <h3 className='text-2xl sm:text-3xl font-semibold text-gray-400 mb-4 text-center' >{category.title}</h3>

            <Tilt>
            <div className='grid grid-cols-2 sm:grid-cols-3 gap-3 w-full'>
          {category.skills.map((skill)=>(
            <div 
            key={skill.logo}
            className='flex items-center justify-center space-x-2 bg-transparent border-2 border-gray-700 rounded-3xl px-2 py-2 sm:px-2 sm:py-2 text-center   md:flex-col w-full '>
              <img src={skill.logo}
              alt={`${skill.name} logo`}
              className='w-6 h-6 sm:w-8 sm:h-6 md:h-6 md:w-10'
              />
               <span className="  lg:block text-xs  text-gray-300 relative  break-words  text-ellipsis overflow-hidden whitespace-nowrap w-full">
                    {skill.name}
                  </span>
              
            </div>
            
          ))}
            </div>
            </Tilt>
          </div>
        ))}
      </div>
    
    
    </div>
  
   </section>
  )
}

export default Skills
