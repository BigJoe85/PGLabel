import React from 'react'
import { ListFilter } from 'lucide-react'
import useUIStore from '../Stores/useUIStore'

const FilterSort = () => {
  const toggleFilter = useUIStore((state) => (state.toggleFilter))

  return (
    <div className='w-full h-full'>
      <div className='w-[95%] mx-auto'>
        <div className='flex justify-between gap-4'>
          
          <div onClick={toggleFilter} className='flex items-center gap-2 p-2 border border-gray-300 hover:border-[#563624]'>
            <ListFilter size={20} />
            <p className='text-sm'>FILTER</p>
          </div>



          <select className='items-center p-2 border rounded border-gray-300 hover:border-[#563624]' name="" id="">
            <option value="" disabled>Sort by</option>
            <option value="">Sort by latest</option>
            <option value="">Sort by popularity</option>
            <option value="">Sort by price: low to high</option>
            <option value="">Sort by price: high to low</option>
          </select>

        </div>
      </div>
    </div>
  )
}

export default FilterSort
