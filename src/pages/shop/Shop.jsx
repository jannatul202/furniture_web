import React from 'react'
import HeroImg from '../../assets/herobg.png'
import Products from './Products'
import Meterials from '../home/Meterials'

const Shop = () => {
  return (
    <section className='min-h-screen'>
      {/* banner */}
      <div className='h-screen bg-cover bg-center relative flex items-center justify-center text-white'
      style={{backgroundImage:`url(${HeroImg})`}}>
        <h1 className='text-4xl font-bold'>Shop our products</h1>
      </div>
      {/* product cart */}
        <Products headline="What's Your Choice"/>
        {/*  */}
        <Meterials/>
    </section>
  )
}

export default Shop