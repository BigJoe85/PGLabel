import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import useProductStore from '../Stores/useProductStore'
import { Minus, Plus, CircleQuestionMark, TruckElectric, Share2, ShieldHalf, Globe, StepForward, ChevronLeft, ChevronRight, ShieldQuestion } from 'lucide-react'
import useUIStore from '../Stores/useUIStore'
import useCartStore from '../Stores/useCartStore'
import Question from '../Components/Question'
import Delivery from '../Components/Delivery'
import Share from '../Components/Share'

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
    }

    // this is for colour onclick to note which colour was clicked 
    const [colourActive, setColourActive] = React.useState(null)
    const handleColourActive = (col) => {
        setColourActive(col)
    }

    // this is to determine which colour to add to cart if the product has more than 1 colour, it will add the selected colour, if not it will add the only colour available, this is to prevent errors from trying to access a colour that doesn't exist in the array.
    const colourToAdd = prod.colour.length > 1 ? colourActive : prod.colour[0]

    // calling toggleCart function and addItems on click of add to cart button
    const handleAddToCart = () => {
        addItems(prod, quantity, sizeActive, colourToAdd)
        toggleCart()
    }

    // this is to check if size and colour is selected before allowing the user to add to cart, this will be used to conditionally render the add to cart button and also to prevent the user from adding to cart without selecting size and colour.
    const canAddToCart = sizeActive && (prod.colour.length > 1 ? colourActive : true)

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

    // displaying question section
    const [question, setQuestion] = React.useState(false)
    const toggleQuestion = () => {
        setQuestion(!question)
        document.body.style.overflow = !question ? 'hidden' : 'unset'
    }

    // displaying Delivery section
    const [delivery, setDelivery] = React.useState(false)
    const toggleDelivery = () => {
        setDelivery(!delivery)
        document.body.style.overflow = !delivery ? 'hidden' : 'unset'
    }

    // displaying Share section
    const [share, setShare] = React.useState(false)
    const toggleShare = () => {
        setShare(!share)
        document.body.style.overflow = !share ? 'hidden' : 'unset'
    }

   //Storing and display the value of our url somewhere
   let shareUrl =window.location.href

    return (

        <div className='relative w-full h-full'>
            {prod ?
                <div className='w-[90%] mx-auto h-full py-30 max-md:py-20'>
                    <div className='max-md:w-[95%] w-[90%] mx-auto grid grid-cols-[5fr_5fr] max-md:grid-cols-1 gap-20'>

                        <div className={`sticky top-0 max-md:static w-full ${prod.img.length > 1 ? 'grid grid-cols-[1fr_9fr]' : 'block'} max-lg:flex max-lg:flex-col gap-4`}>
                            {prod.img.length > 1 && (
                                <div className='flex gap-2 flex-col max-lg:order-2 max-lg:flex-row'>
                                    {prod.img.map((imgVal, index) => (
                                        <div key={index} onClick={() => setActiveIndex(index)} className={`${index === activeIndex ? 'border border-2' : ''}`}>
                                            <img src={imgVal} alt={prod.name} />
                                        </div>
                                    ))}
                                </div>
                            )}

                            <div className='overflow-hidden relative'>

                                <div className='flex flex-row transition-transform duration-300' style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                                    {prod.img.map((el, index) => (
                                        <img key={index} className='min-w-full max-lg:order-1 max-lg:w-full' src={el} alt={prod.name} />
                                    ))}
                                </div>

                                <button onClick={() => (activeIndex < prod.img.length - 1 ? setActiveIndex(activeIndex + 1) : null)} className={` hover:bg-black hover:text-white p-2 rounded-2xl absolute top-1/2 -translate-y-1/2  right-4 ${activeIndex < prod.img.length - 1 ? 'bg-white ' : 'bg-gray-600 opacity-15'}`}><ChevronRight /></button>

                                <button onClick={() => (activeIndex > 0 ? setActiveIndex(activeIndex - 1) : null)} className={` hover:bg-black hover:text-white p-2 rounded-2xl absolute top-1/2 -translate-y-1/2 left-4 ${activeIndex > 0 ? 'bg-white ' : 'bg-gray-600 opacity-15'}`}><ChevronLeft /></button>
                            </div>
                        </div>



                        <div className='text-[#563624]'>
                            <div className='mb-6'>
                                <h1 className='transition-colors hover:text-[#D0810B] duration-[200ms] font-medium text-xl pb-2'>{prod.name}</h1>
                                <p className='transition-colors hover:text-[#D0810B] duration-[200ms] text-xl'>₦{(prod.price).toLocaleString('en-NG', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                            </div>

                            <div>
                                <p className='text-sm'>Size</p>
                                <div className="flex w-60 gap-4 pt-3 pb-4">
                                    {prod.size.map((sizeValue, index) => (
                                        <div
                                            onClick={() => handleActive(sizeActive === sizeValue ? null : sizeValue)}
                                            key={index}
                                            className={`cursor-pointer rounded min-w-[3rem] hover:border-black border border-gray-200 text-center ${sizeActive === sizeValue ? 'bg-[#563624]  text-white' : 'border'}`}>

                                            {sizeValue}

                                        </div>
                                    ))}
                                </div>
                            </div>


                            {prod.colour.length > 1 && (
                                <div>
                                    <p className='text-sm'>Colour</p>
                                    <div className="grid grid-cols-5 max-xl:grid-cols-4 max-lg:grid-cols-3 w-full gap-2 pt-3 pb-4">
                                        {prod.colour.map((colourValue, index) => (

                                            <div
                                                onClick={() => handleColourActive(colourActive === colourValue ? null : colourValue)}
                                                key={index}
                                                className={`cursor-pointer flex items-center justify-center rounded min-w-[6rem] hover:border-black border border-gray-200 text-center ${colourActive === colourValue ? 'text-white bg-[#563624] ' : 'border'}`}>

                                                {colourValue.name}

                                            </div>

                                        ))}
                                    </div>
                                </div>
                            )
                            }


                            <div className='flex max-2lg:flex-col gap-4'>
                                <div className='flex rounded justify-around items-center bg-gray-200 w-[10rem] h-[3rem]'>
                                    <Minus className='cursor-pointer hover:rounded-full hover:bg-gray-300' size={20} strokeWidth={1} onClick={decrement} />
                                    <p className='font-semibold text-sm'>{quantity}</p>
                                    <Plus className='cursor-pointer hover:rounded-full hover:bg-gray-300' size={20} strokeWidth={1} onClick={increment} />
                                </div>

                                <div onClick={canAddToCart ? handleAddToCart : null} className={`flex gap-2 items-center justify-center w-[80%] h-[3rem] ${canAddToCart ? 'bg-[#563624] hover:bg-black' : 'bg-[#cdc2bd] hover:cursor-not-allowed'}`}>
                                    <h1 className='text-white font-bold'>Add to cart </h1>
                                    <h1 className={`text-white font-bold ${canAddToCart ? 'block' : 'hidden'}`}>
                                        - ₦{(prod.price * quantity).toLocaleString('en-NG', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h1>
                                </div>
                            </div>

                            <div className='flex gap-4 py-8'>
                                <p onClick={toggleQuestion} className='text-[clamp(0.65rem,2vw,1rem)] transition-colors hover:text-[#D0810B] duration-[200ms] font-bold flex items-center gap-2'> <CircleQuestionMark /> Ask a question</p>

                                <p onClick={toggleDelivery} className='text-[clamp(0.65rem,2vw,1rem)] transition-colors hover:text-[#D0810B] duration-[200ms] font-bold flex items-center gap-2'><TruckElectric /> Delivery & Return</p>

                                <p onClick={toggleShare} className='text-[clamp(0.65rem,2vw,1rem)] transition-colors hover:text-[#D0810B] duration-[200ms] font-bold flex items-center gap-2'><Share2 /> Share</p>
                            </div>

                            <div className='grid grid-cols-2 max-lg:grid-cols-1 gap-4 w-full h-auto text-center pb-6'>
                                <div className='h-[9rem] border border-gray-200 rounded flex flex-col justify-center items-center gap-2 p-4'>
                                    <TruckElectric />
                                    <p>Estimate delivery times: <strong>2-5 days</strong> (Nigeria), <strong>5-15 days</strong> (International).</p>
                                </div>

                                <div className='h-[9rem] border border-gray-200 rounded flex flex-col justify-center items-center gap-2 p-4'>
                                    <Globe />
                                    <p>We offer <strong>worldwide shipping</strong> to any location. Duties & taxes applied at checkout.</p>
                                </div>
                            </div>

                            <div className='flex gap-4 h-[5rem]'>
                                <ShieldHalf />
                                <strong>Guarantee Safe Checkout</strong>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col gap-4 pt-20 max-md:pt-5'>
                        <div onClick={toggleDescription} className='flex justify-between items-center rounded w-full h-[3rem] bg-gray-100 px-6'>
                            <h1 className='font-bold text-[#563624] text-[clamp(1.25rem,2.5vw,1.5rem)]'>Description</h1>
                            {description ? <Minus size={20} strokeWidth={1} /> : <Plus size={20} strokeWidth={1} />}
                        </div>

                        <div className={`border border-gray-200 overflow-hidden transition-all duration-500 ${description ? 'translate-y-0 h-full opacity-100' : ' translate-y-full h-0 opacity-0'}`} >
                            <ul className='text-sm px-10 max-md:px-5 py-6'>
                                <li className='font-medium'>{prod.des1}</li>
                            </ul>
                        </div>

                        <div onClick={toggleAddInfo} className='flex justify-between items-center rounded w-full h-[3rem] bg-gray-100 px-6'>
                            <h1 className='font-bold text-[#563624] text-[clamp(1.25rem,2.5vw,1.5rem)]'>Additional information</h1>
                            {addInfo ? <Minus size={20} strokeWidth={1} /> : <Plus size={20} strokeWidth={1} />}
                        </div>

                        <div className={`flex items-center border border-gray-200 overflow-hidden transition-all duration-500 ${addInfo ? 'translate-y-0 h-[5rem] opacity-100' : 'translate-y-full h-0 opacity-0'}`} >
                            <div className='flex items-center px-10 max-md:px-5 flex gap-4'>
                                <div>
                                    <p className='text-xs'>Size:</p>
                                </div>

                                {prod.size.map((sizeValue, index) => (
                                    <div key={index} className={`min-w-[3rem] max-lg:min-w-[2rem] border border-gray-200 text-center`}>
                                        {sizeValue}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>


                : <p>Not Found</p>
            }

              <Question question={question} toggleQuestion={toggleQuestion} />
              <Delivery delivery={delivery} toggleDelivery={toggleDelivery} />
              <Share share={share} toggleShare={toggleShare} shareUrl={shareUrl} />




            {/* bottom componenet that shows on scroll */}
            {/* <div className={`w-full h-[6rem] transition-transform duration-900 bg-white flex items-center fixed bottom-0  w-full min-h-[5rem] z-[40] ${isScrolled ? ' translate-y-0' : ' translate-y-full'} `}>

                <div className='w-[90%] mx-auto flex justify-between items-center gap-2'>
                    <div className='flex items-center gap-4'>
                        <div><img src={prod.img[0]} alt={prod.name} className='rounded-full w-20 h-20' /></div>
                        <p className='font-medium'>{prod.name}</p>
                    </div>

                    <div className='flex items-center gap-4'>
                        <select defaultValue="" className='text-gray-500 w-[15rem] border rounded p-2'>
                            <option value="" disabled>Select an option</option>
                            {prod.size.map((sizeValue, index) => (
                                <option key={index} value={sizeValue}>
                                    {sizeValue} - ₦{prod.price}
                                </option>
                            ))}
                        </select>

                        <div className='flex items-center justify-between px-2 bg-gray-200 rounded w-[8rem] h-[2.5rem]'>
                            <Minus onClick={decrement} />
                            <p className='font-medium'>{quantity}</p>
                            <Plus onClick={increment} />
                        </div>

                        <div className='w-[8rem] h-[2.5rem] flex items-center justify-center bg-[#563624]  hover:bg-black'>
                            <h1 onClick={handleAddToCart} className='font-bold text-white'>Add to cart</h1>
                        </div>
                    </div>

                </div>
            </div> */}
        </div>
    )
}

export default ProductDetails
