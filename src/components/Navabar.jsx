import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router'
import { IoBag } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaTimes } from "react-icons/fa";



const menuIteam =[
    {path :"/", label:"Furniture"},
    {path :"/shop", label:"Shop"},
    {path :"/about", label:"About"},
    {path :"/contact", label:"ContactUs"},
]
 
const Navmenu =({toggleHnadle})=>{
    return(
        <>
            <ul className='flex flex-col md:flex-row items-center md:space-x-8 justify-center gap-6'>
                {
                    menuIteam.map((iteam , index)=>(
                        <li key={index} onClick={toggleHnadle}>
                            <NavLink 
                                className={({ isActive }) => isActive ? "text-primary" : " hover:text-primary transition-all ease-in-out duration-200"}
                                to={iteam.path}>{iteam.label}
                            </NavLink>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}

const Navabar = () => {

  const[isOpen , setIsOpen] = useState(false)
  const[isScroll , setIsScroll] = useState(false)

  const toggleHnadle =()=>{
    setIsOpen(prevState => !prevState)
  }

    // when scoll , apply bg color to navbar
    useEffect(()=>{
        const handleScroll =()=>{
        if(window.scrollY>50){
            setIsScroll(true)
        }else{
            setIsScroll(false)
        }
        }
        window.addEventListener("scroll" ,handleScroll)
        return ()=>window.addEventListener("scroll" ,handleScroll)
    },[])

  return (
    <header 
    className={`fixed top-0 left-0 right-0 z-50  
    transition ease-in-out duration-300 ${isScroll ? "bg-white shadow-md dark:text-black":"bg-transparent text-white"} `}>
        <div >
        
            <nav className='container mx-auto max-w-screen-xl py-6 flex justify-between items-center px-4'>
                {/* logo */}
                <div>
                    <a className='font-bold text-2xl text-primary' href="/">Furniture</a>
                </div>
                
                {/* hamburger menu for mobile */}
                <div onClick={toggleHnadle} 
                className='md:hidden block text-xl cursor-pointer hover:text-primary focus:text-primary'>
                    
                    {
                    isOpen ? null :<RxHamburgerMenu />
                    }
                </div>


                {/*desktop menu iteam */}
                <div className='hidden md:block'>
                    <Navmenu/>
                </div>

                {/*mobile menu iteam */}
                <div 
                className={`fixed top-0 left-0 w-full h-screen bg-gray-900/80  
                    flex flex-col items-center justify-center space-y-8 text-white transition-transform
                    ${isOpen ? 'translate-x-0':'-translate-x-full'} md:hidden
                    `}>
                    <div className='absolute top-4 right-4 text-xl' onClick={toggleHnadle}>
                        <FaTimes />
                    </div>
                    <Navmenu toggleHnadle={toggleHnadle}/>
                </div>

                
                {/* icon */}
                <div className="text-xl hidden md:block relative">
                    <IoBag  className='text-2xl'/>
                    <sup className='absolute -top-2 -right-3 bg-primary text-white h-5 w-5 rounded-full flex items-center justify-center text-xs'>0</sup>
                </div>
            </nav>

        </div>
    </header>
  )
}

export default Navabar