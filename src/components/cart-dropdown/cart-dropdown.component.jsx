import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { selectCartItems } from '../../store/cart/cart.selector';
import { selectCartTotal } from '../../store/cart/cart.selector';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import {
  CartDropdownContainer,
  CartItems,
  Total,
  Empty
} from './cart-dropdown.styles.jsx';

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();
  const cartTotal = useSelector(selectCartTotal);


  const goToCheckoutHandler = () => {
    navigate('/checkout');
  };


  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length > 0 ? cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        )).sort((a, b) => a > b ? 1 : -1) : (
          <Empty>Your Cart is Empty</Empty>
        )}
      </CartItems>
      <Total>TOTAL: ${cartTotal}</Total>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
