import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import {
  CartItemContainer,
  ImageDetails,
  Image,
  Name,
  Price,
  RemoveButton
} from './cart-item.styles.jsx';




const CartItem = ({ cartItem }) => {


  const { clearItemFromCart } = useContext(CartContext);

  const clearItemHandler = () => clearItemFromCart(cartItem);

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
