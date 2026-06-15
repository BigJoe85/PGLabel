// import React from 'react'
// import { createContext, useState } from 'react' // importing  create context  // also need to import useState to use it here

// export const useCon = createContext() // initializing context

// const ToggleContext = ({ children }) => {

//         const [cartOpen, setCartOpen] = React.useState(false) // function to toggle the mobile menu
//         const cartClick = () => {
//             setCartOpen(!cartOpen)
//             console.log(cartOpen) 
//         }
//   return (
//     <useCon.Provider value={{cartOpen, setCartOpen, cartClick}}>
//         { children }
//     </useCon.Provider>
//   )
// }

// export default ToggleContext

// using zustand for state management

import { create } from 'zustand'

const useUIStore = create((set) => ({

 cartOpen: false,
 searchOpen: false,
 loginOpen: false,
 menuOpen: false,
 filterOpen: false,


 toggleCart: () => set((state) => {
    const newCartOpen = !state.cartOpen
    document.body.style.overflow = newCartOpen ? 'hidden' : 'unset'
    return { cartOpen: newCartOpen }
}),

 toggleSearch: () => set((state) => {
    const newSearchOpen = !state.searchOpen
    document.body.style.overflow = newSearchOpen ? 'hidden' : 'unset'
    return { searchOpen: newSearchOpen }
 }),
 
 toggleLogin:() => set((state) => {
    const newLoginOpen = !state.loginOpen
    document.body.style.overflow = newLoginOpen ? 'hidden' : 'unset'
    return { loginOpen: newLoginOpen }
 }),

 toggleMenu:() =>set((state) => {
    const newMenuOpen = !state.menuOpen
    document.body.style.overflow = newMenuOpen ? 'hidden' : 'unset'
    return { menuOpen: newMenuOpen }
 }),

 toggleFilter:() =>set((state) => {
    const newFilterOpen = !state.filterOpen
    document.body.style.overflow = newFilterOpen ? 'hidden' : 'unset'
    return { filterOpen: newFilterOpen }
 })


}))

export default useUIStore

