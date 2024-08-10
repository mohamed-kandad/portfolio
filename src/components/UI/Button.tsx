import Link from 'next/link';
import React from 'react';

interface props {
  type?: 'button' | 'submit' | 'reset' ,
  to?: string,
  href?: string,
  style?: string,
  children: string,
  OnClick?: () => void,
  download?: string,
  target?: string;
  size?: 'md'|'lg'
}

const Button = ({ type = 'button', to, href, style, children, OnClick, download, target, size }: props) => {
  const ButtonClasses = `bg- ${style}`;
  
  if(to || href){
      return(
        <Link
          className={ButtonClasses}
          href={href ? href : ''}
          download={download}
          target={target}
        >
          {children}
        </Link>
      )
  }
  return (
    <button
      type={type}
      onClick={OnClick}
      // className={ButtonClasses}
      className={`bg-none border-[1px] border-solid border-seconde text-seconde font-seconde text-[13px] py-3 px-5 rounded-md duration-100 hover:bg-[rgba(black, .19)] hover:text-seconde ${size === 'lg' && 'text-[16px] py-4 px-6'}`}
      
    >
      {children}
    </button>
  )
}

export default Button