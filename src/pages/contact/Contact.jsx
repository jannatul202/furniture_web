import React from 'react'
import ContactImg from '../../assets/contact-background.jpg'
import Meterials from '../home/Meterials'
import Testimonial from '../home/Testimonial'

const Contact = () => {
  return (
    <section className='min-h-screen'>
      {/* banner */}
      <div className='h-screen bg-cover bg-center relative flex items-center justify-center text-white'
      style={{backgroundImage:`url(${ContactImg})`}}>
        <h1 className='text-4xl font-bold'>Contact Us</h1>
      </div>
      {/* Meterials */}
      <Meterials/>
      <Testimonial/>
    </section>
  )
}

export default Contact