import React from 'react'
import { getImgurl } from '../../utils/getImgUrl'
import Rating from '../../components/Rating'
import { FaPlus } from "react-icons/fa6";

const ProductCard = ({product}) => {
  return (
    <div>
      <div className='bg-[#fafafa]'>
        <img src={getImgurl(product.imageUrl)} alt="" />
      </div>
      <div className='p-6 bg-white dark:bg-black shadow-sm'>
        <h4 className='text-base mb-1'>{product.category}</h4>
        <h3 className='text-xl font-semibold mb-2'>{product.name}</h3>
        <Rating rating={product.rating}/>
        <div className='mt-5 flex justify-between items-center'>
          <p className='text-black dark:text-white font-bold text-lg'><sup>$</sup>{product.price}</p>
          <button className='bg-black text-white p-2 rounded-full hover:bg-black/70'>
            <FaPlus />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard