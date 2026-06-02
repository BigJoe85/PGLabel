import React from 'react'
import { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, X } from "lucide-react";

const NavCarousel = () => {
    const navCarousel = ['EVELATE YOUR STYLE WITH PG LABEL', 'SPRING REFRESH: NEW ARRIVALS JUST DROPPED']
    const [navTimer, setNavTimer] = React.useState(0)

    useEffect(() => {
        let time = setInterval(() => {
            setNavTimer(prev => prev === navCarousel.length - 1 ? 0 : prev + 1)
        }, 5000);

        return (() => clearInterval(time))
    }, []);

    const [hideCarousel, setHideCarousel] = React.useState(true)
    const hanClick = () => {
        setHideCarousel(false)
    }


    return (
        <div className='relative'>
            {hideCarousel &&
                <div className='flex justify-center w-full bg-[#563624] text-white min-h-8 py-2'>
                    <ChevronLeft className='' />
                    <div className='overflow-hidden w-96'>
                        <div key={navTimer} className='slideAnimation text-sm  text-center'>{navCarousel[navTimer]}</div>
                    </div>
                    <ChevronRight className='' />
                    < X onClick={hanClick} className='hover:text-white hidden max-md:block absolute right-0 mr-4' />
                </div>
            }
        </div>
    )
}

export default NavCarousel
