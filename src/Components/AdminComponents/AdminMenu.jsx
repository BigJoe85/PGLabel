import React from 'react'
import { useState } from 'react'
import { NavLink } from "react-router-dom"
import { Square } from "lucide-react"

const AdminMenu = () => {
    return (
        <>
            <div className='text-white h-screen w-[17rem] bg-[#1e140a] flex flex-col'>

                <div className='flex gap-2 items-center border-b border-white/10 py-6 mb-8'>
                    <div>
                        <img src="https://res.cloudinary.com/duoy2tsyc/image/upload/v1778485826/Yomicasual__Logo_bcyvle.webp" alt="PG Label Logo" />
                    </div>

                    <div>
                        <h1 className='text-2xl'>PG LABEL</h1>
                        <p className='text-[0.55rem] tracking-[0.3em]'>ADMIN CONSOLE</p>
                    </div>
                </div>

                <div className='mb-4'>
                    <h1 className='text-[0.6rem] tracking-[0.2em] text-white/30 px-6 mb-2'>OVERVIEW</h1>

                    <div className='flex flex-col gap-2'>
                        <NavLink to="/admin" end className="px-6 py-2 text-sm text-white/60 hover:text-white hover:bg-[#20170d]">Dashboard</NavLink>
                        <NavLink to="analytics" className="px-6 py-2 text-sm text-white/60 hover:text-white hover:bg-[#20170d]" >Analytics</NavLink>
                    </div>
                </div>

                <div className=' mb-4'>
                    <h1 className="text-[0.6rem] tracking-[0.2em] text-white/30 px-6 mb-2">STORE</h1>
                    <div className='flex flex-col gap-2'>

                        <div className='text-white/60 hover:text-white hover:bg-[#20170d] px-6 py-2 flex gap-2 items-center'>
                            <Square size={12} strokeWidth={2} />
                            <NavLink to="orders" className="text-sm" >Orders</NavLink>
                        </div>

                        <div className='text-white/60 hover:text-white hover:bg-[#20170d] px-6 py-2 flex gap-2 items-center'>
                            <Square size={12} strokeWidth={2} />
                            <NavLink to="products" className="text-sm" >Products</NavLink>
                        </div>

                        <div className='text-white/60 hover:text-white hover:bg-[#20170d] px-6 py-2 flex gap-2 items-center'>
                            <Square size={12} strokeWidth={2} />
                            <NavLink to="customers" className="text-sm" >Customers</NavLink>
                        </div>

                        <div className='text-white/60 hover:text-white hover:bg-[#20170d] px-6 py-2 flex gap-2 items-center'>
                            <Square size={12} strokeWidth={2} />
                            <NavLink to="discounts" className="text-sm" >Discounts</NavLink>
                        </div>

                    </div>
                </div>

                <div className=' mb-4'>
                    <h1 className="text-[0.6rem] tracking-[0.2em] text-white/30 px-6 mb-2">SYSTEM</h1>
                    <div className='flex flex-col gap-2'>

                        <div className='text-white/60 hover:text-white hover:bg-[#20170d] px-6 py-2 flex gap-2 items-center'>
                            <Square size={12} strokeWidth={2} />
                            <NavLink to="shipping" className="text-sm" >Shipping</NavLink>
                        </div>

                        <div className='text-white/60 hover:text-white hover:bg-[#20170d] px-6 py-2 flex gap-2 items-center'>
                            <Square size={12} strokeWidth={2} />
                            <NavLink to="settings" className="text-sm" >Settings</NavLink>
                        </div>

                    </div>
                </div>

                <div className='flex gap-4 items-center mt-auto border-t border-white/10 p-6'>

                    <div className='w-8 h-8 rounded-full bg-[#7a4828] flex items-center justify-center'>
                        <p>P</p>
                    </div>

                    <div>
                        <h1 className='text-sm'>PG Label</h1>
                        <p className='text-sm text-white/60'>Administrator</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminMenu
