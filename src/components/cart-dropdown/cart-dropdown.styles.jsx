import styled, {css} from 'styled-components'

const subColor = '#A6A6A6';
const mainColor = '#0A2038';

const flexStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  ${flexStyles}
  top: 100px;
  right: 40px;
  z-index: 5;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

  button {
    margin-top: auto;
  }
`


export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  padding: 1em;
  justify-content: flex-start;
  box-shadow: rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;

  color: ${mainColor};
  align-text: center;
  font-size: .5rem;
`

export const Empty = styled.span`
  color: ${subColor};
  align-text: center;
  font-size: .9rem;
  margin: 0 auto;
`

export const Total = styled.div`
  margin: auto;
  padding: .6em;
  align-text: center;
  font-size: 1rem;
`
/*   .empty-message {
    font-size: 18px;
    margin: 50px auto;
  } */
