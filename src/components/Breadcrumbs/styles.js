import styled from 'styled-components';

export const BreadcrumbsStyle = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 0;

  a {
    color: ${props => props.theme.secondary07};
    font-size: 16px;
    text-decoration: none;
  }

  & > a {
    color: ${props => props.theme.secondary08};
    display: flex;
  }

  & > a:hover {
    color: ${props => props.theme.primary04};
  }

  span:last-child a:last-child {
    font-weight: 600;
    color: ${props => props.theme.primary04};
  }

  span {
    display: flex;
    align-items: center;

    a:hover {
      text-decoration: underline;
    }

    svg {
      margin: 0 16px;
    }
  }
`;
