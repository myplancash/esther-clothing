import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';
import { clearItemFromCart } from '../../store/cart/cart.action.js';

import {
  CartItemContainer,
  ImageDetails,
  Image,
  Name,
  Price,
  RemoveButton
} from './cart-item.styles.jsx';


const CartItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const clearItemHandler = () => dispatch(clearItemFromCart(cartItems, cartItem));

  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CartItemContainer>
      <Image src={imageUrl} alt={`${name}`} />
      <ImageDetails>
        <Name>{name}</Name>
        <Price>
          {quantity} x ${price}
        </Price>
      </ImageDetails>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CartItemContainer>
  );
};

export default CartItem;
