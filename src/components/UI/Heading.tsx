import React from 'react'

type Props = {
  number: number;
  title: string;
  classes?: string;
  showLine?: boolean;
}

const Heading = ({
  number, 
  title,
  classes,
  showLine = true
}: Props) => {
  
  return (
    <div className={`flex items-center mb-4 ${classes}`}>
      <span className='font-seconde text-[23px] max-md:text-[20px]  text-seconde inline me-2'>0{number}.</span>
      <div className='font-primary text-[32px] max-md:text-[25px] text-nowrap font-[600] inline me-4 mb-[-5px]'>{title}</div>
      {
        showLine &&
        <div className='w-[300px] max-md:w-[200px] h-[1px] bg-[#233554] inline-block'></div>
      }
    </div>
  )
}

export default Heading