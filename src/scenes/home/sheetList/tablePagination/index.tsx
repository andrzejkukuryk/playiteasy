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

  const arrayOfPages = Array.from(new Array(numberOfPages), (x, i) => i + 1);

  const items = arrayOfPages.map((element) => (
    <Pagination.Item
      key={`pagination${element}`}
      active={element === activePage}
      onClick={() => setActivePage(element)}
    >
      {element}
    </Pagination.Item>
  ));

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