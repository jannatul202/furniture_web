import React from 'react'
import materialImg1 from '../../assets/material1.png'
import materialImg2 from '../../assets/material2.png'
import materialImg3 from '../../assets/material3.png'
import Button from '../../components/Button'


const Meterials = () => {
  return (
    <section className='section-container my-24 flex flex-col md:flex-row items-center
    md:gap-20 gap-8'>

      {/* content */}
      <div className='md:w-1/4 mx-auto'>
        <h2 className='uppercase text-lg font-semibold text-primary mb-1'>Materials</h2>
        <h3 className='capitalize text-4xl font-bold leading-snug'>Very serious materials for making furniture</h3>
        <p className="mt-2 mb-5 lg:w-2/3">
          Because panto was very serious about designing furniture for our environment, using a very expensive and famous capital but at a relatively low price
        </p>
        <Button text="More Info"/>
      </div>

      {/* image */}
      <div className='md:w-1/2 grid grid-cols-2 md:grid-cols-3 md:items-end items-center'>
        <div>
          <img src={materialImg1} alt="image"/>
          <img src={materialImg2} alt="image"/>
        </div>
        <div className='md:col-span-2 col-span-1'>
          <img  src={materialImg3} alt="image"  className='w-full md:h-[541px] '/>
        </div>
        
      </div>
    </section>
  )
}

export default Meterials