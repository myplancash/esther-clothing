import styled from 'styled-components';
import { ReactComponent as ShoppingIcon } from '../../assets/cart.svg';

export const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

export const ShoppingIconStyles = styled(ShoppingIcon)`
  width: 32px;
  height: 32px;
  display: block;
  cursor: pointer;
  color: rgb(0 0 0);
  font-size: 22px;
  margin-top: 5px;
  // transform: rotate(90deg);

  &:hover {
    -webkit-animation-name: heart;
    animation-name: heart;
    -webkit-animation-duration: .3s;
    animation-duration: .3s;
    -webkit-animation-timing-function: linear;
    animation-timing-function: linear;
    -webkit-animation-iteration-count: 1;
    animation-iteration-count: 1;

    @keyframes heart {
      50% {
        -webkit-transform: scale(1.2);
        transform: scale(1.2);
      }
    }
  }


`


export const CartCount = styled.span`
  font-weight: bold;
  bottom: 22px;
  left: 24px;

  position: absolute;
  background: rgb(0 0 0);
  color: rgb(255 255 255);
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  width: 19px;
  height: 19px;
  line-height: 19px;
  font-size: 10px;
  text-align: center;
`