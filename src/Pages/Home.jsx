import React, { use } from 'react'
import { useState, useEffect } from "react"
import { NavLink } from 'react-router-dom';
import ShortLong from '../Components/ShortLong';
import SplashScreen from '../Components/SplashScreen';
import PgNew from '../Components/PgNew';
import FootCollection from '../Components/FootCollection';

const Home = () => {
  const homeDisplay = [
    {
      img: "https://res.cloudinary.com/duoy2tsyc/image/upload/v1780540849/P3_mupa7g.jpg",
      txt1: "RAVAYA BY PG LABEL",
      txt2: "NEW IN",
      txt3: "SHOP COLLECTION",
      path: "/new-arrivals",
    },

    {
      img: "https://res.cloudinary.com/duoy2tsyc/image/upload/v1780540849/P2_tj3wnb.jpg",
      txt1: "PG LABEL S25 COLLECTIONS",
      txt2: "GET GRUNGE",
      txt3: "SHOP MEN",
      path: "/shop-men"
    },


    {
      img: "https://res.cloudinary.com/duoy2tsyc/image/upload/v1780540849/P4_ruzyjy.jpg",
      txt1: "THE PGL WOMEN COLLECTION",
      txt2: "SHOW UP",
      txt3: "SHOP WOMEN",
      path: "/shop-women"
    },

    {
      img: "https://res.cloudinary.com/duoy2tsyc/image/upload/v1780540849/P1_m2lwtf.jpg",
      txt1: "EXPLORE COLLECTION",
      txt2: "SHOP 2",
      txt3: "EXPLORE COLLECTION",
      path: "/new-arrivals",
    }
  ]
  const [homeTimer, setHomeTimer] = React.useState(0)
  const [animated, setAnimated] = React.useState(0)

  useEffect(() => {
    let hommie = setInterval(() => {
      setHomeTimer(prev => prev === homeDisplay.length - 1 ? 0 : prev + 1)
    }, 10000)

    return () => clearInterval(hommie)
  }, [])

  useEffect(() => {
    setAnimated(0)
    let text1 = setTimeout(() => {
      setAnimated(1)
    }, 1000);

    let text2 = setTimeout(() => {
      setAnimated(2)
    }, 2000);

    let text3 = setTimeout(() => {
      setAnimated(3)
    }, 3000);

    return (() => {
      clearTimeout(text1)
      clearTimeout(text2)
      clearTimeout(text3)
    })

  }, [homeTimer])


  // this is for splash screen animation on load
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }, [])

  return (
    <>
      {isLoading ? <SplashScreen /> :
        <>
          <div className='relative h-full w-full overflow-hidden'>
            {homeDisplay.map((slide, index) => (
              <div
                key={index}
                style={{ backgroundImage: `url(${slide.img})` }}
                className={`absolute w-screen h-screen bg-cover bg-center transition-opacity duration-700 ${homeTimer === index ? 'opacity-100' : 'opacity-0'}`}
              />
            ))}

            <div key={homeTimer} className='text-center z-30 w-screen h-screen relative flex flex-col justify-end'>
              {animated >= 1 && <p style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}
                className='font-semibold drop-shadow-lg text-white slideUp absolute bottom-30 w-full text-center'>{homeDisplay[homeTimer].txt1}</p>}
              {animated >= 2 && <h1 style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}
                className='font-semibold text-white text-3xl slideUp absolute bottom-20 w-full text-center'>{homeDisplay[homeTimer].txt2}</h1>}
              {animated >= 3 && <NavLink to={homeDisplay[homeTimer].path} className=' bg-[#563624] hover:bg-black text-white slideUp absolute bottom-10 left-1/2 -translate-x-1/2  py-2 px-4 min-w-[15rem] text-center'>{homeDisplay[homeTimer].txt3}</NavLink>}
            </div>
          </div>
          <PgNew />
          <ShortLong />
          <FootCollection />
        </>
      }
    </>
  )
}

export default Home
