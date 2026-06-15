import React from 'react'
import { X } from 'lucide-react'

const Delivery = ({ delivery, toggleDelivery }) => {
  return (
    <div className={`z-[1000] fixed inset-0 ${delivery ? 'pointer-events-auto' : 'pointer-events-none'}`}>

      <div onClick={toggleDelivery} className={`z-[50] h-full w-full bg-black/10 hover:cursor-pointer backdrop-blur-[3px] ${delivery ? 'opacity-100' : 'opacity-0'}`}> </div>

      <div className='w-full'>
        <div className={`overflow-y-scroll absolute top-1/2 -translate-y-1/2 left-0 right-0 mx-auto pr-8 pl-8 pb-8 bg-white rounded max-h-[80%] w-[40rem] max-md:w-[95%] max-md:max-h-auto max-md:bottom-3 max-md:top-auto max-md:translate-y-0 drop-shadow-md transition-all duration-400 
        ${delivery ? 'translate-x-0 opacity-100 : -translate-x-full opacity-0' 
          : 'max-md:translate-y-full max-md:translate-x-0 lg:translate-x-[-100%] opacity-0'}`}>

          <div className=' sticky top-0 bg-white z-10 flex justify-between items-center text-[#563624] py-6'>
            <h1 className="text-[clamp(1.2rem,3vw,1.875rem)]">RETURNS + EXCHANGES</h1>
            <X size={25} onClick={toggleDelivery} className="cursor-pointer hover:scale-110 transition-transform hover:text-[#D0810B]" />
          </div>

          <div className='flex flex-col gap-8 px-40 max-md:px-10'>
            <div>
              <h1 className="text-[clamp(1.4rem,3vw,1.875rem)] text-[#563624] pb-4">DELIVERY</h1>
              <p>Vivamus porttitor odio ac libero tempus pellentesque. Etiam consectetur eleifend diam eget sagittis. Phasellus sed aliquet arcu, id porttitor libero. Integer vel rutrum nulla, quis vestibulum eros. Donec ullamcorper eget lectus in tempor. Phasellus consequat lacinia ligula. Ut dolor ante, egestas sed arcu pulvinar, tempus ornare metus. Suspendisse pulvinar pellentesque turpis, ut pretium quam bibendum sed. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla facilisi. Duis quis aliquet ante. Nunc venenatis mi ut purus imperdiet egestas. Phasellus viverra, nisl sed pharetra condimentum, justo erat ultricies libero, iaculis porta nisl est eget sapien.</p>
            </div>

            <div>
              <h1 className="text-[clamp(1.4rem,3vw,1.875rem)] text-[#563624] pb-4">RETURNS</h1>
              <p>Praesent feugiat orci ac bibendum dignissim. Aliquam convallis at ligula et pretium. Ut elementum risus a ipsum bibendum suscipit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras consequat purus sed iaculis feugiat. Integer in tempus tortor, scelerisque feugiat nisl. </p>
            </div>

            <div>
              <h1 className="text-[clamp(1.4rem,3vw,1.875rem)] text-[#563624] pb-4">HELP</h1>
              <p>Duis congue tortor libero, quis lobortis ligula efficitur a. Quisque sodales cursus nisl ultricies pulvinar. Nam eget est risus. Vestibulum tincidunt egestas massa, et finibus nibh cursus sed. </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Delivery
