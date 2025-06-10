import React from 'react'
import ArrowIcon from '../assets/button-icon.png'

const Button = ({text}) => {
  return (
    <>
        <button className='flex justify-center items-center text-primary cursor-pointer'>
            {text}
            <img src={ArrowIcon} alt="arrow icon"  className='ml-2 mt-1'/>
        </button>
    </>
  )
}

export default Button