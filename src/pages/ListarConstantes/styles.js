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

  .smaller {
    flex: 0.7;
  }

  header {
    padding: 2rem 1.5rem;
  }

  section {
    padding: 0.5rem 1.5rem;
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
      font-size: 15px;

      .desc-popup {
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

      &:hover .desc-popup {
        display: block;
      }

      .input-new-value {
        width: 8rem;
        height: 3rem;
        border: 1px solid rgba(0, 0, 0, 0.8);
        border-radius: 4px;
        padding: 0 0.4rem;
      }

      .new-value {
        display: flex;

        button {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-right: -1rem;
        }
      }
    }

    button {
      padding: 1rem;
      margin-right: 1rem;

      svg {
        color: ${props => props.theme.primary04};
      }
    }
  }
`;

export const EOFButton = styled(Button)`
  align-self: flex-end;
`;
