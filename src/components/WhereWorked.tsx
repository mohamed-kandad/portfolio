import React, { useState } from 'react'
import Heading from './UI/Heading'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

type Props = {
  classes: string
}

export const workCompanies = [
  'Info System',
  'Cactus Info',
  'MAHALAT.ma',
]

export const workPost = [
  {
    profile: 'Back End Developer',
    date: 'May 2020 - Present',
    postDesc: 'I worked with a team to build a website for management a gas station, an ambitious startup.',
    tech: 'Bootstrap, ES6, Laravel'
  },
  {
    profile: 'Front End Developer',
    date: 'Dec 2021 -> May 2022  - Remote',
    postDesc: 'I worked to build a website (API) for management companies.',
    tech: 'Angular, FireBase'
  },
  {
    profile: 'Front End Developer',
    date: 'Juin 2024 -> July 2024  - Remote',
    postDesc: 'I worked with a team to build a ecommerce web app.',
    tech: 'Bootstrap, Sass, Next js, RTK Query'
  }
] 

const WhereWorked =({classes}: Props) => {
  const [activeNav, setActiveNav] = useState<number>(0)
  
  
  useGSAP(() => {
    gsap.from('.worked_heading', {
      scrollTrigger: {
        trigger: '.worked_heading',
        start: 'center center'
      }, // start the animation when ".box" enters the viewport (once)
      y: -100,
      opacity: 0,
      duration: .8,
    });

    gsap.from('.worked_details', {
      scrollTrigger: {
        trigger: '.worked_details',
      }, // start the animation when ".box" enters the viewport (once)
      y: 100,
      opacity: 0,
      duration: 2,
      delay: .7
    });
  })

  return (
    <div className={`${classes} h-screen flex justify-center items-center`}>
      <div className='container mx-auto px-7'>
        <div className="AboutMeContent max-w-[800px] max-md:max-w-[700px] mx-auto">
          <Heading number={2} title='Where I’ve Worked' classes='worked_heading' />
          <div className="flex flex-row max-sm:flex-col gap-5 worked_details">
            <ul className='p-0 list-none flex flex-col max-sm:flex-row basis-1/4'>
              {
                workCompanies.map(
                  (companyName, index: number)=>
                    <li 
                      key={index} 
                      className={`${activeNav === index ? ' border-l-seconde max-sm:border-b-seconde bg-[#112240] text-seconde' : ''} border-l-2 border-solid border-l-[#233554] max-sm:border-l-transparent max-sm:border-b-[#233554] max-sm:border-b-2 p-[16px] text-paragraph font-seconde text-[13px] cursor-pointer duration-[.4s]`}
                      onClick={e=>setActiveNav(index)}
                    >
                      {companyName}
                    </li>
                )
              }
            </ul>
            <div className='p-0 list-none flex flex-col basis-3/4'>
              <div className='pl-4'>
                <div className="block mb-3">
                  <span className='text-[21px] text-white font-primary font-[500] block'>{ workPost[activeNav].profile }</span>
                  <span className='text-[#a8b2d1] text-[13px] font-seconde block'>{ workPost[activeNav].date }</span>
                </div>
                <p className='mb-3 pl-[20px] text-[#a8b2d1] text-[13px] font-seconde relative before:absolute before:left-0 before:top-0 before:border-[3px] before:border-transparent before:border-l-seconde before:translate-y-[100%] before:border-solid '>{ workPost[activeNav].postDesc }</p>
                <p className='mb-3 pl-[20px] text-[#a8b2d1] text-[13px] font-seconde relative before:absolute before:left-0 before:top-0 before:border-[3px] before:border-transparent before:border-l-seconde before:translate-y-[100%] before:border-solid   '><span className='inline text-seconde font-[600]'>Technologies</span> used: { workPost[activeNav].tech }</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhereWorked