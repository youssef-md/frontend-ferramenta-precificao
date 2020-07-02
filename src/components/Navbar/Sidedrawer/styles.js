import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 6;
`;

export const SideNav = styled.nav`
  position: fixed;
  top: 0;
  display: block;
  height: 100%;
  width: 47.5rem;
  background: ${props => props.theme.secondary01};
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  z-index: 8;

  li {
    list-style: none;
  }
`;

export const NavHead = styled.header`
  display: flex;
  align-items: center;
  padding: 1.5rem 2.3rem;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);

  button {
    border: 0;
  }

  img {
    width: 10rem;
  }

  svg {
    color: ${props => props.theme.primary05};
    margin-right: 2rem;

    &:hover {
      color: ${props => props.theme.primary04};
    }
  }
`;

export const NavItem = styled(Link)`
  display: block;
  font-size: 1.6rem;
  text-decoration: none;
  padding: 2.5rem 2.3rem;
  border-bottom: 1px solid ${props => props.theme.secondary04};
  color: ${props => props.theme.primary05};
  transition: all 0.2s;

  &:hover {
    background: ${props => props.theme.primary01};
  }
`;
