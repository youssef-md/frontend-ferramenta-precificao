import styled from 'styled-components';
import { animated } from 'react-spring';

import Input from '../../../components/Input';

export const InputsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 3.5rem;
`;

export const FormSide = styled.div`
  flex: 1;
  max-width: 50rem;
  h5 {
    margin-top: 0;
  }
`;

export const Container = styled(animated.div)`
  will-change: transform, opacity;
  position: absolute;
  width: 100%;

  h4 {
    margin-top: -1.5rem;
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
    margin-top: 6rem;
    display: flex;
    justify-content: center;
    align-items: center;

    ${FormSide}:first-child ${InputsContainer} {
      border-right: 1px solid rgba(0,0,0,.15);
      padding: 0 1.5rem;
    }

    ${FormSide}:nth-child(2) ${InputsContainer} {
      padding: 0 1.5rem;
    }
  }
`;

export const CustomInput = styled(Input)`
  margin: 15px 5px;
  flex: 1;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 80%;
    height: 40vh;
    margin-bottom: 50px;
    background-size: cover;
  }
`;