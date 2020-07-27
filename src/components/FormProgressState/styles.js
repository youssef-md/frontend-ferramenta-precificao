import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Indicator = styled.div`
  font-size: 2.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props => (props.size === 'big' ? '38px' : '26px')};
  height: ${props => (props.size === 'big' ? '38px' : '26px')};
  border-radius: 50%;
  margin: 0 0.7rem;
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

  svg {
    color: white;
  }
`;
