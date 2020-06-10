import styled from 'styled-components';

export const ButtonStyle = styled.button`
  height: 44px;
  border: 0;
  color: white;
  padding: 0 40px;
  background-color: ${props => props.theme.primary05};
  border-radius: 50px;
  transition: all 0.4s;

  &:not(:disabled):hover {
    background-color: ${props => props.theme.primary04};
  }

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
