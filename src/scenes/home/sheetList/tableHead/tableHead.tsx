import React from "react";
import { ReactComponent as BiChevronUp } from "assets/bi-chevron-up.svg";
import { ReactComponent as BiChevronDown } from "assets/bi-chevron-down.svg";
import { SortType, updateSortType } from "store/songsSlice";
import { updateActivePage } from "store/controlsSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "store/store";
import "./tableHead.css";
import classNames from "classnames";

interface TableHeadProps {
  upperButton: SortType;
  lowerButton: SortType;
  activeSortType: SortType;
  label: string;
}

export function TableHead({
  upperButton,
  lowerButton,
  activeSortType,
  label,
}: TableHeadProps) {
  const dispatch = useDispatch<AppDispatch>();
  const handleUpperClick = () => {
    dispatch(updateSortType(upperButton));
    dispatch(updateActivePage(1));
  };
  const handleLowerClick = () => {
    dispatch(updateSortType(lowerButton));
    dispatch(updateActivePage(1));
  };
  const upperButtonClass = classNames("sortButton", {
    activeSort: activeSortType === upperButton,
  });
  const lowerButtonClass = classNames("sortButton", {
    activeSort: activeSortType === lowerButton,
  });
  return (
    <div className="gridContainer bg-black">
      <div>
        <button
          type="button"
          className={upperButtonClass}
          onClick={handleUpperClick}
        >
          <BiChevronUp />
        </button>
      </div>
      <div className="label">
        <p className="fw-light fs-5 text-white">{label}</p>
      </div>
      <div>
        <button
          type="button"
          className={lowerButtonClass}
          onClick={handleLowerClick}
        >
          <BiChevronDown />
        </button>
      </div>
    </div>
  );
}
