import React from 'react'
import useProductStore from '../Stores/useProductStore'
import ProductCard from './ProductCard'


const PgNew = () => {
    const products = useProductStore((state) => state.products)

    const newArrivals = products.slice(0, 4);


    return (
        <div>
            <div className=' py-10 w-[85%] max-md:w-[95%] mx-auto'>
                <div className='pb-5 text-center'>
                    <h1 className='text-[#563624] font-medium'>PG-Label</h1>
                    <p className='text-[#563624] font-bold' >NEW COLLECTION</p>
                </div>

                <div className='grid grid-cols-4 max-xl:grid-cols-3 max-md:grid-cols-2 '>
                    {newArrivals.map(el => (
                        < ProductCard el={el} key={el.id} />
                    ))}
                </div>
            </div>
        </div>
    )
}









export default PgNew