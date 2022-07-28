export const addToCart = (pizza, quantity, varients) => (dispatch, getState) => {
    var cartItem = {
        name: pizza.name,
        _id: pizza._id,
        image: pizza.image,
        varients: varients,
        quantity: Number(quantity),
        prices: pizza.prices,
        price: pizza.prices[0][varients] * quantity,
    }
    if (cartItem.quantity > 10) {
        alert('You Can Add Maximum 10 Items')
    } else {
        if (cartItem.quantity < 1) {
            dispatch({ type: "DELETE_FROM_CART", payload: pizza });
        } else {
            dispatch({ type: 'ADD_TO_CART', payload: cartItem });
            localStorage.setItem("cartItems", JSON.stringify(getState().cartReducer.cartItems))
        }
    }


}

export const deleteFromCart = (pizza) => (dispatch, getState) => {
    dispatch({ type: 'DELETE_FROM_CART', payload: pizza });
    const cartItems = getState().cartReducer.cartItems;
    localStorage.setItem("cartItems", JSON.stringify(cartItems))
}