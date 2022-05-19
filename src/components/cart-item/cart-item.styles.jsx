import styled from 'styled-components';

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;
`
export const Image = styled.img`
  width: 30%;
`
export const ImageDetails =  styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;
`

export const Name = styled.span`
  font-size: 16px;
`
export const Price = styled.span`
  font-size: 16px;
`

export const RemoveButton = styled.span`
  cursor: pointer;
  padding-left: 12px;
  align-self: center;
`
