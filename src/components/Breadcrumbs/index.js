import React, { useCallback } from 'react';
import { FaHome, FaChevronRight } from 'react-icons/fa';
import { Link, useHistory } from 'react-router-dom';

import { BreadcrumbsStyle } from './styles';

function Breadcrumbs({ currentRouting = [] }) {
  const history = useHistory();

  const goBackXTimes = useCallback(
    index => {
      const howManyTimes = currentRouting.length - (index + 1);
      for (let i = 0; i < howManyTimes; i++) {
        history.goBack();
      }
    },
    [history, currentRouting.length]
  );

  return (
    <BreadcrumbsStyle>
      <Link to="/">
        <FaHome size={15} />
      </Link>

      {currentRouting.map(function createBreadcrumbItem(page, index) {
        return (
          <span key={page.route}>
            <FaChevronRight size={11} color="#9E9D9D" />
            <button type="button" onClick={() => goBackXTimes(index)}>
              {page.name}
            </button>
          </span>
        );
      })}
    </BreadcrumbsStyle>
  );
}

export default Breadcrumbs;
