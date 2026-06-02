import React from 'react'
import { CircleUserRound, Menu, Search, ShoppingBag, ChevronRight, ChevronLeft, Import } from "lucide-react";
import { NavLink } from 'react-router-dom';
import { useState, useEffect} from 'react';
import useUIStore from '../Stores/useUIStore';
import useCartStore from '../Stores/useCartStore';




const Navbar = ({ handleClick }) => {
    
    // const cartOpen = useUIStore((state) =>state.cartOpen)
    const toggleCart = useUIStore((state) => state.toggleCart)
    const toggleSearch = useUIStore((state)=>state.toggleSearch)
    const toggleLogin = useUIStore((state) => state.toggleLogin)
    const toggleMenu = useUIStore((state) => state.toggleMenu)

    // useCartStore array
    const items = useCartStore((state) => state.items)

    const navLinkClass = "font-medium relative after:absolute after:-bottom-2 after:left-0 after:h-[1px] after:w-0 after:bg-[#563624] after:transition-all after:duration-300 hover:after:w-full"

    const [isScrolled, setIsScrolled] = React.useState(false)
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className='relative z-40'>
            <header className={`text-[#563624] w-full top-0 flex justify-between items-center px-8 py-6 max-md:px-2 ${isScrolled ? 'fixed bg-white': 'absolute'}`}>

                <div className='hidden max-xl:block' >
                    <Menu onClick={toggleMenu} />
                </div>

                <nav className='nav max-xl:hidden'>
                    <ul className='flex gap-8 '>
                        <li><NavLink to="/" className={navLinkClass}>HOME</NavLink></li>
                        <li><NavLink to="/new-arrivals" className={navLinkClass}>NEW ARRIVALS</NavLink></li>
                        <li><NavLink to="/shop-men" className={navLinkClass}>SHOP MEN</NavLink></li>
                        <li><NavLink to="/shop-women" className={navLinkClass}>SHOP WOMEN</NavLink></li>
                        <li><NavLink to="/footwears" className={navLinkClass}>FOOTWEARS</NavLink></li>
                    </ul>
                </nav>

                <div className='absolute left-1/2 -translate-x-1/2'>
                    <NavLink to="/"><img src="https://res.cloudinary.com/duoy2tsyc/image/upload/q_auto/f_auto/v1778485826/Yomicasual__Logo_bcyvle.webp" alt="PgLabel-Logo" /></NavLink>
                </div>

                <div className='flex gap-8'>
                    <Search onClick={toggleSearch} />
                    <CircleUserRound onClick={toggleLogin} className='max-lg:hidden' />
                    <div onClick={toggleCart} className=''>
                        <ShoppingBag />
                        <div className='absolute top-4 right-6 max-md:right-1 bg-[#563624] w-4 rounded-md'>
                            <span className='flex items-center justify-center text-sm text-white'>{items.length}</span>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Navbar
