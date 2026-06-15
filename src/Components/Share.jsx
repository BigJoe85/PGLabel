import React from 'react'
import { X } from 'lucide-react'
import { useState } from "react"
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
import { FaTiktok } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";


const Share = ({ share, toggleShare, shareUrl }) => {

    // displaying a popup on click of copy
    const [copied, setCopied] = useState(false);

    //this handles copying to clipboard
    const copyText = () => {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            // works on desktop and modern mobile with HTTPS
            navigator.clipboard.writeText(shareUrl);  // we are copying the value of shareURL which holds the value of our current url
        } else {
            // fallback for mobile
            const input = document.getElementById("URL_text");
            input.select();
            input.setSelectionRange(0, 99999); // for mobile
            document.execCommand("copy");
        }

        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 2000);
    }







    return (
        <div className={`z-[1000] fixed inset-0 ${share ? 'pointer-events-auto' : 'pointer-events-none'}`}>

            <div onClick={toggleShare} className={`z-[50] h-full w-full bg-black/10 hover:cursor-pointer backdrop-blur-[3px] ${share ? 'opacity-100' : 'opacity-0'}`}> </div>



            <div className='w-full h-auto'>
                <div className={`absolute top-1/2 -translate-y-1/2 left-0 right-0 mx-auto p-10 bg-white rounded h-auto w-[26rem] max-md:w-[95%] max-md:bottom-3 max-md:top-auto max-md:translate-y-0 drop-shadow-md transition-all duration-400 
                ${share ? 'translate-x-0 opacity-100 : -translate-x-full opacity-0'
                : 'max-md:translate-y-full max-md:translate-x-0 lg:translate-x-[-100%] opacity-0'}`}>

                    <div className={`transition-all duration-400 border border-[#563624] p-1 rounded absolute top-3 left-0 right-0 mx-auto w-fit ${copied ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
                        <div className='bg-[#563624] p-1 text-[9px] rounded text-white flex gap-2 items-center'>
                            <p>Link copied</p>
                            <FaCheckCircle />
                        </div>
                    </div>

                    <div className='flex justify-between text-[#563624] pb-4'>
                        <h1 className="text-[clamp(0.9rem,3vw,1rem)]">SHARE</h1>
                        <X size={25} onClick={toggleShare} className="cursor-pointer hover:scale-110 transition-transform hover:text-[#D0810B]" />
                    </div>

                    <div className='flex gap-4 pb-4'>
                        <div><FaFacebookF /></div>
                        <div><BsTwitterX /></div>
                        <div><FaInstagramSquare /></div>
                        <div><IoLogoWhatsapp /></div>
                        <div><IoIosMail /></div>
                        <div><FaTiktok /></div>
                    </div>

                    <div className='relative'>
                        <input
                            type="text"
                            id='URL_text'
                            value={shareUrl}
                            readOnly
                            className='text-[clamp(0.7rem,2vw,1rem)] rounded border border-gray-300 py-3 pl-4 pr-20 w-full h-13  focus:outline-black focus:outline-[1px] focus:ring-0'
                        />

                        <button onClick={copyText} className={`rounded text-[clamp(0.7rem,2vw,1rem)] top-1/2 -translate-y-1/2 absolute right-0 mr-2 h-10 max-md:h-9 px-4 bg-[#563624] hover:bg-black text-white`}>
                            COPY
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Share
