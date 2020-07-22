import styled from 'styled-components';
import { FaArrowRight } from 'react-icons/fa';

export const TitleHeader = styled.header`
  text-align: center;

  h3 {
    margin-bottom: 0;
  }

  h4 {
    margin-top: 1rem;
    color: ${props => props.theme.secondary07};
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 6rem 0;
`;

export const RightArrow = styled(FaArrowRight).attrs({
  size: 20,
})`
  color: ${props => props.theme.primary05};
`;

export const ModelSection = styled.section`
  display: flex;
  margin-top: 10rem;

  h4 {
    margin: 0;
    padding-right: 5rem;
    margin-right: 5rem;
    border-right: 2px solid ${props => props.theme.secondary04};
  }
`;

export const Models = styled.div`
  flex: 1;

  div + div {
    margin-top: 2.5rem;
  }
`;
