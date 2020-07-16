import styled from 'styled-components';

export const Container = styled.footer`
  background-color: ${props => props.theme.primary07};
  padding: 4rem 0;
  margin-top: 12rem;
`;

export const Content = styled.div`
  max-width: 1152px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    height: 5rem;
  }

  div {
    display: flex;
    align-items: center;

    a {
      opacity: 0.8;
      transition: opacity 0.2s;

      &:hover {
        opacity: 1;
      }
    }
    a + a {
      margin-left: 4rem;
    }
  }
`;