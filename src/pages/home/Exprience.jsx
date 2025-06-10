import React from 'react'
import exprinceImg from '../../assets/expricences.png'
import Button from '../../components/Button'

const Exprience = () => {
  return (
    <section className='section-container my-24 flex flex-col md:flex-row items-center
    md:gap-20 gap-8'>
      <div className='md:w-1/2 md:h-[541px]'>
        <img src={exprinceImg} alt="image"  className='h-full w-full'/>
      </div>
      {/* content */}
      <div className='md:w-1/2 mx-auto'>
        <h2 className='uppercase text-lg font-semibold text-primary mb-1'>Exprience</h2>
        <h3 className='capitalize text-4xl font-bold'>we provide you the best experience</h3>
        <p className="  mb-5 lg:w-2/3 mt-2 ">
          You don’t have to worry about the result because all of these interiors are made by people 
          who are professionals in their fields, with an elegant and luxurious style and premium quality materials.
        </p>
        <Button text="More Info"/>
      </div>
    </section>
  )
}

export default Exprience