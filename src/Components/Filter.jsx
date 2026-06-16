import React from 'react'
import { X, ListFilter } from 'lucide-react'
import useUIStore from '../Stores/useUIStore'

const Filter = () => {
  const filterOpen = useUIStore((state) => state.filterOpen)
  const toggleFilter = useUIStore((state) => state.toggleFilter)
  return (
    <div className='h-full w-full'>

      <div onClick={toggleFilter} className={` w-full h-screen bg-black/50 fixed z-45 top-0 p-5 cursor-pointer ${filterOpen ? 'block' : 'hidden'}`}></div>

      <div className={`drop-shadow-2xl fixed h-full w-[26rem] max-md:w-[90%] left-0 top-0 bg-white z-50 transition-transform duration-400 ${filterOpen ? 'translate-x-0' : '-translate-x-full'}`}>

        <div className='flex justify-between items-center p-4 border-b border-gray-200 bg-gray-100 '>
          <div className='flex gap-2 items-center'>
            <ListFilter size={20} />
            <h1>FILTER</h1>
          </div>

          <div onClick={toggleFilter} className='cursor-pointer'> <X className="hover:scale-110 transition-transform hover:text-red-500" /></div>
        </div>
      </div>
    </div>
  )
}

export default Filter
