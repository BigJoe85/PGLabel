import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useProductStore from '../Stores/useProductStore'
import { Minus, Plus, CircleQuestionMark, TruckElectric, Share2, ShieldHalf, Globe, StepForward, ChevronLeft, ChevronRight } from 'lucide-react'
import useUIStore from '../Stores/useUIStore'
import useCartStore from '../Stores/useCartStore'

const ProductDetails = () => {
    const { id } = useParams()
    const products = useProductStore((state) => state.products)

    const prod = products.find(pro => pro.id.toString() === id)

    const toggleCart = useUIStore((state) => state.toggleCart)
    const addItems = useCartStore((state) => state.addItems)

    //quantity addition
    const [quantity, setQuantity] = React.useState(1)
    const increment = () => {
        setQuantity(prevState => prevState + 1);
    }
    // quantity reduction
    const decrement = () => {
        quantity > 1 && setQuantity(prevState => prevState - 1);
    }

    // this is for size onclick to note which size was clicked 
    const [sizeActive, setSizeActive] = React.useState(null)
    const handleActive = (size) => {
        setSizeActive(size)
        console.log(size)
    }

    // this is for colour onclick to note which colour was clicked 
    const [colourActive, setColourActive] = React.useState(null)
    const handleColourActive = (col) => {
        setColourActive(col)
        console.log(col)
    }

    // calling toggleCart function and addItems on click of add to cart button
    const handleAddToCart = () => {
        addItems(prod, quantity, sizeActive, colourActive)
        toggleCart()
    }

    // display a component below on vertical scrolling 
    const [isScrolled, setIsScrolled] = React.useState(false)
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 200)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // toggle description
    const [description, setDescription] = React.useState(false)
    const toggleDescription = () => {
        setDescription(!description)
    }
    // toggle additionalInfo
    const [addInfo, setAddInfo] = React.useState(false)
    const toggleAddInfo = () => {
        setAddInfo(!addInfo)
    }

    const [activeIndex, setActiveIndex] = useState(0);
    useEffect(() => {
        let imgTimer = setInterval(() => {
            setActiveIndex(prev => prev === prod.img.length - 1 ? 0 : prev + 1)
        }, 7000);

        return (() => clearInterval(imgTimer))
    }, [activeIndex]);

    return (

        <div className='relative w-full h-full'>
            {prod ?
                <div className='h-full py-30 max-md:py-20'>
                    <div className='max-md:w-[95%] w-[90%] mx-auto grid grid-cols-[5fr_5fr] max-md:grid-cols-1 gap-5'>

                        <div className='sticky top-0 max-md:static w-full grid grid-cols-[1fr_9fr] max-lg:flex max-lg:flex-col gap-4'>
                            <div className='flex gap-2 flex-col max-lg:order-2 max-lg:flex-row'>
                                {prod.img.map((imgVal, index) => (
                                    <div key={index} onClick={() => setActiveIndex(index)} className={`${index === activeIndex ? 'border' : ''}`}>
                                        <img src={imgVal} alt={prod.name} />
                                    </div>
                                ))}
                            </div>

                            <div className='overflow-hidden relative'>

                                <div className='flex flex-row transition-transform duration-300' style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                                    {prod.img.map((el, index) => (
                                        <img key={index} className='min-w-full max-lg:order-1 max-lg:w-full' src={el} alt={prod.name} />
                                    ))}
                                </div>

                                <button onClick={() => (activeIndex < prod.img.length - 1 ? setActiveIndex(activeIndex + 1) : null)} className={`p-2 rounded-2xl absolute top-1/2 -translate-y-1/2  right-4 ${activeIndex < prod.img.length - 1 ? 'bg-white ' : 'bg-gray-600 opacity-15'}`}><ChevronRight /></button>

                                <button onClick={() => (activeIndex > 0 ? setActiveIndex(activeIndex - 1) : null)} className={`p-2 rounded-2xl absolute top-1/2 -translate-y-1/2 left-4 ${activeIndex > 0 ? 'bg-white ' : 'bg-gray-600 opacity-15'}`}><ChevronLeft /></button>
                            </div>
                        </div>



                        <div>
                            <div className='mb-6'>
                                <h1>{prod.name}</h1>
                                <p>₦{(prod.price).toLocaleString('en-NG', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                            </div>

                            <div>
                                <p className='font-medium'>Select Sizes</p>
                                <div className="flex w-60 gap-4 pt-3 pb-4">
                                    {prod.size.map((sizeValue, index) => (
                                        <div
                                            onClick={() => handleActive(sizeValue)}
                                            key={index}
                                            className={`rounded min-w-[3rem] hover:border-black border border-gray-200 text-center ${sizeActive === sizeValue ? 'bg-black text-white' : 'border'}`}>

                                            {sizeValue}

                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <p className='font-medium'>Select Colour</p>
                                <div className="grid grid-cols-5 max-xl:grid-cols-4 max-lg:grid-cols-3 w-full gap-2 pt-3 pb-4">
                                    {prod.colour.map((colourValue, index) => (

                                        <div
                                            onClick={() => handleColourActive(colourValue)}
                                            key={index}
                                            style={{ backgroundColor: colourActive === colourValue ? colourValue.hex : '' }}
                                            className={`flex items-center justify-center rounded min-w-[6rem] hover:border-black border border-gray-200 text-center ${colourActive === colourValue ? 'text-white' : 'border'}`}>

                                            {colourValue.name}

                                        </div>

                                    ))}
                                </div>
                            </div>


                            <div className='flex max-2lg:flex-col gap-4'>
                                <div className='flex rounded justify-around items-center bg-gray-200 w-[10rem] h-[3rem]'>
                                    <Minus size={20} strokeWidth={1} onClick={decrement} />
                                    <p>{quantity}</p>
                                    <Plus size={20} strokeWidth={1} onClick={increment} />
                                </div>

                                <div onClick={sizeActive && colourActive ? handleAddToCart : null} className={`flex gap-2 items-center justify-center w-[80%] h-[3rem] ${sizeActive && colourActive ? 'bg-[#563624] hover:bg-black' : 'bg-[#cdc2bd] hover:cursor-not-allowed'}`}>
                                    <h1 className='text-white font-bold'>Add to cart </h1>
                                    <h1 className={`text-white font-bold ${sizeActive && colourActive ? 'block' : 'hidden'}`}>
                                     - ₦{(prod.price * quantity).toLocaleString('en-NG', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h1>
                                </div>
                            </div>

                            <div className='flex gap-4 py-8'>
                                <p className='text-[clamp(0.2rem,1vw,1rem)] flex gap-2'> <CircleQuestionMark /> Ask a question</p>
                                <p className='text-[clamp(0.2rem,1vw,1rem)] flex gap-2'><TruckElectric /> Delivery & Return</p>
                                <p className='text-[clamp(0.2rem,1vw,1rem)] flex gap-2'><Share2 /> Share</p>
                            </div>

                            <div className='grid grid-cols-2 max-lg:grid-cols-1 gap-4 w-full h-auto text-center pb-6'>
                                <div className='h-[9rem] border border-gray-200 rounded flex flex-col justify-center items-center gap-2 p-4'>
                                    <TruckElectric />
                                    <p>Estimate delivery times: 2-5 days (Nigeria), 5-15 days (International).</p>
                                </div>

                                <div className='h-[9rem] border border-gray-200 rounded flex flex-col justify-center items-center gap-2 p-4'>
                                    <Globe />
                                    <p>We offer worldwide shipping to any location. Duties & taxes applied at checkout.</p>
                                </div>
                            </div>

                            <div className='flex gap-4 h-[5rem]'>
                                <ShieldHalf />
                                <p>Guarantee Safe Checkout</p>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col gap-4 pt-20'>
                        <div onClick={toggleDescription} className='flex justify-between items-center rounded w-full h-[3rem] bg-gray-100 px-6'>
                            <h1>Description</h1>
                            {description ? <Minus size={20} strokeWidth={1} /> : <Plus size={20} strokeWidth={1} />}
                        </div>

                        <div className={`border border-gray-200 overflow-hidden transition-all duration-500 ${description ? 'translate-y-0 h-[7rem] opacity-100' : 'translate-y-full h-0 opacity-0'}`} >
                            <ul>
                                <li>{prod.des1}</li>
                            </ul>
                        </div>

                        <div onClick={toggleAddInfo} className='flex justify-between items-center rounded w-full h-[3rem] bg-gray-100 px-6'>
                            <h1>Additional information</h1>
                            {addInfo ? <Minus size={20} strokeWidth={1} /> : <Plus size={20} strokeWidth={1} />}
                        </div>

                        <div className={`flex items-center justify-center border border-gray-200 overflow-hidden transition-all duration-500 ${addInfo ? 'translate-y-0 h-[7rem] opacity-100' : 'translate-y-full h-0 opacity-0'}`} >
                            <div className='flex gap-4'>
                                <div>
                                    <p>Select size:</p>
                                </div>

                                {prod.size.map((sizeValue, index) => (
                                    <div key={index} className={`min-w-[3rem] border border-gray-200 text-center`}>
                                        {sizeValue}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>






                    {/* bottom componenet that shows on scroll */}
                    <div className={`transition-transform duration-900 bg-white fixed bottom-0 flex w-full min-h-[5rem] z-[40] items-center gap-2 ${isScrolled ? ' translate-y-0' : ' translate-y-full'} `}>
                        <div><img src={prod.img[0]} alt={prod.name} className='rounded-full w-15 h-15' /></div>
                        <p>{prod.name}</p>
                        <div className='flex bg-gray-200'>
                            <Minus onClick={decrement} />
                            <p>{quantity}</p>
                            <Plus onClick={increment} />
                        </div>

                        <select defaultValue="" className='border rounded p-2'>
                            <option value="" disabled>Select a size</option>
                            {prod.size.map((sizeValue, index) => (
                                <option key={index} value={sizeValue}>
                                    {sizeValue} - ₦{prod.price}
                                </option>
                            ))}
                        </select>

                        <div>
                            <h1 onClick={handleAddToCart} className='text-white bg-[#563624] hover:bg-black'>Add to cart</h1>
                        </div>
                    </div>
                </div>



                : <p>Not Found</p>
            }
        </div>
    )
}

export default ProductDetails
