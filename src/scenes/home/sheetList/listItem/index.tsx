import React, { useState } from "react";
import { SongInfo } from "models/songInfo";
import { DifficultyStars } from "components/difficultyStars";
import { updateExpendedRecords } from "store/songsSlice";
import { useDispatch, useSelector } from "react-redux";
import { expendedRecordsSelector } from "store/selectors";
import classNames from "classnames";
import { CollapseButton } from "./collapseButton";
import { MediaLink } from "./mediaLink";

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

  const trClass = classNames({
    "collapse show": expendedRecords.includes(collapseId),
    collapse: !expendedRecords.includes(collapseId),
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
        <td style={{ width: 230 }}>{song.artist}</td>
        <td style={{ width: 230 }}>{song.title}</td>
        <td style={{ width: 100 }}>
          <DifficultyStars difficulty={song.difficulty} />
        </td>
        <td style={{ width: 40 }}>
          <CollapseButton collapseId={collapseId} letRotate={letRotate} />
        </td>
      </tr>
      <tr className={trClass} id={collapseId}>
        <td></td>
        <td colSpan={3}>
          <div className="d-flex justify-content-between">
            <MediaLink link={song.notes} linkLabel="notes" />
            <MediaLink link={song.tabs} linkLabel="tabs" />
            <MediaLink link={song.video} linkLabel="video" />
          </div>
        </td>
      </tr>
    </>
  );
}
