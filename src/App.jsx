import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import MobileMenu from './Components/MobileMenu'
import NavSearch from './Components/NavSearch'
import Login from './Components/Login'
import NavCarousel from './Components/NavCarousel'
import Cart from './Components/Cart'

const App = () => {
    const [menuOpen, setMenuOpen] = React.useState(false) // function to toggle the mobile menu
    const handleClick = () => {
        setMenuOpen(!menuOpen)
        console.log(menuOpen) 
    }

    const [searchOpen, setSearchOpen] = React.useState(false) // function to toggle the search bar
    const SearchClick = () => {
        setSearchOpen(!searchOpen)
        console.log(searchOpen) 
    }

    const [login, setLogin] = React.useState(false) // state/function to toggle login section on nav
     const clickLogin = () => {
      setLogin(!login)
      console.log(login)
     }

  return (
    <div className='select-none'>
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
