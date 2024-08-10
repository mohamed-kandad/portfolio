import React, { useCallback, useRef } from 'react'
import Heading from './UI/Heading'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all';
import { TbBrandGithub } from 'react-icons/tb';
import Image from 'next/image';
import { CiFolderOn } from 'react-icons/ci';
import { IconLink, IconLinkedIn } from '@/assets/imgs';
gsap.registerPlugin(ScrollTrigger);
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Grid } from 'swiper/modules';

import 'swiper/css';
import "swiper/css/grid";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Button from './UI/Button';

import { IProject, projectsItems } from '@/helpers';

type Props = {
  classes: string
}

const BigProjects = ({classes}: Props) => {

  useGSAP(() => {
    gsap.from('.projects_heading', {
      scrollTrigger: {
        trigger: '.projects_heading',
        start: 'center center'
      }, // start the animation when ".box" enters the viewport (once)
      y: -100,
      opacity: 0,
      duration: .8,
    });
    gsap.from('.projects', {
      scrollTrigger: {
        trigger: '.projects',
      }, // start the animation when ".box" enters the viewport (once)
      y: 100,
      opacity: 0,
      duration: .5,
      delay: .7
    });

  })

  const sliderRef = useRef<SwiperRef>(null);
  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);
  return (
    <div className={`${classes} h-screen flex justify-center items-center`}>
      <div className='container mx-auto px-7'>
        <div className="AboutMeContent max-w-[1500px] max-md:max-w-[700px] mx-auto">
          <Heading number={3} title='Some Things I’ve Built' classes='projects_heading' />
          <div className="flex gap-3 flex-nowrap overflow-x-hidden projects">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y, Grid]}
              spaceBetween={20}
              
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                  grid: {
                    rows: 1,
                    fill: "row",
                  }
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                  grid: {
                    rows: 2,
                    fill: "row",
                  }
                },
                1024: {
                  slidesPerView: 3,  
                  spaceBetween: 20,
                  grid: {
                    rows: 2,
                    fill: "row",
                  }
                },
              }}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
              ref={sliderRef}
              className='gap-5'
            >
              
              {
                projectsItems.length > 0 && projectsItems.map((project: IProject) =>(
                  <SwiperSlide className='relative overflow-hidden group rounded-lg'>
                    <Image alt='project image' className='rounded-lg bg-white' src={require(`@/assets/imgs/${project.image}`)} width={500} height={300} style={{height: '370px'}} />
                    {
                      project.links && <div className="links flex flex-col gap-3 absolute translate-x-full right-0 top-2 duration-[.5s] group-hover:-translate-x-0 z-30">
                        {
                          project.links.live && <a href={project.links.live} className='text-[#a8b2d1] duration-100 hover:text-seconde' target='_blank'>
                            <IconLink className='w-[22px] h-[22px]'  />
                          </a>
                        }
                        {
                          project.links.github && <a href={project.links.github} className='text-[#a8b2d1] duration-100 hover:text-seconde me-2' target='_blank'>
                            <TbBrandGithub className='w-[23px] h-[23px]'  />
                          </a>
                        }
                      </div>
                    }
                    <div className="mt-5 mb-2 absolute font-seconde bottom-0 left-2 translate-y-[110%] duration-[.5s] group-hover:-translate-y-0 z-30">
                      <a href={project?.links?.live || '#'} target='_blank' className='text-gray text-[22px] font-semibold'>{ project.name }</a>
                    </div>
                    <div className="absolute w-full h-full bg-primary opacity-0 group-hover:opacity-70 left-0 top-0"></div>
                  </SwiperSlide>
                ))
              }
            </Swiper>
          </div>
          <div className="flex justify-between mt-4">
            <Button OnClick={handlePrev}>Prev</Button>
            <Button OnClick={handleNext}>Next</Button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default BigProjects