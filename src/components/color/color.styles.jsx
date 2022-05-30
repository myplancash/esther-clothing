import styled from 'styled-components';

export const ColorContainer = styled.div`

  position: relative;
  background-color: ${({name}) => name };

  min-width: 20%;
  height: 240px;
  display: flex;
  flex: 1 1 auto;
  align-items: center;
  justify-content: center;
  margin: 0 7.5px 15px;
  overflow: hidden;
`

export const InputColor = styled.input`
  margin: 0 6px 0;
  font-size: 22px
  font-weight: lighter;
  font-size: 16px;

`

export const ColorBodyContainer = styled.div`
  cursor: pointer;
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  opacity: 0.7;
  position: absolute;
`
