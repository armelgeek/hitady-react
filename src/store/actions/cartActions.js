export const addProduct = ({ name, price, count, id }) => ({
  type: 'ADD_PRODUCT',
  name,
  price,
  count,
  id
})

export const removeProduct = ({ id }) => ({
  type: 'REMOVE_PRODUCT',
  id
})

export const setCount = ({ id, count }) => ({
  type: 'SET_COUNT',
  count,
  id
})
//WISHLIST ACTIONS
export const addToWishlist = (productId) => ({
  type: "ADD_TO_WISHLIST",
  payload: { productId },
});

export const removeFromWishlist = (productId) => ({
  type: "REMOVE_FROM_WISHLIST",
  payload: { productId },
});
export const checkout = (allProductsId) => ({
  type: "CHECKOUT",
  payload: { allProductsId },
});