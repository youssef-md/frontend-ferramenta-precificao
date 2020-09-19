import styled from 'styled-components';
import { Form as UnformForm } from '@unform/web';

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

export const Backdrop = styled.div`
  background: rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 100%;
`;

export const Form = styled(UnformForm)`
  position: absolute;
  width: 50rem;
  box-shadow: 0 0 2rem rgba(0, 0, 0, 0.2);
  background: white;
  padding: 2rem 5rem 6rem 5rem;

  > h4 {
    text-align: center;
    margin-bottom: 3rem;
  }

  div {
    margin-bottom: 2rem;
  }

  > button {
    width: 100%;
    margin-top: 3.5rem;
  }

  @media (max-width: 720px) {
    width: 90vw;
  }
`;
