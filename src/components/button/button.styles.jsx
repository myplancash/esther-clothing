import styled, {css} from 'styled-components';
import { SpinnerContainer } from '../spinner/spinner.styles';

const whiteColor = '#FFFDFA';
const blackColor = '#070606';

const googleButton = '#4285f4';
const googleButtonHover = '#357ae8';

const flexStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`


export const BaseButton = styled.button`
  align-self: stretch;
  align-items: center;
  ${flexStyles}
  appearance: none;
  background-color: ${whiteColor};
  border-radius: 3px;
  border-style: none;
  box-shadow: rgba(0, 0, 0, .2) 0 3px 5px -1px,rgba(0, 0, 0, .14) 0 6px 10px 0,rgba(0, 0, 0, .12) 0 1px 18px 0;
  box-sizing: border-box;
  color: ${blackColor};
  cursor: pointer;
  //display: inline-flex;
  fill: currentcolor;
  font-weight: 500;
  height: 48px;
  letter-spacing: .25px;
  line-height: normal;
  max-width: 100%;
  overflow: visible;
  // padding: 2px 24px;
  position: relative;
  text-align: center;
  text-transform: none;
  transition: box-shadow 280ms cubic-bezier(.4, 0, .2, 1),opacity 15ms linear 30ms,transform 270ms cubic-bezier(0, 0, .2, 1) 0ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: auto;
  will-change: transform, opacity;
  z-index: 0;

  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 1em;
  font-size: 15px;
  background-color: ${blackColor};
  color: ${whiteColor};
  text-transform: uppercase;
  font-family: 'Encode Sans', sans-serif;
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;

  &:hover {
    background: ${whiteColor};
    color: ${blackColor};
    border: 1px solid ${blackColor};
  }

  &:focus {
    outline: none;
    border: 2px solid ${googleButton};
  }
`

export const GoogleSignInButton = styled(BaseButton)`
  background-color: ${googleButton};
  color: ${whiteColor};

  &:hover {
    background-color: ${googleButtonHover};
    border: none;
  }
`

export const InvertedButton = styled(BaseButton)`
  background-color: ${whiteColor};
  color: ${blackColor};
  border: 1px solid ${blackColor};

  &:hover {
    background-color: ${blackColor};
    color: ${whiteColor};
    border: none;
  }
`

export const LoadingSpinner = styled(SpinnerContainer)`
  width: 30px;
  height: 30px;
`