import styled, { css } from 'styled-components';

export const Container = styled.button`
  width: 100%;
  padding: 2.5rem 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: left;
  background-color: ${props => props.theme.secondary01};
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);
  transition: 0.2s all;

  & + button {
    margin-top: 2.5rem;
  }

  svg {
    color: ${props => props.theme.primary04};
  }

  &:hover {
    background-color: ${props => props.theme.secondary02};
    transform: translateY(-0.2rem);
  }
`;

export const TextContainer = styled.div`
  line-height: 3rem;

  ${props =>
    props.constantes &&
    css`
      display: flex;
      align-items: center;

      & strong {
        margin-right: 1rem;
      }
    `}
`;
