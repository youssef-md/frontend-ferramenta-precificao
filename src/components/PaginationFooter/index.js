import React from 'react';
import {
  FaChevronDown,
  FaChevronLeft,
  FaChevronRight,
  FaTimes,
} from 'react-icons/fa';

import {
  Footer,
  PrimaryColorDetail,
  PaginationControls,
  Divider,
  LeftDropDown,
  RightDropDown,
} from './styles';

function PaginationFooter({
  qtd,
  setQtd,
  totalItems,
  page,
  setPage,
  totalPages,
  isItemDropOpen,
  setIsItemDropOpen,
  isPageDropOpen,
  setIsPageDropOpen,
}) {
  function generateRangeLi(total, start, type) {
    return [...Array(total - start).keys()].map(item => {
      const value = item + start + 1;
      return (
        <li
          onClick={type === 'qtd' ? () => setQtd(value) : () => setPage(value)}
        >
          {value}
        </li>
      );
    });
  }
  return (
    <Footer>
      <div>
        {isItemDropOpen && (
          <LeftDropDown>{generateRangeLi(totalItems, 4, 'qtd')}</LeftDropDown>
        )}
        <p>
          Exibir:
          <PrimaryColorDetail>
            {qtd}
            <button
              type="button"
              onClick={() => setIsItemDropOpen(!isItemDropOpen)}
            >
              {isItemDropOpen ? (
                <FaTimes size={12} />
              ) : (
                <FaChevronDown size={12} />
              )}
            </button>
          </PrimaryColorDetail>
        </p>
        <Divider />
        <p>
          1 - {qtd} de {totalItems} itens
        </p>
      </div>

      <div>
        {isPageDropOpen && (
          <RightDropDown>
            {generateRangeLi(totalPages, 0, 'page')}
          </RightDropDown>
        )}
        <p>
          <PrimaryColorDetail>
            {page}

            <button
              type="button"
              onClick={() => setIsPageDropOpen(!isPageDropOpen)}
            >
              {isPageDropOpen ? (
                <FaTimes size={12} />
              ) : (
                <FaChevronDown size={12} />
              )}
            </button>
          </PrimaryColorDetail>
          de {totalPages} páginas
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
