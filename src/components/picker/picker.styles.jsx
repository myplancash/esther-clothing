import styled from 'styled-components';

export const Popover = styled.div`
  position: absolute;
  z-index: 3;
`

export const Cover = styled.div`
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
`

export const Swatch = styled.div`
  width: 100%;
  height: 240px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({background}) => background };
  cursor: pointer;
  box-shadow: '0 0 0 1px rgba(0,0,0,.2)';

  h2 {
    font-weight: bold;
    margin: 0 6px 0;
    background-color: #f3f2f3;
    padding: 1.5rem;
    font-size: 22px;
    color: #4a4a4a;
    opacity: 0.5;
  }

`

export const PickerContainer = styled.div`
  width: 100%;
  height: 240px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 7.5px 15px;
  background-color: ${({color}) => color};
`
