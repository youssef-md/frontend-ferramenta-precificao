import styled, { css } from 'styled-components';

export const Container = styled.nav`
  height: 13.6rem;
  width: 100%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  position: fixed;
  top: 0;
  z-index: 4;
  background: ${props => props.theme.secondary01};
  transition: transform 0.15s;
  transform: translateY(${props => (props.isSmall ? -65 : 0)}px);

  button {
    color: ${props => props.theme.primary05};
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const TopContainer = styled.div`
  max-width: 1152px;
  padding: 0 1rem;
  height: 50%;
  margin: auto;
  padding-top: 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  > div svg {
    display: none;
    color: ${props => props.theme.primary05};
  }

  > div a img {
    width: 14rem;
    height: 5.3rem;
    margin-left: -0.5rem;
  }

  ul {
    display: flex;
    align-items: center;

    li {
      list-style: none;

      a {
        color: ${props => props.theme.primary05};
        text-decoration: none;
        font-size: 1.2rem;
        font-weight: bold;

        &:hover {
          color: ${props => props.theme.primary04};
        }
      }
    }

    li + li {
      margin-left: 2.2rem;
    }
  }

  @media (max-width: 720px) {
    flex-direction: column;

    > div svg {
      display: flex;
    }

    ul {
      display: none;
    }

    ${props =>
    props.isBurgerOpen &&
    css`
        ul {
          display: flex;
          flex-direction: column;
          background: ${props => props.theme.secondary01};
          width: 100%;

          box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);

          z-index: 5;

          li:first-child {
            margin-top: 7rem;
          }

          li + li {
            margin-bottom: 7rem;
          }
        }
      `}
  }
`;

export const BottomContainer = styled.div`
  max-width: 1152px;
  padding: 0 1rem;
  height: 50%;
  margin: auto;

  display: flex;
  align-items: center;

  svg {
    color: ${props => props.theme.primary05};
    margin-right: 1rem;
  }

  h4 {
    margin: 0;
  }
`;

export const LogInLogoutButton = styled.button`
  font-size: 1.2rem;
  font-weight: 600;
  border: 0;
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  border-radius: 3rem;

  color: ${props => props.theme.primary05};
  background: ${props => props.theme.secondary02};

  &:hover {
    color: ${props => props.theme.secondary01};
    background: ${props => props.theme.primary05};
  }

  svg {
    margin-right: 0.6rem;
  }
`;
