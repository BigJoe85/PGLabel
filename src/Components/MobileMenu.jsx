import React from 'react'
import { X } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import useUIStore from '../Stores/useUIStore'

const MobileMenu = () => {
    const menuOpen = useUIStore((state) => state.menuOpen)
    const toggleMenu = useUIStore((state) => state.toggleMenu)

    const menuStyle = "font-bold w-full, h-20 bg-gray-200 mt-4 mb-4 p-4 flex flex-col justify-center "
    return (
        <div>
            <div onClick={toggleMenu} className={`w-full h-screen bg-black/50 fixed z-45 top-0 p-5 cursor-pointer ${menuOpen ? 'block' : 'hidden'}`}></div>

            <div className={`transition-transform duration-400 h-full w-80 bg-white fixed z-50 top-0 left-0 p-5 ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}>

                <div className='py-2 hover:text-red-500' onClick={toggleMenu}> <X /> </div>

                <NavLink onClick={toggleMenu} to="/" ><div className="bg-[#07131b] w-full, h-15 mt-4 mb-4 p-4 flex flex-col justify-center text-white font-bold">HOME</div> </NavLink> <hr className='border-gray-200' />
                <NavLink onClick={toggleMenu} to="/new-arrivals"><div className={menuStyle}>NEW ARRIVALS</div> </NavLink> <hr className='border-gray-200' />
                <NavLink onClick={toggleMenu} to="/shop-men"><div className={menuStyle}>SHOP MEN</div> </NavLink> <hr className='border-gray-200' />
                <NavLink onClick={toggleMenu} to="/shop-women"><div className={menuStyle}>SHOP WOMEN</div> </NavLink> <hr className='border-gray-200' />
                <NavLink onClick={toggleMenu} to="/shop-women"><div className={menuStyle}>SHOP KIDS</div> </NavLink> <hr className='border-gray-200' />

                <NavLink onClick={toggleMenu} to="/contact-us">
                    <div className="w-full, h-20 bg-gray-200 mt-4 mb-4 p-4 flex flex-col justify-center ">
                        <h3 className='font-bold'>RSVP</h3>
                        <p className='text-sm'>Book a styling session with PgLabel</p>
                    </div>
                </NavLink><hr className='border-gray-200' />
            </div>

        </div>
    )
}

export default MobileMenu
