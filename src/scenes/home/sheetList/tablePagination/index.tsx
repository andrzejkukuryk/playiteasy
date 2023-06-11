import React from "react";
import { Pagination } from "react-bootstrap";

interface TablePaginationProps {
  numberOfPages: number;
  activePage: number;
  setActivePage: React.Dispatch<React.SetStateAction<number>>;
}

export function TablePagination({
  numberOfPages,
  activePage,
  setActivePage,
}: TablePaginationProps) {
  const items = [];
  const handleClickPrev = () => {
    if (activePage > 1) {
      setActivePage(activePage - 1);
    }
  };
  const handleClickNext = () => {
    if (activePage < numberOfPages) {
      setActivePage(activePage + 1);
    }
  };

  for (let i = 1; i <= numberOfPages; i++) {
    items.push(
      <Pagination.Item
        key={`pagination${i}`}
        active={i === activePage}
        onClick={() => setActivePage(i)}
      >
        {i}
      </Pagination.Item>
    );
  }
  return (
    <Pagination className="justify-content-center">
      <Pagination.Prev onClick={handleClickPrev} disabled={activePage === 1}>
        Previous
      </Pagination.Prev>
      {items}
      <Pagination.Next
        onClick={handleClickNext}
        disabled={activePage === numberOfPages}
      >
        Next
      </Pagination.Next>
    </Pagination>
  );
}
