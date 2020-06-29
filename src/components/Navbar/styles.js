import styled from 'styled-components';

export const Container = styled.nav`
  height: 136px;
  width: 100%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
`;

export const TopContainer = styled.div`
  max-width: 1152px;
  height: 50%;
  margin: auto;
  padding-top: 10px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  > a img {
    width: 140px;
    height: 50px;
  }

  ul {
    display: flex;

    li {
      list-style: none;

      a {
        color: ${props => props.theme.primary04};
        text-decoration: none;
        font-size: 1.2rem;
        font-weight: bold;
        margin-left: 20px;
      }
    }
  }
`;

export const BottomContainer = styled.div`
  max-width: 1152px;
  height: 50%;
  margin: auto;

  display: flex;
  align-items: center;

  svg {
    color: ${props => props.theme.primary04};
    margin-right: 10px;
  }

  h4 {
    margin: 0;
  }
`;
