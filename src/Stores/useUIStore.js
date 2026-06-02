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


 toggleCart: ()=> set((state) => ({ cartOpen: !state.cartOpen })),
 toggleSearch: () => set((state) => ({ searchOpen: !state.searchOpen})),
 toggleLogin:() => set((state) => ({ loginOpen: !state.loginOpen})),
 toggleMenu:() =>set((state) => ({ menuOpen: !state.menuOpen})),
 toggleFilter:() =>set((state) => ({ filterOpen: !state.filterOpen}))


}))

export default useUIStore

