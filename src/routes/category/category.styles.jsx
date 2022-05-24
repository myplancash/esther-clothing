import styled from 'styled-components';

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 1em;
  row-gap: 2em;
  justify-content: space-between;
  align-items: center;
`

export const CategoryTitle = styled.h2`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 1em;
  letter-spacing: 0.1em;
`