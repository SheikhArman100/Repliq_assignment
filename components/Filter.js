import { filters } from '@/lib/data.js'
import { MoreVertical } from 'lucide-react'
import React from 'react'

const Filter = () => {
  return (
    <div className='py-3 px-6 flex items-center gap-x-4 '>
      <div className='flex-1 flex items-center justify-between'>
      {filters.map((filter,index)=>(
        <button key={index} className='py-3 px-4 border-2 border-zinc-500 text-zinc-500 rounded-lg text-lg font-semibold'>
          {filter.name}
        </button>
      ))}
      </div>
      <MoreVertical className='size-8'/>
      
    </div>
  )
}

export default Filter