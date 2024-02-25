import CartFooter from '@/components/CartFooter.js'
import CartList from '@/components/CartList.js'
import Navbar from '@/components/Navbar.js'
import { CircleUserRound, PlusCircle } from 'lucide-react'
import React from 'react'

const Carts = () => {
  return (
    <section className='w-full px-4'>
      <Navbar/>
      <div className=' w-full py-4 px-4 flex items-center justify-between  bg-zinc-200 font-semibold text-indigo-400 rounded-lg '>
        <div className='flex items-center gap-x-3 '>
        <CircleUserRound className='size-8' />
        <p className='text-xl font-bold'>Steve Jobs</p>
        </div>
        <PlusCircle className='size-8'/>
      </div>
      <CartList/>
      <CartFooter/>
    </section>
  )
}

export default Carts