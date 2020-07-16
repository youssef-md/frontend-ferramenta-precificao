import styled from 'styled-components';

export const ModelCardContainer = styled.div`
  width: 100%;
  transition: 0.2s all;

  header {
    position: fixed;
    width: 100%;
    max-width: 1150px;
    display: flex;
    position: absolute;
    flex-direction: row;
    justify-content: space-between;

    > svg {
      padding: 0.8rem;
      background-color: ${props => props.theme.primary04};
      color: ${props => props.theme.secondary01};
    }

    div {
      display: flex;
      flex-direction: row;
      justify-content: right;

      p {
        margin: 5px 10px;
        font-weight: 600;

        svg {
          margin-right: 0.5rem;
        }
      }
    }
  }

  &:hover {
    transform: translateY(-0.2rem);
  }
`;

export const Card = styled.section`
  width: 100%;
  margin: 20px 0;
  padding: 37px 20px 37px 43px;
  background-color: ${props => props.theme.secondary01};
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);

  strong {
    font-size: 1.7rem;
  }
`;
