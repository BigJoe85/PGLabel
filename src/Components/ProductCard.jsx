import React from 'react'
import { useState } from "react"
import { NavLink } from 'react-router-dom'
import { ShoppingBag } from "lucide-react";


const ProductCard = ({ el }) => { // here i'm recieving props which i passed down from PgNew component so i can also reUse in this component

    const [isHover, setIsHover] = React.useState(false)
    const onMouseEnter = () => setIsHover(true)
    const onMouseLeave = () => setIsHover(false)

    const [select, setSelect] = React.useState(false)
    const onEnter = () => setSelect(true)
    const onLeave = () => setSelect(false)

    const [ hoverImg, setHoverImg] = React.useState(false)
    const mouseEnter = () => setHoverImg(true)
    const mouseLeave = () => setHoverImg(false)


    const hasMultipleImages = el.img.length > 1 // checking if img property of the product has more than 1 image, if it does then it will return true and allow the hover effect to work, if not it will return false and the hover effect will not work, this is to prevent errors from trying to access an index that doesn't exist in the array.


    return (
        <div className='justify-items-center text-[#563624]'>
            <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className='w-4/5 py-5'>
              <NavLink to={`/product-details/${el.id}`} >
                <div className='relative overflow-hidden mb-6'>

                    <img onMouseEnter={hasMultipleImages ? mouseEnter : undefined} onMouseLeave={hasMultipleImages ? mouseLeave : undefined} className='hover:scale-110 transition-transform duration-700' src={hoverImg && hasMultipleImages ? el.img[1] : el.img[0]} alt={el.name} />

                    <div className={`p-1 bg-black text-white text-xs absolute left-1/2 -translate-x-1/2 transition-transform duration-700 bottom-20 ${select ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}> <p>Select options</p> </div>

                    <div onMouseEnter={onEnter} onMouseLeave={onLeave} className={`absolute left-1/2 -translate-x-1/2 transition-transform duration-300 bottom-5 ${isHover ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
                        <div className='bg-white hover:bg-black hover:text-white p-2 '> <ShoppingBag /> </div>
                    </div>

                </div>
                </NavLink>

                <h2 className='cursor-pointer font-medium pb-1 hover:text-[#D0810B]'>{el.name}</h2>
                <p> <strong>₦</strong>{(el.price).toLocaleString('en-NG', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} </p>
            </div>
            



        </div>
    )
}

export default ProductCard
