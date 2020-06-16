import React, { useState } from 'react';
import { FaHome, FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { BreadcrumbsStyle } from './styles';

function Breadcrumbs() {
  const [pages, setPages] = useState([
    {
      name: 'Serviços',
      route: 'servicos',
    },
    {
      name: 'Bolsa Unb',
      route: 'servico-selecionado',
    },
  ]);

  return (
    <BreadcrumbsStyle>
      <Link to="/">
        <FaHome size={15} />
      </Link>

      {pages.map(page => (
        <span>
          <FaChevronRight size={11} color="#9E9D9D" />
          <Link to={page.route}>{page.name}</Link>
        </span>
      ))}
    </BreadcrumbsStyle>
  );
}

export default Breadcrumbs;
