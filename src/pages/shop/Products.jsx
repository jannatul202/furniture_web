import React, { useState } from 'react'
import { products } from '../../utils/products'
import ProductCard from './ProductCard'
import ArrowIcon from '../../assets/button-icon.png'

const Products = ({headline}) => {
  const categogies =["Chair","Beds","Sofa","Lamp"]
  const [selectCategory , setSelectCategory] = useState("Chair")
  const [visibleProdust , setVisibleProdust]=useState(4)
  const filterCategory = products.filter((product)=> product.category === selectCategory)

  const viewMore =() => {
    setVisibleProdust((prev)=>prev+4)
  }

  return (
    <div>
      <div className='section-container'>
        <h2 className='text-4xl font-bold text-center my-8'>{headline}</h2>
        {/* category tabs */}
        <div className='bg-[#EEEEEE] max-w-md mx-auto md:rounded-full 
        rounded-lg md:p-2.5 py-5 mb-16'> 
            <div className='flex flex-col md:flex-row md:justify-between justify-center gap-4'>
              {
                categogies.map((category , index)=>(
                  <button 
                  onClick={()=>{
                    setSelectCategory(category)
                    setVisibleProdust(4)
                  }}
                   key={index}
                  className={`bg-white/80 font-semibold hover:bg-primary hover:text-white px-2 py-1 rounded-full
                    transition-all ease-in-out duration-200 ${selectCategory=== category? 'text-primary':'text-black'}`}>{category}</button>
                ))
              }
            </div>
        </div>

        {/* prodpucts */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
          {
            filterCategory.slice(0, visibleProdust).map((product , id)=>(
              <ProductCard key={id} product={product}/>
              // <div key={id}>{product.name}</div>
            ))
          }
        </div>

        {/* view more button */}
          {
            visibleProdust < filterCategory.length && (
              <div className='flex mt-8 justify-center items-center'>
                <button onClick={viewMore} className='flex justify-center items-center text-primary cursor-pointer'>
                  View More
                  <img src={ArrowIcon} alt="arrow icon"  className='ml-2 mt-1'/>
                </button>
              </div>
            )  
          }
          

      </div>
    </div>
  )
}

export default Products