import React, { useContext } from 'react'
import HeroImg from "../../assets/herobg.png"
import { FaSearch } from 'react-icons/fa'
import Tooltip from '../../components/Tooltip'
import { BsMoon, BsSun } from 'react-icons/bs'
import { ThemeContext } from '../../context/ThemeContext'

const Hero = () => { 
  const {isDarkMood, ToggoleTheme} = useContext(ThemeContext)
  return (
    <section 
    className='h-screen bg-cover bg-center relative' style={{backgroundImage:`url(${HeroImg})`}}>
        <div className='lg:pt-44 px-2 pt-22 text-center text-white space-y-6 lg:w-1/2 mx-auto'>
            <h1 className='text-3xl capitalize md:text-4xl lg:text-5xl font-medium lg:leading-tight leading-snug'>Make your interior more minimalistic & modern</h1>
            <p className='text-xl font-normal mx-auto'>Turn your room with panto into a lot more minimalist and <br />modern with ease and speed</p>
            
            {/* search field */}
            <div className='relative inline-block'>
                <input 
                type="text" 
                placeholder='Search furniture' 
                className='w-full md:w-80 lg:w-80 px-6 py-2 bg-white/25 rounded-full border border-gray-300 focus:outline-none' 
                />
                <div className='absolute right-4 top-1 bg-primary text-white p-2 rounded-full'>
                    <FaSearch/>
                </div>
            </div>

            {/* blur effect */}
            <div className='absolute inset-x-0 bottom-0 h-3/4 -mb-2 bg-gradient-to-t from-white via-transparent
            to-transparent blur-sm'/>

            {/* hover buttom for display tooltip box */}
            <div className='absolute bottom-40 left-24 hidden xl:block '>
              <Tooltip position='bottom'/>
            </div>
            <div className='absolute bottom-42 left-82 hidden xl:block '>
              <Tooltip position='bottom'/>
            </div>
            <div className='absolute bottom-24 left-[820px] hidden xl:block '>
              <Tooltip position='bottom'/>
            </div>
            <div className='absolute bottom-24 right-24 hidden xl:block '>
              <Tooltip position='bottom'/>
            </div>


            {/* dark mood switcher */}
            <div className='absolute right-15 bottom-10 z-40'>
              <button 
              onClick={ToggoleTheme}
              className='bg-black p-4 rounded-full focus:outline-none font-bold text-lg cursor-pointer'>
                {
                  isDarkMood? <BsSun className='text-yellow-500'/>:<BsMoon className='text-yellow-500'/>
                }
                
              </button>
            </div>

        </div>
    </section>
  )
}

export default Hero