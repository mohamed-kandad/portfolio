'use client'

import gsap from 'gsap';
import { ScrollTrigger, ScrollToPlugin } from 'gsap/all';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);


import {
  Header,
  AboutMe,
  WhereWorked,
  BigProjects,
  SmallProjects,
  ContactLinks
} from '@/components';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';

export default function Home() {
  const cursorRef = useRef(null)
  const [users, setUsers] = useState([])

  useLayoutEffect(() => {
    
    gsap.utils.toArray<HTMLElement>(".panel").forEach((panel, i) => {
      ScrollTrigger.create({
        trigger: panel,
        start: "top top", 
        pin: true, 
        pinSpacing: false 
      });
    });
    
    ScrollTrigger.create({
      snap: 1 / 4 // snap whole page to the closest section!
    });

    
  }, [])
  
  return (
    <>    
      <Header classes='section' />
      <AboutMe classes='section'/>
      <WhereWorked classes='section'/>
      <BigProjects classes='section'/>
      <SmallProjects classes='section' />
      <ContactLinks />
      {/* <div ref={cursorRef} className="pointer-events-none fixed inset-0 z-30 w-[500px] h-[500px] transition duration-300 lg:absolute  rounded-full bg-gradient-cursor" ></div> */}
    </>
  );
}
