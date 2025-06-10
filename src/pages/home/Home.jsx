import React from 'react'
import Hero from './Hero'
import WhyChooseUs from './WhyChooseUs.jsx'
import Products from '../shop/Products'
import Exprience from './Exprience'
import Meterials from './Meterials'
import Testimonial from './Testimonial'

const Home = () => {
  return (
    <>
    <Hero/>
    <WhyChooseUs/>
    <Products headline="Best Selling Product"/>
    <Exprience/>
    <Meterials/>
    <Testimonial/>
    </>
  )
}

export default Home