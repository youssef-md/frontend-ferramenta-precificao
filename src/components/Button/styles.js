import styled, { css } from 'styled-components';

const variations = {
  primary: css`
    color: ${props => props.theme.secondary01};
    background-color: ${props => props.theme.primary05};

    ${props =>
      !props.disabled &&
      css`
        &:hover {
          background-color: ${props => props.theme.primary04};
        }
      `}

    &:active {
      background-color: ${props => props.theme.primary05};
    }

    &:focus {
      box-shadow: 0 2px 8px ${props => props.theme.primary03};
    }
  `,

  secondary: css`
    background-color: none;
    border: 1px solid ${props => props.theme.primary05};
    color: ${props => props.theme.primary05};

    ${props =>
      !props.disabled &&
      css`
        &:hover {
          background-color: ${props => !props.loading && props.theme.primary04};
          border: 1px solid ${props => props.theme.primary04};
          color: ${props => props.theme.secondary01};
        }
      `}

    ${props =>
      !props.loading &&
      css`
        &:focus {
          box-shadow: 0 2px 8px ${props => props.theme.primary03};
          background-color: ${props => props.theme.primary05};
          color: ${props => props.theme.secondary01};
        }
      `}
  `,
};

export const ButtonStyle = styled.button`
  height: 44px;
  border: 0;
  padding: 0 40px;
  border-radius: 5rem;
  transition: all 0.4s;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.42;
  }

  ${props => variations[props.type]}
  svg {
    margin-top: 0.3rem;
  }
`;
