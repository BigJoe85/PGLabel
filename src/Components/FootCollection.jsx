
import React from 'react'
import { ChevronRight, ChevronLeft } from "lucide-react"
import { useState, useEffect } from 'react'
import ProductCard from '../Components/ProductCard';
import useProductStore from '../Stores/useProductStore'

const FootCollection = () => {
  const products = useProductStore((state) => state.products)
  const productsFootwear = products.filter(product => product.category === "footwear")

  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768)

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth > 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const itemsPerSlide = isDesktop ? 4 : 2
  const extendedProducts = [...productsFootwear, ...productsFootwear.slice(0, itemsPerSlide)]

  const [activeIndex, setActiveIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(true)

  const handleNext = () => {
    setIsTransitioning(true)
    setActiveIndex(prev => prev + 1)
  }

  const handlePrev = () => {
    setIsTransitioning(true)
    setActiveIndex(prev => prev - 1)
  }

  useEffect(() => {
    activeIndex >= productsFootwear.length ? setTimeout(() => { setIsTransitioning(false); setActiveIndex(0) }, 500) : activeIndex < 0
    ? setTimeout(() => { setIsTransitioning(false); setActiveIndex(productsFootwear.length - 1) }, 500) : null
  }, [activeIndex])

  const [paused, setPaused] = useState(false)

  useEffect(() => {
    const time = paused ? null : setInterval(() => {
      setIsTransitioning(true)
      setActiveIndex(prev => prev + 1)
    }, 5000)
    return () => clearInterval(time)
  }, [activeIndex, paused])

  const [hovered, setHovered] = useState(false)

  return (
    <div className=''>

      <div className='py-10 w-[85%] max-md:w-[95%] mx-auto'>

        <div className='pb-5 text-center'>
          <h1 className='text-[#563624] font-medium'>THIS SEASON</h1>
          <p className='text-[#563624] font-bold'>FOOTWEAR COLLECTION</p>
        </div>

        <div onMouseEnter={() => { setHovered(true); setPaused(true) }} onMouseLeave={() => { setHovered(false); setPaused(false) }} className='relative overflow-hidden'>

          <div className='flex' style={{ transform: `translateX(-${activeIndex * (100 / itemsPerSlide)}%)`, transition: isTransitioning ? 'transform 500ms ease' : 'none' }}>
            {extendedProducts.map((el, index) => (
              <div key={index} style={{ minWidth: `${100 / itemsPerSlide}%` }}>
                <ProductCard el={el} />
              </div>
            ))}

          </div>

          <div className={`transition-all duration-300 w-12 h-12 bg-white rounded-full hover:bg-black hover:text-white absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center cursor-pointer ${hovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'}`}>
            <ChevronLeft size={24} strokeWidth={1} onClick={handlePrev} />
          </div>

          <div className={`transition-all duration-300 w-12 h-12 bg-white rounded-full hover:bg-black hover:text-white absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center cursor-pointer ${hovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}>
            <ChevronRight size={24} strokeWidth={1} onClick={handleNext} />
          </div>

        </div>

      </div>

    </div>
  )
}

export default FootCollection
