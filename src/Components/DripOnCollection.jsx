import React from 'react'
import ProductCard from '../Components/ProductCard';
import useProductStore from '../Stores/useProductStore'
import { NavLink } from 'react-router-dom';

const DripOnCollection = () => {
    const products = useProductStore((state) => state.products) // here im using selector to pick a state created in useProductStore and saving it in a variable to represent the sellected state, always best to use the same state selected  as the variable name.

    return (

        <div>
            <div className=' flex flex-col py-10 w-[85%] max-md:w-[95%] mx-auto'>
                <div className='pb-5 text-center'>
                    <h1 className='text-[#563624] font-medium'>DRIP ON</h1>
                    <p className='text-[#563624] font-bold' >SS24 COLLECTIONS</p>
                </div>

                <div className='grid grid-cols-4 max-xl:grid-cols-3 max-md:grid-cols-2 '>
                    {products.filter(product => product.category === "men").slice(0, 4).map(el => (
                        < ProductCard el={el} key={el.id} /> // here i'm displaying a components and passing in my array method parameters as props so i can recieve and use in the component itself
                    ))}
                </div>

                <NavLink to='/shop-men' className='text-center bg-[#563624] hover:bg-black text-white py-2 px-4 mt-5 mx-auto'>SHOP COLLECTION</NavLink>
            </div>
        </div>


    )
}

export default DripOnCollection
