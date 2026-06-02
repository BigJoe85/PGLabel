import React from 'react'
import { useState } from 'react'
import { Minus, Plus } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { LiaInstagram } from "react-icons/lia";
import { GoArrowUpRight } from "react-icons/go";
import ContactUs from '../Pages/ContactUs';

const Footer = () => {
    const [useful, setUseful] = React.useState(false)
    const clickUseful = () => {
        setUseful(!useful)
    }

    const [sign, setSign] = React.useState(false)
    const clickSign = () => {
        setSign(!sign)
    }



    return (
        <div className='w-full'>

            <div className='max-md:w-[95%] w-[90%] mx-auto'>

                <hr className='border-gray-200 py-4' />

                <div className='bg-white grid justify-items-between max-md:justify-items-start max-lg:justify-items-start grid-cols-3 max-lg:grid-cols-2  max-md:grid-cols-1 gap-8 max-md:gap-8 py-4 '>

                    <div>
                        <img className='w-15 pb-6' src="https://res.cloudinary.com/duoy2tsyc/image/upload/q_auto/f_auto/v1778485826/Yomicasual__Logo_bcyvle.webp" alt="PgLabel-Logo" />
                        <p className='pb-2'>Address: No 1, Elder Ndubueze Street, Nkpor, Rivers, Nigeria.</p>
                        <p className='pb-2'>Email: <span className='font-bold'>pglabel1@gmail.com</span></p>
                        <p className='pb-2'>Phone: <span className='font-bold'>+2347049496859</span></p>

                        <a href="https://maps.app.goo.gl/QZHUiDpziAqK358U7">
                            <div className='w-full pt-2 flex items-center'>
                                <p className='font-bold'>Get direction</p>
                                <GoArrowUpRight />
                            </div>
                            <hr className='w-[6.5rem]' />
                        </a>

                        <div className='pt-6'>
                            <NavLink to="https://www.instagram.com/p.g_label?igsh=Nm1od2l6YXc5ZTlj"><div className='flex items-center justify-center h-6 w-6 border rounded-2xl'> <LiaInstagram /></div></NavLink>
                        </div>

                    </div>



                    <div className='justify-self-center max-md:w-full'>
                        <div onClick={clickUseful} className=' max-md:flex max-md:w-full max-md:h-[1rem] max-md:justify-between'>
                            <h3 className='pb-8 font-bold'>USEFUL LINKS</h3>
                            <div className='hidden max-md:block'>{useful ? <Minus size={20} strokeWidth={1} /> : <Plus size={20} strokeWidth={1}/>}</div>
                        </div>

                        <div className={`overflow-hidden transition-all duration-500 ${useful ? 'max-md:py-4 max-h-[7rem] opacity-100' : 'max-h-0 opacity-0 md:max-h-[7rem] md:opacity-100'}`}>
                            <NavLink to="/contact-us" >Contact Us</NavLink>
                        </div>
                    </div>



                    <div className='w-full'>
                        <div className='max-md:h-[1rem] max-md:pb-4 max-md:flex max-md:justify-between max-md:w-full' onClick={clickSign}>
                            <h3 className=' pb-8 font-bold'>SIGN UP FOR EMAIL</h3>
                            <div className='hidden max-md:block'>{sign ? <Minus size={20} strokeWidth={1} /> : <Plus size={20} strokeWidth={1} />}</div>
                        </div>

                        <div className={`overflow-hidden transition-all duration-500 ${sign ? 'max-h-[9rem] opacity-100' : 'max-h-0 opacity-0 md:max-h-[9rem] md:opacity-100'}`}>
                            <p className='max-md:py-4 pb-8'>15% Off Your First Purchase + Early Access To New <br /> Releases, Vip And Pop-up Shop Event.</p>

                            <div className='relative'>
                                <input
                                    type="email"
                                    placeholder='Your email address'
                                    className='text-[clamp(0.7rem,2vw,1rem)] rounded w-[90%] border border-gray-300 py-3 px-4 pr-32'
                                />

                                <button className='text-[clamp(0.7rem,2vw,1rem)] top-1/2 -translate-y-1/2 absolute right-14 top-0 h-10 px-4 bg-[#563624] text-white'>
                                    Subscribe ↗
                                </button>
                            </div>
                        </div>
                    </div>

                </div>

                <hr className='border-gray-200 py-2' />

                <div className='flex justify-between max-md:flex-col max-md:items-center gap-4 py-4'>
                    <p className='text-[clamp(0.7rem,2vw,1rem)]'> © 2026 PG Label. All Rights Reserved. Designed by @BigJoeDev.</p>
                    <img className='max-md:w-[15rem]' src="https://res.cloudinary.com/duoy2tsyc/image/upload/q_auto/f_auto/v1779978716/payments_fbd0dt.png" alt="Payment methods icons" />
                </div>

            </div>

        </div>
    )
}

export default Footer
