import React from 'react'
import { X } from 'lucide-react'

const Question = ({ toggleQuestion, question }) => {
  return (
    <div className={`z-[1000] fixed inset-0 ${question ? 'pointer-events-auto' : 'pointer-events-none'}`}>

      <div onClick={toggleQuestion} className={`z-[50] h-full w-full bg-black/10 hover:cursor-pointer backdrop-blur-[3px] ${question ? 'opacity-100' : 'opacity-0'}`}> </div>

      <div className='w-full'>
        <div className={`absolute top-1/2 -translate-y-1/2 left-0 right-0 mx-auto p-8 bg-white rounded h-auto w-[40rem] max-md:w-[95%] max-md:max-h-auto max-md:bottom-3 max-md:top-auto max-md:translate-y-0 drop-shadow-md transition-all duration-400 
          ${question ? 'translate-x-0 opacity-100 : -translate-x-full opacity-0'
          : 'max-md:translate-y-full max-md:translate-x-0 lg:translate-x-[-100%] opacity-0'}`}>
            
          <div className='flex justify-between text-[#563624] pb-6'>
            <h1 className="text-[clamp(1.5rem,3vw,1.875rem)]">ASK A QUESTION</h1>
            <X size={30} onClick={toggleQuestion} className="cursor-pointer hover:scale-110 transition-transform hover:text-[#D0810B]" />
          </div>

          <div className='flex flex-col'>
            <div className='flex flex-col pb-4'>
              <label htmlFor="name" className='pb-2 text-sm'>Name <span className='text-red-600'>*</span></label>
              <input type="text" name="name" id="name" className='px-4 h-11 rounded border border-gray-300 hover:border-black hover:border-[1.5px]' />
            </div>

            <div className='flex flex-col pb-4'>
              <label htmlFor="email" className='pb-2 text-sm'>Email <span className='text-red-600'>*</span></label>
              <input type="email" name="email" id="email" className='px-4 h-11 rounded border border-gray-300 hover:border-black hover:border-[1.5px]' />
            </div>

            <div className='flex flex-col pb-4'>
              <label htmlFor="number" className='pb-2 text-sm'>Phone number</label>
              <input type="text" name="number" id="number" className='px-4 h-11 rounded border border-gray-300 hover:border-black hover:border-[1.5px]' />
            </div>

            <div className='flex flex-col pb-4'>
              <label htmlFor="message" className='pb-2 text-sm'>Message</label>
              <textarea name="message" id="message" className='p-4 resize-y h-40 max-md:h-30 rounded border border-gray-300 hover:border-black hover:border-[1.5px]'></textarea>
            </div>

            <button className='h-11 bg-[#563624] hover:bg-black mt-4 text-white font-bold'>Send</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Question
