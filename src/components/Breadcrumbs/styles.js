import styled from 'styled-components';

export const BreadcrumbsStyle = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  & > a {
    color: ${props => props.theme.secondary08};
    display: flex;
  }

  button {
    color: ${props => props.theme.secondary07};
    font-size: 1.6rem;
    text-decoration: none;
  }

  & > button:hover {
    color: ${props => props.theme.primary04};
  }

  span:last-child button:last-child {
    font-weight: 600;
    color: ${props => props.theme.primary04};
  }

  span {
    display: flex;
    align-items: center;

    button:hover {
      text-decoration: underline;
    }

    svg {
      margin: 0 1.6rem;
    }
  }
`;
