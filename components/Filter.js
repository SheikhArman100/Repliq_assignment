
import { filters } from '@/lib/data.js'
import { MoreVertical } from 'lucide-react'
import Link from 'next/link.js'

const Filter = ({query,filter}) => {
 
  return (
    <div className='py-3 px-6 flex items-center gap-x-4 '>
      <div className='flex-1 flex items-center 2xl:justify-between justify-center  flex-wrap gap-2'>
      {filters.map((filterTag,index)=>(
        <Link href={`/?query=${query}&filter=${filterTag.value}`} key={index} className={` p-2 md:py-3 md:px-4 border-2  rounded-lg text-base md:text-lg font-semibold ${filter===filterTag.value?"border-violet-500 text-violet-500":"border-zinc-500 text-zinc-500"}`} >
          {filterTag.name}
        </Link>
      ))}
      </div>
      <MoreVertical className='hidden xl:block size-8'/>
      
    </div>
  )
}

export default Filter