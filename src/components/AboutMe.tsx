import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all';
import React from 'react'
import Heading from './UI/Heading';
gsap.registerPlugin(ScrollTrigger);

type Props = {
  classes: string
}

const WorkTech = [
  'Css (Sass, TailwindCss)',
  'JavaScript',
  'Next Js',
  'Node Js',
  'Git Hub'
] 

const AboutMe = ({classes}: Props) => {
  useGSAP(() => {
    gsap.from('.about_heading', {
      scrollTrigger: {
        trigger: '.about_heading',
        start: 'center center'
      }, // start the animation when ".box" enters the viewport (once)
      y: -100,
      opacity: 0,
      duration: .8,
    });
    gsap.from('.about-desc', {
      scrollTrigger: {
        trigger: '.about-desc',
      }, // start the animation when ".box" enters the viewport (once)
      y: 100,
      opacity: 0,
      duration: .5,
      delay: .7
    });
  })
  
  return (
    <div className={`${classes} h-screen flex justify-center items-center`}>
      <div className='container mx-auto px-7'>
        <div className="AboutMeContent max-w-[800px] mx-auto">
          <Heading number={1} title='About Me' classes='about_heading'/>

          <main className='flex mt-7'>
            <div className='flex-1 mx-auto font-primary text-[20px] text-paragraph me-5 about-desc'>
              <p className='mb-4'>Hello! My name is Mohamed Kandad and I enjoy creating things that live on the internet. My interest in web development started back in 2017 </p>
              <p className='mb-4'>
                I have rich experience in web site design & building and customization. Also I am good at html, css, javascript, next js, node js, jquery, bootstrap. I love to talk with you about our unique approach. Feel free to contact me writing an email with your project idea.
              </p>
              <p className='mb-4'>Here are a few technologies I’ve been working with recently:</p>
              <div className="tech flex justify-start">
                <div className="tech__left">
                  {WorkTech.map((tech: string, index: number) =>(
                    <span key={index} className='block text-[13px] font-seconde relative ps-3 mb-2 before:absolute before:left-0 before:bottom-0 before:border-[3px] before:border-transparent before:border-l-seconde before:translate-y-[-130%] before:border-solid'>{tech}</span>
                  ))}
                </div>
                <div className="tech__right">

                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default AboutMe