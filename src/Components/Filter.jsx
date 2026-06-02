import React from 'react'
import useUIStore from '../Stores/useUIStore'

const Filter = () => {
    const filterOpen = useUIStore((state) => state.filterOpen)
    const toggleFilter = useUIStore((state) => state.toggleFilter)
  return (
    <div className='h-full w-full relative'>
      <div className={`absolute h-full w-[10rem] left-0 top-0 bg-black z-1000 ${filterOpen ? 'block' : "hidden"}`}>
        <h1>Filter</h1>
      </div>
    </div>
  )
}

export default Filter
