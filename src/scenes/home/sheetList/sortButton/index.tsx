import React from "react";
import { SortType } from "../../../../store/songsSlice";
import { PropsWithChildren } from "react";
import classNames from "classnames";
import "./style.css";

interface SortButtonProps {
  sortType: SortType;
  activeSortType: SortType;
  handleClick: (sortType: SortType) => void;
}

export function SortButton({
  sortType,
  activeSortType,
  handleClick,
  children,
}: PropsWithChildren<SortButtonProps>) {
  const buttonClass = classNames("btn btn-link p-0", {
    activeSort: sortType === activeSortType,
    inactiveSort: sortType !== activeSortType,
  });

  const buttonClick = () => {
    handleClick(sortType);
  };

  return (
    <button className={buttonClass} onClick={buttonClick}>
      {children}
    </button>
  );
}
