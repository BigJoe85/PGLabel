import React from 'react'
import { IoLogoWhatsapp } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { MdMarkEmailRead } from "react-icons/md";
import { GrInstagram } from "react-icons/gr";





const ContactUs = () => {
    return (
        <div className='w-full h-full max-md:pt-20 max-md:pb-10 pt-30 pb-30'>
            <div className='w-[80%] h-[full] max-lg:w-[95%] mx-auto grid grid-cols-4 max-lg:grid-cols-1 gap-4'>

                <div className=' bg-gray-200 rounded px-4 py-6 flex flex-col gap-4'>
                    <h4 className='font-normal text-[clamp(1.2rem,1.5vw,1.4rem)]'>PHONE</h4>
                    <p className='text-[clamp(0.8rem,1vw,1rem)]'>Send a call through, our support specialist are available 24/7 to speak with you</p>

                    <div>
                        <a href="tel:+2347049496859">
                            <div className='bg-[#563624] hover:bg-black text-white h-10 w-35 flex gap-2 items-center justify-center'>
                                <FaPhone />
                                <p>Get in touch</p>
                            </div>
                        </a>
                    </div>
                </div>


                <div className=' bg-gray-200 rounded px-4 py-6 flex flex-col gap-4'>
                    <h4 className='font-normal text-[clamp(1.2rem,1.5vw,1.4rem)]'>SUPPORT</h4>
                    <p className='text-[clamp(0.8rem,1vw,1rem)]'>Contact us via WhatsApp chat, we are available to respond to chat 24/7 </p>

                    <div>
                        <a href="https://wa.me/2347049496859" target="_blank">
                            <div className='bg-[#563624] hover:bg-black text-white h-10 w-35 flex gap-2 items-center justify-center'>
                                <IoLogoWhatsapp />
                                <p>Get in touch</p>
                            </div>
                        </a>
                    </div>
                </div>

                <div className='bg-gray-200 rounded px-4 py-6 flex flex-col gap-4'>
                    <h4 className='font-normal text-[clamp(1.2rem,1.5vw,1.4rem)]'>EMAIL</h4>
                    <p className='text-[clamp(0.8rem,1vw,1rem)]'>Send us an email, we respond to inquiries according to the time received.</p>

                    <div>
                        <a href="mailto:pglabel1@gmail.com">
                            <div className='bg-[#563624] hover:bg-black text-white h-10 w-35 flex gap-2 items-center justify-center'>
                                <MdMarkEmailRead />
                                <p>Get in touch</p>
                            </div>
                        </a>
                    </div>
                </div>

                <div className=' bg-gray-200 rounded-lg px-4 py-6 flex flex-col gap-4'>
                    <h4 className='font-normal text-[clamp(1.2rem,1.5vw,1.4rem)]'>INSTAGRAM</h4>
                    <p className='text-[clamp(0.8rem,1vw,1rem)]'>Contact us via Instagram, we are available to respond to chat 24/7</p>

                    <div>
                        <a href="https://www.instagram.com/p.g_label?igsh=Nm1od2l6YXc5ZTlj">
                            <div className='bg-[#563624] hover:bg-black text-white h-10 w-35 flex gap-2 items-center justify-center'>
                                <GrInstagram />
                                <p>Get in touch</p>
                            </div>
                        </a>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default ContactUs
