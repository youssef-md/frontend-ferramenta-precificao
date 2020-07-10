import styled from 'styled-components';

export const TitleHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;

  svg {
    color: ${props => props.theme.primary04};
  }
`;
