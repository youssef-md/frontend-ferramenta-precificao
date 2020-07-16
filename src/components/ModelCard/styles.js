import styled from 'styled-components';

export const ModelCardContainer = styled.div`
  width: 100%;
  transition: 0.2s all;
  position: relative;
  margin: 20px 0;

  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    width: 100%;
    position: absolute;

    > svg {
      padding: 0.8rem;
      background-color: ${props => props.theme.primary04};
      color: ${props => props.theme.secondary01};
    }

    div {
      display: flex;
      flex-direction: row;
      margin-right: 1rem;

      button {
        margin: 0px 10px;
        font-weight: 600;
        color: ${props => props.theme.primary04};

        &:hover {
          text-decoration: underline;
        }

        & + button {
          color: ${props => props.theme.danger};
        }

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

export const ModelData = styled.button`
  width: 100%;
  padding: 37px 20px 37px 43px;
  background-color: ${props => props.theme.secondary01};
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  text-align: left;

  strong {
    display: block;
    font-size: 1.7rem;
    margin-bottom: 0.8rem;
  }

  p {
    line-height: 1.3;
  }
`;
