import {create} from "zustand"

const useFilterStore = create((set) => ({
    sortBy: "sort_by_latest",
    setSortBy: (value) => set({sortBy: value})
}))

export default useFilterStore

