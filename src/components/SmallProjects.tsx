import React from 'react'
import Heading from './UI/Heading'
import Button from './UI/Button'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger );

type Props = {
  classes: string
}

const SmallProjects = ({classes}: Props) => {


  useGSAP(() => {
    gsap.from('.textDesc', {
      scrollTrigger: {
        trigger: '.textDesc',
      }, // start the animation when ".box" enters the viewport (once)
      y: 100,
      opacity: 0,
      duration: 1.5,
      scaleX: 2.5,
    });
    // gsap.from('.deve-by', {
    //   scrollTrigger: {
    //     trigger: '.deve-by',
    //   }, // start the animation when ".box" enters the viewport (once)
    //   y: 100,
    //   opacity: 0,
    //   duration: .8,
    // });

  })
  
  
  return (
    <div className={`${classes} h-screen relative flex justify-center items-center`}>
      <div className='container mx-auto px-7'>
        <div className="text-center max-w-[1000px] max-md:max-w-[700px] mx-auto">
          <div className="text-center text-[16px] text-seconde font-seconde textDesc">
            <span className='text_number  inline me-2'>04.</span>
            <div className='text_title text-nowrap inline me-4 mb-[-5px]'>What’s Next?</div>
            <h2 className='text_desc text-white font-primary font-bold text-[60px] mb-6'>Get In Touch</h2>
            <Button size='lg' style='text_button'>Say Hello</Button>
          </div>
          <div className="absolute left-0 bottom-0 w-full py-6 deve-by">
            <div className="text-paragraph font-seconde text-xs">
              Developed by <a href='#' className='text-seconde text-sm'>Kandad Mohamed</a> with <span className='text-red-900'>&#10084;&#65039;</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SmallProjects