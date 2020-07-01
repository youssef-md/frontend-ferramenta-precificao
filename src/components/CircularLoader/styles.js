import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg)
  }
  to {
    transform: rotate(360deg)
  }
`;

export const Container = styled.svg`
  width: 3rem;
  height: 3rem;
  animation: ${rotate} 2s infinite;
`;
