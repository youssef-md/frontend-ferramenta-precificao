import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    width: 25rem;
  }
`;

export const TitleHeader = styled.div`
  text-align: center;
  margin-top: 2rem;

  h4 {
    font-size: 35px;
    margin-bottom: 0px;
    color: ${props => props.theme.secondary08};
  }

  h3 {
    margin-top: 0;
    font-size: 41px;
    color: ${props => props.theme.secondary08};
  }

  p {
    font-size: 24px;
    color: black;
    margin: 5rem 0;
  }

  @media (max-width: 720px) {
    h4 {
      font-size: 25px;
    }

    h3 {
      font-size: 30px;
    }

    p {
      font-size: 18px;
    }
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
  height: 2.5rem;
  width: 2.5rem;
  border: 2px solid ${props => props.theme.primary05};
`;
