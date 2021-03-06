
import { useDispatch, useSelector } from 'react-redux';
import { selectIsCartOpen, selectCartCount } from '../../store/cart/cart.selector.js';
import { setIsCartOpen } from '../../store/cart/cart.action';

import {
  CartIconContainer,
  ShoppingIconStyles,
  CartCount
} from './cart-icon.styles.jsx';

const CartIcon = () => {
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIconStyles/>
      <CartCount>{cartCount}</CartCount>
    </CartIconContainer>
  );
};

export default CartIcon;
