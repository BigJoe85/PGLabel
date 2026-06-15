
export const sortProducts = (products, sortBy) => {
    let sortedProducts = []
    if (sortBy === "Sort_by_price_high_low") {
        sortedProducts = [...products].sort((a, b) => b.price - a.price)
    } else if (sortBy === "Sort_by_price_low_to_high") {
        sortedProducts = [...products].sort((a, b) => a.price - b.price)
    } else if (sortBy === "Sort_by_popularity") {
        sortedProducts = [...products].sort((a, b) => a.rating - b.rating)
    } else if (sortBy === "sort_by_latest") {
        sortedProducts = [...products].reverse()
    } else {
        sortedProducts = [...products]
    }

    return sortedProducts
}