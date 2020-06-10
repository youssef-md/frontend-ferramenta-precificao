import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-size: 1.4rem;
    color: ${props => props.theme.secondary08};
    font-weight: 600;
    margin-bottom: 8px;
  }

  input {
    height: 48px;
    font-size: 16px;
    border: 1px solid ${props => props.theme.secondary06};
    color: ${props => props.theme.secondary07};
    padding: 0 16px;
    border-radius: 6px;

    &::placeholder {
      font-style: italic;
    }

    &:focus {
      border: 1px solid red;
    }
  }
`;
