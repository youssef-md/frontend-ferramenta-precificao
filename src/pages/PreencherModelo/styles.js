import styled from 'styled-components';

import Button from '../../components/Button';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow-x: hidden;
  text-align: center;
`;

export const FormButtonContainer = styled.div`
  width: 100%;
  position: absolute;
  top: 600px;
  display: flex;
  justify-content: space-between;
`;

export const FormButton = styled(Button)`
  padding: 0 10px;
  /* position: absolute; */
`;
