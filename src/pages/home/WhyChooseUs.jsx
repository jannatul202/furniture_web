import React from 'react'
import Button from '../../components/Button'

const WhyChooseUs = () => {
  return (
    <section className='section-container'>
      <div className='my-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center gap-8'>
        <div>
          <h2 className='font-bold text-4xl'>Why <br/> Choose Us</h2>
        </div>
        <div>
          <h3 className='text-2xl font-semibold mb-3'>Luxury facilities</h3>
          <p className='text-base mb-2'>The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.</p>
          <Button text='More Info'/>
        </div>
        <div>
          <h3 className='text-2xl font-semibold mb-3'>Affordable Price</h3>
          <p className='text-base mb-2'>You can get a workspace of the highst quality at an affordable price and still enjoy the facilities that are oly here.</p>
          <Button text='More Info'/>
        </div>
        <div>
          <h3 className='text-2xl font-semibold mb-3'>Many Choices</h3>
          <p className='text-base mb-2'>We provide many unique work space choices so that you can choose the workspace to your liking.</p>
          <Button text='More Info'/>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs