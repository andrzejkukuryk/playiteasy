import React from "react";
import "./style.css";
import { ReactComponent as BiChevronDownBig } from "assets/bi-chevron-down-big.svg";
import { ReactComponent as BiChevronUpBig } from "assets/bi-chevron-up-big.svg";
import { expendedRecordsSelector } from "store/selectors";
import { useSelector } from "react-redux";
import classNames from "classnames";

interface CollapseButtonProps {
  collapseId: string;
}

export function CollapseButton({ collapseId }: CollapseButtonProps) {
  const expendedRecords = useSelector(expendedRecordsSelector);
  const recordExpended = expendedRecords.includes(collapseId);

  const collapseButtonClass = classNames("collapseButton", {
    rotateDownUp: recordExpended,
  });

  return (
    <button className={collapseButtonClass}>
      <BiChevronDownBig />
    </button>
  );
}
