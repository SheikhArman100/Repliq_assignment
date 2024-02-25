"use client"
import { decreaseQuantity, increaseQuantity, useCart } from '@/lib/store/cartStore.js'
import { FilePenLine, Minus, Plus, Trash2 } from 'lucide-react'
import React from 'react'
import DeleteButton from './DeleteButton.js'

const CartList = () => {
    const cart=useCart()

  return (
    <div>
      {cart?.length > 0 ? (
        <ul>
          {cart.map((cartItem, index) => (
            <li key={index} className='flex items-center p-4 gap-x-2'>
              <FilePenLine />
              <CartItem cartItem={cartItem}/>
              <DeleteButton  cartTitle={cartItem.title}/>
               
            </li>
          ))}
        </ul>
      ) : (
        <p className='text-center'>No items in your cart.</p>
      )}
    </div>
  )
}

const CartItem=({cartItem})=>{
    return(
        <div className='flex-1 grid grid-cols-4 border border-zinc-400 p-3.5 text-zinc-500'>
            <h5 className='text-2xl font-bold '>{cartItem.title}</h5>
            <span className='text-xl font-bold text-right'>${cartItem.price}</span>
            <div className='flex items-center gap-x-4  justify-end'>
              <button className='p-1 bg-zinc-500 text-white rounded-full' onClick={() => decreaseQuantity(cartItem.title)}><Minus/></button>
              <p className='text-xl font-semibold'>{cartItem.quantity}</p>
              <button className='p-1 bg-zinc-500 text-white rounded-full ' onClick={()=>increaseQuantity(cartItem.title)}><Plus/></button>
            </div>
            <h4 className='text-xl font-bold text-right'>${cartItem.totalPrice}</h4>


        </div>
    )
}

export default CartList