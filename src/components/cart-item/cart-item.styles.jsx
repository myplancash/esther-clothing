import styled from 'styled-components';

export const CartItemContainer = styled.div`
  width: 100%;
  font-size: .1rem;
  display: flex;
  height: 80px;
  margin-bottom: 15px;
  justify-content: space-between;
`
export const Image = styled.img`
  width: 40%;
  align-self: center;
`
export const ImageDetails = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-self: center;
  padding-left: 5em;
  margin-left: 5em;
`

export const Name = styled.span`
  align-self: flex-start;
  font-size: .1rem;
`
export const Price = styled.span`
  font-size: .1rem;
  align-self: flex-start;
`

export const RemoveButton = styled.span`
  cursor: pointer;
  width: 10%;
  padding-left: 12px;
  align-self: center;
`
