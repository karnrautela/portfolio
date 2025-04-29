import React from 'react'
import { Typewriter } from 'react-simple-typewriter';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/profile3.png'

const About = () => {
  return (
    <div className='text-white'>
    <section 
    id='about'
    className='  py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] fonst-sans mt-16 sm:mt-8 md:mt-8 lg:mt-20 scroll-mt-0'  >
        <div className='flex flex-col-reverse   md:flex-row justify-between items-center md:space-x-8'>
        <div className='md:w-1/2 text-center md:text-left mt-8 md:mt-0'>
        <h1 className='text-3xl sm:text-5xl ,md:text-6xl font-bold text-white mb-2 
        leading-tight'>Hi, I am
        </h1>
        <h2 className='text-4xl sm:text-5xl md:text-4xl lg:text-6xl font-bold text-white mb-4 leading-tight whitespace-nowrap
'>
          Karan Rautela
        </h2>
        <h3 className='text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight space-x-2' >
         <span className='text-white xl'>
          I am a       
         </span>
         <span className='text-[#8245ec]'>
            <Typewriter
            words={[
              'Fullstack Developer',
              'DevOps Engineer',
              'Software Engineer',
              'UI/UX Designer',
              'Coding Professional' 
            ]}
            loop={0}
            cursor={false}
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={2000}
            />
          </span>
        </h3>

        {/* about me section*/}
        <p className='text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed'>
          I am a full-stack developer with over 1 year of experience in building scalable web applications. Skilled in both front-end and back-end development, I specialize in the MERN stack and other modern technologies..
        </p>
        {/* Resume Button*/}
            <a href="https://drive.google.com/file/d/1iBWhSkZ24sG4-eyyze3TDVWj5y2RyMxL/view?usp=drive_link"
            target='_blank'
            rel='noopener noreferrer'
            className='inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105'
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec '
            }}
            >Download Resume
            </a>
        </div>
            {/*profile photo*/}

            <div className=' flex justify-center md:w-1/2 md:justify-center '>
            <Tilt className='w-48 h-48 sm:h-64 sm:w-64 md:h-[30rem] md:w-[30rem] border-4 border-purple-700 rounded-full'
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
            >
            <img src={profileImage}
            alt="KaranRautela" className='w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)] ' />
            </Tilt>
            </div>
        </div>
        
    </section>
  </div>
  )
}

export default About
