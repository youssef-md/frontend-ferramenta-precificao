import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 1152px;
  height: 87px;
  background-color: #ffffff;
  margin-top: 30px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  display: flex;
`;

export const Card = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    color: ${props => props.theme.primary04};
    margin-right: 32px;
    cursor: pointer;
  }
`;

export const TextContainer = styled.div`
  width: 100%;

  p {
    margin-left: 21px;
    font-style: normal;
    color: #333333;
    font-weight: 600;
  }

  p + p {
    line-height: 22px;
    font-weight: normal;
  }
`;
