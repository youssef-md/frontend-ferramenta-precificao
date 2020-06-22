import styled from 'styled-components';

import Input from '../../components/Input';
import Button from '../../components/Button';

export const InputsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 35px;
`;

export const FormSide = styled.div`
  flex: 1;

  h5 {
    margin-top: 0;
  }
`;

export const Container = styled.div`
  height: 100%;

  h4 {
    margin-top: -15px;
    color: ${props => props.theme.secondary07};
  }

  h2,
  h3,
  h4,
  h5 {
    text-align: center;
  }

  form {
    min-height: 450px;
    margin-top: 60px;
    display: flex;
    justify-content: center;
    align-items: center;

    ${FormSide}:nth-child(2) ${InputsContainer} {
      border-right: 1px solid rgba(0,0,0,.15);
      padding: 0 15px;
    }

    ${FormSide}:nth-child(3) ${InputsContainer} {
      padding: 0 15px;
    }
  }
`;

export const CustomInput = styled(Input)`
  margin: 15px 5px;
  flex: 1;
`;

export const FormButton = styled(Button)`
  padding: 0 10px;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 80%;
    height: 450px;
    margin-bottom: 50px;
    background-size: cover;
  }
`;
