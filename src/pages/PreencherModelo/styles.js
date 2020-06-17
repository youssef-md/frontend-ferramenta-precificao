import styled from 'styled-components';
import Input from '../../components/Input';

export const InputsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 35px;
`;

export const FormSide = styled.div`
  flex: 1;

  h5 {
    text-align: center;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: auto;

  form {
    display: flex;
    justify-content: center;
    align-items: flex-end;

    ${FormSide}:first-child ${InputsContainer} {
      border-right: 1px solid rgba(0,0,0,.1);
      padding-right: 32px;
    }
    
    ${FormSide}:nth-child(2) ${InputsContainer} {
      padding-left: 32px;
    }
  }
`;

export const CustomInput = styled(Input)`
  margin: 15px 10px;
  flex: 1;
`;
