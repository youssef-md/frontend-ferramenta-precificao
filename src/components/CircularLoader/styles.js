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
  width: 30px;
  height: 30px;
  animation: ${rotate} 2s infinite;
`;
