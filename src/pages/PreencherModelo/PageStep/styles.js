import styled from 'styled-components';

import Input from '../../../components/Input';

export const InputsContainer = styled.div`
  display: ${({ isSingle }) => !isSingle && 'flex'};
  width: ${({ isSingle }) => isSingle && '80%'};

  flex-wrap: wrap;
  margin-top: 3.5rem;
`;

export const FormSide = styled.div`
  flex: 1;

  h5 {
    margin-top: 0;
  }
`;

export const Container = styled.div`
  opacity: 0;
  max-width: 88%;
  margin: 0 auto;
  transition: all .15s;

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
    min-height: 46rem;
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
  flex-basis: 15rem;
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

export const PageEndCTA = styled.div`
  padding: 4rem 1rem 1rem;
  > h3 {
    margin-bottom: 8rem;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 10rem;

  > button:first-child {
    margin-right: 3rem;
  }
`;
