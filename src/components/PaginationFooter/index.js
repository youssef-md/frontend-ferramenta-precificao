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
  totalQtd,
  page,
  pageTotal,
  isItemDropOpen,
  setIsItemDropOpen,
  isPageDropOpen,
  setIsPageDropOpen,
}) {
  return (
    <Footer>
      <div>
        {isItemDropOpen && (
          <LeftDropDown>
            <li>5</li>
            <li>10</li>
            <li>15</li>
            <li>20</li>
          </LeftDropDown>
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
          1 - {qtd} de {totalQtd} itens
        </p>
      </div>

      <div>
        {isPageDropOpen && (
          <RightDropDown>
            <li>1</li>
            <li>2</li>
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
          de {pageTotal} páginas
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
