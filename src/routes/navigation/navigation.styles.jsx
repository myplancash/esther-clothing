import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as EstherLogo } from '../../assets/esther-daza.svg';

export const NavigationContainer = styled.div`
  height: 80%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  align-items: center;
`
export const Logo = styled(EstherLogo)`
  height: 80px;
  width: 210px;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
    filter: alpha(opacity=30);
  }
`

export const LogoContainer = styled.div`
  height: 100%;
  width: 60%;
  padding: 1em;
  justify-content: flex-start;
`

export const NavLinks = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  align-items: center;
  padding: 1em;
`

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;

  &:hover {
    opacity: 0.3;
    filter: alpha(opacity=30);
  }
`
