import React from 'react';
import '../styles/global.css';
import '@uiw/icons/fonts/w-icon.css';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageClick = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      onPageChange(pageNumber);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const visiblePages = 3;

    if (totalPages <= visiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      const startPage = Math.max(1, currentPage - Math.floor(visiblePages / 2));
      const endPage = Math.min(totalPages, startPage + visiblePages - 1);

      if (startPage > 1) {
        pageNumbers.push(1, '...'); 
      }

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }

      if (endPage < totalPages) {
        pageNumbers.push('...', totalPages);
      }
    }

    return pageNumbers.map((pageNumber, index) => (
      <li key={index} className={pageNumber === currentPage ? 'current' : ''}>
        {pageNumber === '...' ? (
          <span className='text-[#fff]'>{pageNumber}</span>
        ) : (
          <a href={`#${pageNumber}`} onClick={() => handlePageClick(pageNumber)}>
            {pageNumber}
          </a>
        )}
      </li>
    ));
  };

  return (
    <nav data-pagination>
      <a href="#" disabled={currentPage === 1} onClick={() => handlePageClick(currentPage - 1)}>
        <i className="w-icon-caret-left"></i>
      </a>
      <ul>{renderPageNumbers()}</ul>
      <a href="#" disabled={currentPage === totalPages} onClick={() => handlePageClick(currentPage + 1)}>
        <i className="w-icon-caret-right"></i>
      </a>
    </nav>
  );
};

export default Pagination;
