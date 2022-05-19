import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const NavigationContainer = styled.div`
  height: 120px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 210px;
  padding: 25px;

  :hover {
    opacity: 0.7;
    filter: alpha(opacity=30);
  }
`


export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;


  &:hover {
    opacity: 0.3;
    filter: alpha(opacity=30);
  }
`

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
