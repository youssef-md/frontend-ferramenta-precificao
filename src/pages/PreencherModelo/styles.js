import styled from 'styled-components';

import Button from '../../components/Button';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow-x: hidden;

  h2 {
    text-align: center;
  }
`;

export const FormButton = styled(Button)`
  position: absolute;
  top: 60rem;
  padding: 0 1rem;
  z-index: 10;
`;

export const LeftFormButton = styled(FormButton)`
  left: 0;
`;

export const RightFormButton = styled(FormButton)`
  right: 0;
`;
