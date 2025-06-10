import React from 'react'
import { MdStar } from "react-icons/md";
import { MdStarBorder } from "react-icons/md";

const Rating = ({rating}) => {
  const totalstars =  5;
  return (
    <div className='flex space-x-1'>
      {
        Array.from({length:totalstars},(_, index)=>{
          const starIndex = index+1;
          return starIndex <= rating ?(<MdStar key={index} className='text-yellow-500'/>):(<MdStarBorder key={index} 
          className='text-gray-700'/>)
        })
      }
    </div>
  )
}

export default Rating