import React from 'react'
import useProductStore from '../Stores/useProductStore'
import ProductCard from '../Components/ProductCard';
import FilterSort from '../Components/FilterSort';
import Filter from '../Components/Filter';
import { useSearchParams } from 'react-router-dom'
import { sortProducts } from '../utils/sortProducts'

const NewArrivals = () => {
  const [searchParams] = useSearchParams();
  const sortBy = searchParams.get("sort") || "sort_by_latest";

  const products = useProductStore((state) => state.products) // here im using selector to pick a state created in useProductStore and saving it in a variable to represent the sellected state, always best to use the same state selected  as the variable name.


  const sortedProducts = sortProducts(products, sortBy)

  return (
    <div className='h-full w-full bg-white pt-20'>
      <div className='w-[95%] mx-auto '>

        <FilterSort />
        <Filter />

        <div className='grid grid-cols-4 max-xl:grid-cols-3 max-md:grid-cols-2 '>
          {sortedProducts.map(el => (
            < ProductCard el={el} key={el.id} /> // here i'm displaying a components and passing in my array method parameters as props so i can recieve and use in the component itself
          ))}
        </div>

      </div>

    </div>
  )
}

export default NewArrivals
