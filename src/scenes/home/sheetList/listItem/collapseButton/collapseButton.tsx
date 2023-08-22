import React from "react";
import "./collapseButton.css";
import { ReactComponent as BiChevronDownBig } from "assets/bi-chevron-down-big.svg";
import { expendedRecordsSelector } from "store/selectors";
import { useSelector } from "react-redux";
import classNames from "classnames";

interface CollapseButtonProps {
  collapseId: string;
  letRotate: boolean;
}

export function CollapseButton({ collapseId, letRotate }: CollapseButtonProps) {
  const expendedRecords = useSelector(expendedRecordsSelector);
  const recordExpended = expendedRecords.includes(collapseId);

  const collapseButtonClass = classNames("collapseButton", {
    rotateDownUp: recordExpended,
    rotateUpDown: !recordExpended && letRotate,
  });

  return (
    <button className={collapseButtonClass} aria-label="expand">
      <BiChevronDownBig />
    </button>
  );
}
