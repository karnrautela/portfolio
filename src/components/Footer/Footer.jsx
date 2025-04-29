import React from 'react'
import { FaTwitter,FaDiscord, FaLinkedin,FaGithub } from 'react-icons/fa'

const Footer = () => {

  const handleScroll = (sectionId) =>{
    const section = document.getElementById(sectionId)
    if(section){
      section.scrollIntoView({behaviour :"smooth"})
    }
  }

  return (
    <footer className='text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]'>
      <div className='container mx-auto text-center'>
        
      <h2 className='text-xl font-semibold text-purple-500'>Karan Rautela</h2>

      <nav className='flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4'>
        {[
          {name:"About",id:"about"},
          {name:"Skills",id:"skills"},
          {name:"Experience",id:"experience"},
          {name:"Projects",id:"projects"},
          {name:"Education",id:"education"},
        ].map((item,index) =>(
          <button
          key={index}
          className='hover:text-purple-500 text-sm sm:text-base my-1'
          onClick={()=>handleScroll(item.id)}
          >{item.name}</button>
        ))}
      </nav>
        {/* Social Media Handles*/}
        <div className='flex flex-wrap justify-center space-x-4 mt-6'>
        {[
          {icon:<FaGithub/>,link:"https://github.com/karnrautela"},
          {icon:<FaLinkedin/>  ,link:"https://www.linkedin.com/in/karan-rautela-777067363/"},
          {icon:<FaTwitter/> ,link:"https://x.com/karn_rautela"},
          {icon:<FaDiscord/> ,link:"https://discord.gg/mCShbRQ78S"},
        ].map((item ,index) =>(
          <a
          key={index}
          href={item.link}
          target='_blank'
          rel='noopener noreferrer'
          className='text-xl hover:text-gray-500 transition-transform transform hover:scale-110'
          >{item.icon}</a>
        ))}
        </div>
        <p className='text-sm text-gray-400 mt-6'>
        © 2025 Karan Rautela. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
