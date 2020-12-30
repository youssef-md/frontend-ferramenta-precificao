import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  label {
    font-size: 1.4rem;
    color: ${props => props.theme.secondary08};
    font-weight: 600;
    margin-bottom: 8px;
  }
`;
