import React from 'react'
import HeroImg from '../../assets/herobg.png'
import AboutImg from '../../assets/about-background.jpg'
import Exprience from '../home/Exprience'

const About = () => {
  return (
    <section className='min-h-screen'>
      {/* banner */}
      <div className='h-screen bg-cover bg-center relative flex items-center justify-center text-white'
      style={{backgroundImage:`url(${AboutImg})`}}>
        <h1 className='text-4xl font-bold'>About Us</h1>
      </div>
      {/* Exprience */}
      <Exprience/>
    </section>
  )
}

export default About