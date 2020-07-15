import styled from 'styled-components';

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  position: relative;

  > div {
    display: flex;
    align-items: center;

    p {
      display: flex;
      align-items: center;
    }

    ul {
      position: absolute;
      top: 0;
      margin-top: 3rem;
      width: 10rem;
      list-style: none;
      text-align: center;
      background: ${props => props.theme.secondary02};
      box-shadow: 0 0 0.35rem rgba(0, 0, 0, 0.35);

      li {
        font-size: 1.4rem;
        padding: 0.8rem 0;
        border-bottom: 1px solid ${props => props.theme.secondary04};
        cursor: pointer;

        &:hover {
          background: ${props => props.theme.primary01};
        }
      }
    }
  }
`;

export const PrimaryColorDetail = styled.span`
  color: ${props => props.theme.primary04};
  margin-left: 0.5rem;
  display: flex;
  align-items: center;

  button {
    color: ${props => props.theme.primary04};
    width: 3rem;
    height: 3rem;
    border-radius: 50%;

    &:hover {
      background: ${props => props.theme.primary02};
    }
  }
`;

export const PaginationControls = styled.div`
  display: flex;
  align-items: center;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    color: ${props => props.theme.primary04};

    &:hover {
      background: ${props => props.theme.primary02};
    }
  }
`;

export const Divider = styled.div`
  width: 0.2rem;
  height: 2rem;
  margin: 0 1rem;
  background: ${props => props.theme.secondary04};
`;

export const LeftDropDown = styled.ul`
  left: 2.2rem;
`;

export const RightDropDown = styled.ul`
  right: 14rem;
`;
