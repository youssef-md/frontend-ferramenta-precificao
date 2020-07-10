import React from 'react';
import { FaChevronDown, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import {
  Footer,
  PrimaryColorDetail,
  PaginationControls,
  Divider,
} from './styles';

function PaginationFooter() {
  return (
    <Footer>
      <div>
        <p>
          Exibir:
          <PrimaryColorDetail>
            10
            <button type="button">
              <FaChevronDown size={12} />
            </button>
          </PrimaryColorDetail>
        </p>
        <Divider />
        <p>1 - 10 de 50 itens</p>
      </div>

      <div>
        <p>
          <PrimaryColorDetail>
            12
            <button type="button">
              <FaChevronDown size={12} />
            </button>
          </PrimaryColorDetail>
          de 48 páginas
        </p>

        <Divider />
        <PaginationControls>
          <button type="button">
            <FaChevronLeft size={20} />
          </button>
          <button type="button">
            <FaChevronRight size={20} />
          </button>
        </PaginationControls>
      </div>
    </Footer>
  );
}

export default PaginationFooter;
