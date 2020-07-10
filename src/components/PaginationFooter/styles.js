import styled from 'styled-components';

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;

  > div {
    display: flex;
    align-items: center;
  }
`;

export const PrimaryColorDetail = styled.span`
  color: ${props => props.theme.primary04};
  margin-left: 0.5rem;

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
