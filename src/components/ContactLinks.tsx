import React from 'react'

type Props = {}
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IconGithub, IconLinkedIn } from '@/assets/imgs';

const ContactLinks = (props: Props) => {
  return (
    <div className=''>
      <div className="fixed bottom-0 right-9 z-10 flex flex-col  items-end">
        <a target='_blank' href='mailto: kandad.dev@gmail.com'  className='hover:text-seconde duration-[.5s]  hover:translate-y-[-5px] font-seconde text-paragraph rotate-[90deg] origin-right cursor-pointer'>
          kandad.dev@gmail.com
        </a>
        <div className="h-[120px] w-[1px] bg-paragraph">
        </div>
      </div>
      <div className="fixed bottom-0 left-9 z-10 flex flex-col">
        <a target='_blank' href="https://github.com/MohamedKandadev" className='text-paragraph text-[23px] mb-4 translate-x-[-50%] w-[20px] hover:text-seconde duration-[.5s]  hover:translate-y-[-5px]'>
          {/* FaGithub /> */}
          <IconGithub />
        </a>
        <a target='_blank' href="https://linkedin.com/in/mohamed-kandad-0931aa189" className='text-paragraph text-[23px] mb-4 translate-x-[-50%] w-[20px] hover:text-seconde duration-[.5s]  hover:translate-y-[-5px]'>
          <IconLinkedIn />
        </a>
        <div className="h-[120px] w-[1px] bg-paragraph">
        </div>
      </div>
    </div>
  )
}

export default ContactLinks