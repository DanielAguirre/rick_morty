import React from 'react';
import styled from 'styled-components';

interface IPaginationProps {
	nextPage: string;
	prevPage: string;
  handlePagination: Function
}

const PaginationStyles = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  justify-items: center;
  border: 1px solid var(--grey);
  margin: 2rem 0;
  border-radius: 5px;
  text-align: center;
  & > * {
    padding: 1rem;
    flex: 1;
    border-right: 1px solid var(--grey);
    text-decoration: none;
  }
`;

export default function Pagination({
	nextPage,
	prevPage,
  handlePagination
}:IPaginationProps) {
	console.log({nextPage, prevPage})
  return (
    <PaginationStyles>
      <button disabled={prevPage !== null ? false : true} onClick={() => handlePagination('prev')}>
        ⬅ Prev
      </button>
      <button disabled={nextPage !== null ? false : true}  onClick={() => handlePagination('next')}>
        Next ⬅
      </button>
    </PaginationStyles>
  );
}
