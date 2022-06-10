import styled from 'styled-components';


export const ProductImage = styled.img`
  width: 100%;
  height: 95%;
  object-fit: cover;
  align-items: center;
  margin-bottom: 5px;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    transform: scale(1);
    transition: transform 6s ease-in-out;
  }

`


export const ProductCardContainer = styled.div`
  width: 100%;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  button {
    align-items: center;
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
    align-self: center;
  }

  &:hover {
    ${ProductImage} {
      opacity: 0.8;
    }

    button {
      opacity: 0.85;
      display: flex;
      align-self: center;
    }
  }
`


export const Footer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: .9rem;
`

export const ProductName = styled.span`
  width: 90%;
  margin-bottom: 15px;
`

export const ProductPrice = styled.span`
  width: 10%;
`
