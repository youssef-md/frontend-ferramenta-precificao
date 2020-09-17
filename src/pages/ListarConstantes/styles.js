import styled from 'styled-components';
import Button from '../../components/Button';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;

    button {
      text-decoration: underline;
      color: ${props => props.theme.primary04};
      font-weight: bold;
    }
  }
`;

export const Table = styled.div`
  margin-bottom: 5rem;

  #smaller {
    flex: 0.7;
  }

  header,
  section {
    padding: 2rem 1.5rem;
  }

  header {
    background: ${props => props.theme.secondary03};

    p {
      flex: 2;
      font-weight: bold;
      color: ${props => props.theme.primary05};
    }
  }

  section {
    display: flex;
    border-bottom: 1px solid ${props => props.theme.primary02};
    align-items: center;

    p {
      flex: 2;
      position: relative;

      span {
        position: absolute;
        top: -1rem;
        left: -1rem;
        opacity: 1;
        background: white;
        box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);
        border-radius: 8px;
        padding: 1.5rem;
        display: none;
        z-index: 10;
      }

      &:hover span {
        display: block;
      }
    }

    button {
      padding: 1rem;
      margin-left: 1rem;

      svg {
        color: ${props => props.theme.primary04};
      }
    }
  }
`;

export const EOFButton = styled(Button)`
  align-self: flex-end;
`;
