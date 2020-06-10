import styled, { css } from 'styled-components';

const variations = {
  primary: css`
    background-color: ${props => props.theme.primary05};

    &:not(:disabled):hover {
      background-color: ${props => props.theme.primary04};
    }
  `,

  secondary: css`
    background-color: none;
    border: 1px solid ${props => props.theme.primary05};
    color: ${props => props.theme.primary05};

    &:not(:disabled):hover {
      background-color: ${props => !props.loading && props.theme.primary04};
      border: 1px solid ${props => props.theme.primary04};
      color: ${props => props.theme.secondary01};
    }
  `,
};

export const ButtonStyle = styled.button`
  height: 44px;
  border: 0;
  color: white;
  padding: 0 40px;
  /* background-color: ${props => props.theme.primary05}; */
  ${props => variations[props.type]}
  border-radius: 50px;
  transition: all 0.4s;

  &:active {
    background-color: ${props => props.theme.primary05};
  }

  &:focus {
    box-shadow: 0 2px 8px ${props => props.theme.primary03};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.42;
  }

  svg {
    margin-top: 3px;
  }
`;
