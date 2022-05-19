import styled from 'styled-components';
import {Link} from 'react-router-dom';


export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`

export const Title = styled(Link)`
  font-size: 1em;
  cursor: pointer;


  &:hover {
    opacity: 0.3;
    filter: alpha(opacity=30);
  }
`
export const TitleContainer = styled.h2`
  padding: .3em;
  border-bottom: 1px solid rgba(169, 169, 169, 0.6);

  &:hover ${Title} {
    opacity: 0.3;
    filter: alpha(opacity=30);
    border-bottom: 1px solid rgba(169, 169, 169, 0.9);
  }
`

export const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: .7em;
`
