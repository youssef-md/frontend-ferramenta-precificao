import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  label {
    font-size: 1.4rem;
    color: ${props => props.theme.secondary08};
    font-weight: 600;
    margin-bottom: 8px;
  }

  input {
    width: 100%;
    height: 40px;
    font-size: 16px;
    border: 1px solid ${props => props.theme.secondary06};
    color: ${props => props.theme.secondary07};
    padding: 0 16px;
    border-radius: 6px;

    &::placeholder {
      font-style: italic;
      color: rgba(0, 0, 0, 0.5);
    }

    &:focus {
      border-color: ${props => props.theme.primary04};
      box-shadow: 0 0 0 1px ${props => props.theme.primary04};
    }

    ${props =>
      props.valid &&
      css`
        border-color: ${props => props.theme.success};
        box-shadow: 0 0 0 1px ${props => props.theme.success};
      `}

    ${props =>
      props.invalid &&
      css`
        border-color: ${props => props.theme.danger};
        box-shadow: 0 0 0 1px ${props => props.theme.danger};
      `}
  }

  p {
    font-size: 13px;
  }

  span {
    display: flex;
    align-items: center;
    margin-top: 4px;

    p {
      font-style: italic;
      margin-left: 4px;
    }
  }
`;

export const Valid = styled.span`
  color: ${props => props.theme.success};
  p {
    color: ${props => props.theme.success};
  }
`;

export const Invalid = styled.span`
  color: ${props => props.theme.danger};
  p {
    color: ${props => props.theme.danger};
  }
`;

export const TogglePassword = styled.div`
  position: absolute;
  right: 1rem;
  top: 98%;
  transform: translateY(-98%);
  padding: 0.5rem;

  svg {
    color: ${props => props.theme.primary05};
    transition: all 0.2s;
    &:hover {
      color: ${props => props.theme.primary04};
    }
  }
`;
