import React from 'react';
import { FaHome, FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { BreadcrumbsStyle } from './styles';

function Breadcrumbs({ currentRouting = [] }) {
  return (
    <BreadcrumbsStyle>
      <Link to="/">
        <FaHome size={15} />
      </Link>

      {currentRouting.map(page => (
        <span key={page.route}>
          <FaChevronRight size={11} color="#9E9D9D" />
          <Link to={page.route}>{page.name}</Link>
        </span>
      ))}
    </BreadcrumbsStyle>
  );
}

export default Breadcrumbs;
