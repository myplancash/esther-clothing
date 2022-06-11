import { createSelector } from 'reselect';

//input selector:
const selectCartReducer = state => state.cart;

//output selectors:
export const selectCartItems = createSelector(
  [selectCartReducer],
  cart => cart.cartItems
);

export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  cart => cart.isCartOpen
);

export const selectCartCount = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity, 0)
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce(
    (totalPrice, cartItem) => totalPrice + cartItem.quantity * cartItem.price, 0)
);