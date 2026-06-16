import React from 'react'
import { X, Search } from 'lucide-react'
import useUIStore from '../Stores/useUIStore'

const NavSearch = () => {

  const searchOpen = useUIStore((state)=>state.searchOpen)
  const toggleSearch = useUIStore((state)=>state.toggleSearch)

  return (
    <>
     <div onClick={toggleSearch} className={`w-full h-screen bg-black/50 fixed z-[45] top-0 p-5 cursor-pointer ${searchOpen ? 'block' : 'hidden'}`}></div>
   
    <div className={`px-6 py-8 w-full bg-white h-screen z-50 fixed top-0 transition-transform duration-600 max-xl:right-0  max-xl:w-96 max-md:w-[90%]  ${searchOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      <div className='flex justify-end'> <X className='hover:text-red-500' onClick={toggleSearch} /> </div>
      <div className='text-center'>
        <h1 className='pb-5'>SEARCH PG-LABEL</h1>

        <input className='hover:border-black focus:outline-black px-4 border-gray-200 border-2 border-solid rounded-md w-4/12 h-12 max-xl:w-11/12'  type="search" placeholder='Search Pg-Label...' name="" id="" />
        
      </div>
    </div>
     </>
  )
}

export default NavSearch
