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
    color: ${props =>
      props.constantes ? props.theme.secondary04 : props.theme.primary04};
  }

  &:hover {
    background-color: ${props => props.theme.secondary02};
    transform: translateY(-0.2rem);
  }
`;

export const TextContainer = styled.div`
  ${props =>
    props.constantes
      ? css`
          padding: 0.5rem;
          width: 100%;
          line-height: 3rem;
          display: flex;
          flex-direction: row;

          strong {
            margin-right: 1rem;
          }
        `
      : css`
          width: 100%;
          line-height: 3rem;
        `}
`;
