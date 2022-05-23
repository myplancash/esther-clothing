import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';
import { clearItemFromCart, addItemToCart, removeItemFromCart } from '../../store/cart/cart.action';

import {
  CheckoutItemsContainer,
  Items,
  ImageContainer,
  Quantity,
  Name,
  Price,
  RemoveButton,
} from './checkout-item.styles.jsx';

const CheckoutItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const { name, imageUrl, price, quantity } = cartItem;

  const clearItemHandler = () => dispatch(clearItemFromCart(cartItems, cartItem));
  const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
  const removeItemHandler = () => dispatch(removeItemFromCart(cartItems, cartItem));

  return (
    <CheckoutItemsContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`}/>
      </ImageContainer>
      <Items>
        <Name>{name}</Name>
        <Quantity>
          <div onClick={removeItemHandler}>&#10094;</div>
            <span>{quantity}</span>
          <div onClick={addItemHandler}>&#10095;</div>
        </Quantity>
        <Price>${price * quantity}</Price>
        <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
      </Items>
    </CheckoutItemsContainer>
  );
};

export default CheckoutItem;
