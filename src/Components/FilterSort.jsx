import React from 'react'
import { ListFilter } from 'lucide-react'
import useUIStore from '../Stores/useUIStore'
import { useSearchParams } from 'react-router-dom'

const FilterSort = () => {
  const toggleFilter = useUIStore((state) => (state.toggleFilter))

const filtered = [

    {
      id: 1,
      label: "Sort by latest",
      value: "sort_by_latest"
    },
    {
      id: 2,
      label: "Sort by popularity",
      value: "Sort_by_popularity"
    },
    {
      id: 3,
      label: "Sort by price: low to high",
      value: "Sort_by_price_low_to_high"
    },
    {
      id: 4,
      label: "Sort by price: high to low",
      value: "Sort_by_price_high_low"
    },
  ]

  const [searchParams, setSearchParams] = useSearchParams();



  return (
    <div className='w-full h-full py-10'>
      <div className='w-[95%] mx-auto'>
        <div className='flex justify-between gap-4'>

          <div onClick={toggleFilter} className='flex items-center gap-2 p-2 border border-gray-300 hover:border-[#563624]'>
            <ListFilter size={20} />
            <p className='text-sm'>FILTER</p>
          </div>



          <select value={searchParams.get("sort") || "sort_by_latest" } onChange={ (e)=> setSearchParams({sort: e.target.value})} className='items-center p-2 border rounded border-gray-300 hover:border-[#563624]' name="" id="">
            <option value="" disabled>Sort by</option>
            {filtered.map(el => (
              <option key={el.id} value={el.value}>{el.label}</option>
            ))}
          </select>
          
        </div>
      </div>
    </div>
  )
}

export default FilterSort
