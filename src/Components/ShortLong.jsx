import React from 'react'
import { NavLink } from 'react-router-dom'

const ShortLong = () => {
    return (
        <div className='w-full max-md:pt-2 max-md:pb-10 py-8'>
            <div className='max-md:w-[95%] w-[90%] mx-auto'>
                <div className='grid grid-cols-2 max-md:grid-cols-1 gap-6'>
                    <div className='relative h-[65dvh] max-lg:h-[50dvh] bg-[url("https://res.cloudinary.com/duoy2tsyc/image/upload/v1780538291/P1_uuryfm.jpg")] bg-cover bg-center bg-no-repeat'>

                        <NavLink to="/shop-men" className=" absolute bottom-10 text-[#563624] hover:bg-black hover:text-white bg-white px-4 py-1 left-1/2 -translate-x-1/2" >SHOP MEN</NavLink>
                    </div>

                    <div className='relative h-[65dvh] max-lg:h-[50dvh] bg-[url("https://res.cloudinary.com/duoy2tsyc/image/upload/v1780540849/P4_ruzyjy.jpg")] bg-cover bg-center bg-no-repeat'>

                        <NavLink to="/shop-women" className='absolute bottom-10 text-[#563624] hover:bg-black hover:text-white bg-white px-4 py-1 left-1/2 -translate-x-1/2' >SHOP WOMEN</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShortLong
