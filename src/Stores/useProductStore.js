import { create } from 'zustand'
import Products from "../data/products";

const useProductStore = create ((set) => ({
products: Products // here ive set the state to the array using zustand state management
}))

export default useProductStore