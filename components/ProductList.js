import { products } from '@/lib/data.js'
import Image from 'next/image.js'
import React from 'react'

const ProductList = () => {
  return (
    <div className='flex-1 py-3 px-6 grid grid-cols-5 gap-3'>
      {products.map((product,index)=>(
        <div key={index} className='flex flex-col border border-zinc-400  text-zinc-600'>
          <div className='relative w-full aspect-[1/1.2] bg-gray-500'>
          <Image src={product.image} alt={product.title} fill  className='w-full h-full object-cover'/>
          </div>
          
          <p className='text-center text-lg font-bold p-1'>${product.price}</p>
          <h4 className='text-center text-base font-semibold p-1  border-t border-t-zinc-400'>{product.title}</h4>

        </div>
      ))}
      
    </div>
  )
}

export default ProductList