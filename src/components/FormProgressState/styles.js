import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Indicator = styled.div`
  font-size: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props => (props.size === 'big' ? '44px' : '28px')};
  height: ${props => (props.size === 'big' ? '44px' : '28px')};
  border-radius: 50%;
  margin: 0 10px;
  background: ${props =>
    props.isValid || props.isCurrent
      ? props.theme.primary05
      : props.theme.secondary03};
  border: 3px solid
    ${props =>
      props.isValid || props.isCurrent
        ? props.theme.primary06
        : props.theme.secondary04};
  color: ${props => props.theme.secondary01};
  transition: all 0.2s;

  img {
    color: blue;
    width: 15px;
    height: 15px;
  }
`;
