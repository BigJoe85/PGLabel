import React from 'react'
import { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, X } from "lucide-react";

const NavCarousel = () => {
    const navCarousel = ['EVEVATE YOUR STYLE WITH PG LABEL', 'SPRING REFRESH: NEW ARRIVALS JUST DROPPED']
    const [navTimer, setNavTimer] = React.useState(0)

    const [direction, setDirection] = React.useState('next')

    const shownNext = () => {
        setDirection('next')
        setNavTimer(prev => prev === navCarousel.length - 1 ? 0 : prev + 1)
    }

    const shownPrev = () => {
        setDirection('prev')
        setNavTimer(prev => prev === 0 ? navCarousel.length - 1 : prev - 1)
    }

    useEffect(() => {
        let time = setInterval(() => {
            setNavTimer(prev => prev === navCarousel.length - 1 ? 0 : prev + 1)
        }, 5000);


        return (() => clearInterval(time))
    }, [navTimer]);

    const [hideCarousel, setHideCarousel] = React.useState(true)
    const hanClick = () => {
        setHideCarousel(false)
    }

    return (
        <div className='relative'>
            {hideCarousel &&
                <div className='flex justify-center items-center w-full bg-[#563624] text-white min-h-8 py-2'>
                    <ChevronLeft className='cursor-pointer hover:border hover:border-white hover:rounded-full' onClick={shownPrev} />
                    <div className='overflow-hidden w-90 max-md:w-60'>
                        <div key={navTimer} className={`text-[clamp(0.65rem,1.5vw,0.875rem)] text-sm  text-center ${direction === 'next' ? 'slideAnimationNext' : 'slideAnimationPrev'}`}>{navCarousel[navTimer]}</div>
                    </div>
                    <ChevronRight className='cursor-pointer hover:border hover:border-white hover:rounded-full' onClick={shownNext} />
                    < X onClick={hanClick} className='hover:border hover:border-white hover:rounded-full hover:text-white hidden max-md:block absolute right-0 mr-4' />
                </div>
            }
        </div>
    )
}

export default NavCarousel
