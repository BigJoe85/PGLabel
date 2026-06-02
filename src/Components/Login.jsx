import React from 'react'
import { X } from 'lucide-react'
import useUIStore from '../Stores/useUIStore'

const Login = () => {

    const loginOpen = useUIStore((state) => state.loginOpen)
    const toggleLogin = useUIStore((state) => state.toggleLogin)

    return (
        <div className='max-lg:hidden'>
            <div onClick={toggleLogin} className={`fixed z-50 top-0 w-full h-screen bg-black/50 cursor-pointer ${loginOpen ? 'block' : 'hidden'}`}></div>
            <div className={`p-10 fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-[40rem] min-h-[35%] rounded-md ${loginOpen ? 'block' : 'hidden'}`}>

                <div className='flex relative justify-center mb-6'>
                    <h1>LOGIN</h1>
                    < X onClick={toggleLogin} className='hover:text-red-500 absolute right-0' />
                </div>

                <div className='flex flex-col'>
                    <input className='hover:border-black focus:outline-black border-gray-200 border-2 border-solid rounded-md mb-4 p-2 h-12' type="email" name="" id="" placeholder='Email address' required />
                    <input className='hover:border-black focus:outline-black border-gray-200 border-2 border-solid rounded-md mb-4 p-2 h-12' type="password" name="" id="" placeholder='Password' required />
                </div>

                <div className='flex justify-between mb-6'>
                    <div className='flex'>
                        <input className='mr-2' type="checkbox" name="" id="" />
                        <p>Remember me</p>
                    </div>

                    <p>Lost your password?</p>
                </div>
                <button className='h-10 w-20 p-2 bg-gray-800 text-white'>Log in</button>
            </div>
        </div>
    )
}

export default Login
