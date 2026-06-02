import { create } from 'zustand'

const useCartStore = create((set) => ({
    items: [],



    addItems: (product, quantity, size, colour) => set((state) => {
        const existingItem = state.items.find(
            item => item.id === product.id && item.size === size && item.colour === colour.name
        )

        return {
            items: existingItem ? state.items.map(item =>
                item.id === product.id && item.size === size ? { ...item, quantity: item.quantity + quantity } : item
            )

                : [
                    ...state.items,
                    {
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        img: product.img[0],
                        quantity: quantity,
                        size: size,
                        colour: colour.name,
                    }
                ]
        }
    }),

    removeItem: (id, size, colour) => set((state) => ({
        items: state.items.filter(
            item => !(item.id === id && item.size === size && item.colour === colour)
        )
    })),

    increaseQuantity: (id, size, colour) => set((state) => ({
        items: state.items.map(item =>
            item.id === id && item.size === size && item.colour === colour
                ? { ...item, quantity: item.quantity + 1 }
                : item
        )
    })),

    decreaseQuantity: (id, size, colour) => set((state) => ({
        items: state.items.map(item =>
            item.id === id && item.size === size && item.colour === colour
                ? { ...item, quantity: item.quantity - 1 }
                : item
        ).filter(item => item.quantity > 0)
    })),


}));

export default useCartStore
