import React from 'react'
import ProductCard from '../Components/ProductCard';
import useProductStore from '../Stores/useProductStore'

const FootCollection = () => {
  const products = useProductStore((state) => state.products) // here im using selector to pick a state created in useProductStore and saving it in a variable to represent the sellected state, always best to use the same state selected  as the variable name.

  //   const footCollection = products.slice(0, 4);

  return (

    <div>
      <div className=' py-10 w-[85%] max-md:w-[95%] mx-auto'>
        <div className='pb-5 text-center'>
          <h1 className='text-[#563624] font-medium'>THIS SEASON</h1>
          <p className='text-[#563624] font-bold' >FOOTWEAR COLLECTION</p>
        </div>

        <div className='grid grid-cols-4 max-xl:grid-cols-3 max-md:grid-cols-2 '>
          {products.filter(products => products.category === "footwear").map(el => (
            < ProductCard el={el} key={el.id} /> // here i'm displaying a components and passing in my array method parameters as props so i can recieve and use in the component itself
          ))}
        </div>
      </div>
    </div>


  )
}

export default FootCollection
