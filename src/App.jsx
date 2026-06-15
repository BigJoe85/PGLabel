import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import MobileMenu from './Components/MobileMenu'
import NavSearch from './Components/NavSearch'
import Login from './Components/Login'
import NavCarousel from './Components/NavCarousel'
import Cart from './Components/Cart'
import ScrollToTop from './Components/ScrollToTop'

const App = () => {

  return (
    <div className='select-none'>
      <ScrollToTop />

      <NavCarousel />

      <Navbar  />

      <MobileMenu  />

      <Cart />

      <NavSearch  />

      <Login  />

      <Outlet />
      
      <Footer />
    </div>
  )
}

export default App
