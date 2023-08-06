import React, { useEffect } from "react";
import { Pagination } from "react-bootstrap";
import { clearExpendedRecords } from "store/songsSlice";
import { updateActivePage } from "store/controlsSlice";
import { activePageSelector } from "store/selectors";
import { useDispatch, useSelector } from "react-redux";

interface TablePaginationProps {
  numberOfPages: number;
}

export function TablePagination({ numberOfPages }: TablePaginationProps) {
  const dispatch = useDispatch();
  const activePage = useSelector(activePageSelector);

  useEffect(() => {
    dispatch(clearExpendedRecords());
  }, [activePage]);

  const handleClickPrev = () => {
    if (activePage > 1) {
      dispatch(updateActivePage(activePage - 1));
    }
  };
  const handleClickNext = () => {
    if (activePage < numberOfPages) {
      dispatch(updateActivePage(activePage + 1));
    }
  };

  const arrayOfPages = Array.from(new Array(numberOfPages), (x, i) => i + 1);

  const items = arrayOfPages.map((element) => (
    <Pagination.Item
      key={`pagination${element}`}
      active={element === activePage}
      onClick={() => dispatch(updateActivePage(element))}
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
