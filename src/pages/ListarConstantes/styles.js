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

    h3 {
    }
  }
`;

export const EOFButton = styled(Button)`
  align-self: flex-end;
`;
