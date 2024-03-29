import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleHeader = styled.div`
  text-align: center;
  margin-top: 2rem;

  h2 {
    margin-bottom: 0px;
    color: ${props => props.theme.secondary08};
  }

  h1 {
    margin-top: 0;
    color: ${props => props.theme.secondary08};
  }

  p {
    color: ${props => props.theme.secondary09};
    margin: 5rem 0;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  width: 105rem;
  justify-content: space-between;
  margin-bottom: 10rem;

  @media (max-width: 720px) {
    flex-direction: column;
    align-items: center;

    margin-bottom: 4rem;

    width: 80%;
  }
`;

export const Card = styled.div`
  display: flex;
  width: 31rem;
  flex-direction: column;
  align-items: center;

  img {
    width: 100%;
  }

  > div {
    display: flex;
    align-items: center;
    margin-top: 4rem;

    p {
      font-size: 17px;
      font-weight: 600;
      margin-left: 3rem;
    }
  }

  @media (max-width: 720px) {
    margin-bottom: 4rem;
  }
`;

export const Indicator = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1.5rem;
  font-weight: 600;

  border-radius: 50%;
  background: transparent;
  color: ${props => props.theme.primary05};
  height: 2.5rem;
  width: 2.5rem;
  border: 2px solid ${props => props.theme.primary05};
`;
