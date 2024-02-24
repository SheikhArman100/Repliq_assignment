import { SearchIcon } from 'lucide-react'
import React from 'react'

const Search = () => {
  return (
    <div className='flex items-center gap-x-4 py-4 px-8 shadow-md shadow-gray-500'>
      <SearchIcon className='size-8'/>
      <input className='flex-1 text-base' type="text" placeholder='Search product'/>
    </div>
  )
}

export default Search