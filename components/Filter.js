
import { filters } from '@/lib/data.js'
import { MoreVertical } from 'lucide-react'
import Link from 'next/link.js'

const Filter = ({query,filter}) => {
 
  return (
    <div className='py-3 px-6 flex items-center gap-x-4 '>
      <div className='flex-1 flex items-center justify-between'>
      {filters.map((filterTag,index)=>(
        <Link href={`/?query=${query}&filter=${filterTag.value}`} key={index} className={`py-3 px-4 border-2  rounded-lg text-lg font-semibold ${filter===filterTag.value?"border-violet-500 text-violet-500":"border-zinc-500 text-zinc-500"}`} >
          {filterTag.name}
        </Link>
      ))}
      </div>
      <MoreVertical className='size-8'/>
      
    </div>
  )
}

export default Filter