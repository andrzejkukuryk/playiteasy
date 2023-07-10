import React, { useState } from "react";
import { SongInfo } from "models/songInfo";
import { DifficultyStars } from "components/difficultyStars/difficultyStars";
import { updateExpendedRecords } from "store/songsSlice";
import { useDispatch, useSelector } from "react-redux";
import { expendedRecordsSelector } from "store/selectors";
import classNames from "classnames";
import { CollapseButton } from "./collapseButton/collapseButton";
import { MediaLink } from "./mediaLink/mediaLink";
import "./listItem.css";

interface ListItemProps {
  number: number;
  song: SongInfo;
}

export function ListItem({ number, song }: ListItemProps) {
  const [letRotate, setLetRotate] = useState(false);
  const dispatch = useDispatch();
  const expendedRecords = useSelector(expendedRecordsSelector);

  const handleClick = (id: string) => {
    dispatch(updateExpendedRecords(id));
    setLetRotate(true);
  };

  const collapseId = `collapseLinks${song.artist.replace(
    /[^A-Za-z]/g,
    ""
  )}${song.title.replace(/[^A-Za-z]/g, "")}`;

  const collapseTarget = `#${collapseId}`;

  const trCollapseClass = classNames({
    "collapse show": expendedRecords.includes(collapseId),
    collapse: !expendedRecords.includes(collapseId),
  });

  const tdClass = classNames({
    hideBottomBorder: expendedRecords.includes(collapseId),
  });

  const lastTdClass = classNames("ps-0", {
    hideBottomBorder: expendedRecords.includes(collapseId),
  });

  return (
    <>
      <tr
        data-bs-toggle="collapse"
        data-bs-target={collapseTarget}
        aria-controls={collapseId}
        aria-expanded="false"
        itemType="button"
        onClick={() => handleClick(collapseId)}
      >
        <td className={tdClass}>{song.artist}</td>
        <td className={tdClass}>{song.title}</td>
        <td className={tdClass}>
          <DifficultyStars difficulty={song.difficulty} />
        </td>
        <td className={lastTdClass}>
          <CollapseButton collapseId={collapseId} letRotate={letRotate} />
        </td>
      </tr>
      <tr className={trCollapseClass} id={collapseId}>
        <td></td>
        <td colSpan={3}>
          <div className="d-flex justify-content-between mb-3">
            <MediaLink link={song.notes} linkLabel="notes" />
            <MediaLink link={song.tabs} linkLabel="tabs" />
            <MediaLink link={song.video} linkLabel="video" />
          </div>
        </td>
      </tr>
    </>
  );
}
