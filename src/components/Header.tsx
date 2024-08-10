import React, { useEffect } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';

type Props = {
  classes: string
}

const Header = ({classes}: Props) => {
  
  useGSAP(() => {
    const tl = gsap.timeline({duration: .8, ease: "sine.inOut",});
    tl.to('.is-name', { opacity: 1, y: 0 })
    tl.to('.name', { opacity: 1, y: 0 })
    tl.to('.things', { opacity: 1, y: 0 })
    tl.to('.paragraph', { opacity: 1, y: 0 })
    
  })
  // useEffect(() => {
  // }, [])
  
  return (
    <header className={`${classes} relative h-screen flex justify-center items-center`}>
      <div className="container mx-auto">
        <div className="w-full max-w-[1200px] m-auto max-md:p-4">
          <span className='text-[17px] translate-y-60 opacity-0  text-seconde block mb-4 font-seconde is-name'>Hi, my name is</span>
          <span className='text-[80px] translate-y-60 opacity-0 max-md:text-[50px] max-md:mb-3 font-[700] block font-primary mb-[-20px] name'>Kandad Mohamed</span>
          <span className='text-[80px] translate-y-60 opacity-0 max-md:text-[50px] font-[700] max-md:leading-[50px] block font-primary text-paragraph things'>I build things for the web.</span>
          <p className="text-[20px] translate-y-60 opacity-0 max-md:text-[15px] font-primary text-paragraph paragraph">
            Detail-oriented, analytical, and self-driven programmer with extensive experience building user-facing applications. An efficient and knowledgeable programmer with skills in <span className='text-seconde font-seconde'>HTML</span>, <span className='text-seconde font-seconde'>Css</span>, <span className='text-seconde font-seconde'>Next Js</span>, and JavaScript. A coordinated and collaborative team player with attention to detail, graphic design skills, and the ability to contribute to code base improvement initiatives and user experience improvement projects.
          </p>
        </div>
      </div>
    </header>
  )
}

export default Header