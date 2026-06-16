import React from 'react'
import { X, Plus, Minus } from 'lucide-react'
import { NavLink } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react'
import useUIStore from '../Stores/useUIStore';
import useCartStore from '../Stores/useCartStore';

const Cart = () => {
  const cartOpen = useUIStore((state) => state.cartOpen)
  const toggleCart = useUIStore((state) => state.toggleCart)
  const items = useCartStore((state) => state.items)
  const removeItem = useCartStore((state) => state.removeItem)

  const increaseQuantity = useCartStore((state) => state.increaseQuantity)
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity)

  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0)

  return (
    <div className='relative'>

      <div onClick={toggleCart} className={`w-full h-screen bg-black/50 fixed z-[45] top-0 p-5 cursor-pointer ${cartOpen ? 'block' : 'hidden'}`}></div>

      <div className={`flex flex-col transition-transform duration-500 fixed z-[50] right-0 top-0 w-[26rem] max-md:w-[90%] bg-white h-full ${cartOpen ? 'translate-x-0' : 'translate-x-full'}`} >

        <div className='flex justify-between p-4 border-b-[0.1px] border-gray-300'>
          <h3 className='text-[#563624] font-medium'>SHOPPING CART</h3>
          <div> <X strokeWidth={1} onClick={toggleCart} className='cursor-pointer hover:scale-110 transition-transform hover:text-red-600' /> </div>
        </div>

        {items.length === 0 ? (

          <div className='flex flex-col items-center justify-center h-full bg-white gap-5'>
            <h3 className='text-2xl text-[#563624] font-medium'> YOUR CART IS EMPTY </h3>
            <p className='text-sm text-center text-[#563624]'>You may check out all the available products and <br /> buy some in the shop</p>
            <NavLink onClick={toggleCart} to="./new-arrivals" className="bg-[#563624] hover:bg-black text-white px-4 py-2 min-w-min flex gap-3 items-center" >Return to shop <ArrowUpRight /> </NavLink>
          </div>
        ) : (
          <>

            <div className='flex-1 overflow-y-auto px-8 py-4'>
              {items.map((el) => (
                <div key={`${el.id}-${el.size}-${el.colour?.name}`} className='' >
                  <div className='flex items-center gap-8 '>
                    <img src={el.img} alt={el.name} className='w-[27%] h-full' />

                    <div>
                      <p className='text-sm pb-1 pt-1'>{el.name}</p>
                      <p className='text-xs pb-1'>Size: {el.size}</p>
                      <p className='text-sm pb-2 font-medium'>₦{(el.price).toLocaleString('en-NG', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>

                      <div className='flex items-center gap-2 pb-2'>
                        <div className=' w-[5rem] h-[1.5rem] bg-gray-200 rounded flex justify-around items-center'>
                          <Minus className='cursor-pointer' size={20} strokeWidth={1} onClick={() => decreaseQuantity(el.id, el.size, el.colour)} />
                          <p className='font-semibold text-sm'>{el.quantity}</p>
                          <Plus className='cursor-pointer hover:rounded-full hover:bg-gray-300' size={20} strokeWidth={1} onClick={() => increaseQuantity(el.id, el.size, el.colour)} />
                        </div>
                        <p onClick={() => removeItem(el.id, el.size, el.colour)} className='text-xs'>Remove</p>
                      </div>

                      {el.colour?.name && <p className='text-sm pb-1'>Colour: {el.colour.name}</p>}
                    </div>
                  </div>
                  <hr className='border-gray-200 my-4' />
                </div>
              ))}
            </div>

            <div className='p-8 border-t border-gray-200'>
              <div className='flex justify-between w-full mb-4'>
                <p>Subtotal:</p>
                <p className='font-bold'>₦{total.toLocaleString('en-NG', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
              </div>
              <div className='w-full flex gap-4'>
                <div className='w-full border text-center py-2 hover:bg-black hover:text-white'><NavLink to="/view-cart">View Cart</NavLink> </div>
                <div className='w-full border text-center py-2 bg-[#563624] text-white hover:bg-black hover:text-white'>Checkout</div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Cart
