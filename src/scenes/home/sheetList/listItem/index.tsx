import React from "react";
import { SongInfo } from "../../../../models/songInfo";
import { DifficultyStars } from "../../../../components/difficultyStars";
import { updateExpendedRecords } from "../../../../store/songsSlice";
import { useDispatch } from "react-redux";

interface ListItemProps {
  number: number;
  song: SongInfo;
}

export function ListItem({ number, song }: ListItemProps) {
  const dispatch = useDispatch();

  const handleClick = (id: string) => {
    dispatch(updateExpendedRecords(id));
  };

  const collapseId = `collapseLinks${song.artist.replace(
    /[^A-Za-z]/g,
    ""
  )}${song.title.replace(/[^A-Za-z]/g, "")}`;

  const collapseTarget = `#${collapseId}`;

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
        <td style={{ width: 40 }}>{number}</td>
        <td style={{ width: 300 }}>{song.artist}</td>
        <td style={{ width: 300 }}>{song.title}</td>
        <td style={{ width: 120 }}>
          <DifficultyStars difficulty={song.difficulty} />
        </td>
      </tr>
      <tr className="collapse show" id={collapseId}>
        <td colSpan={4}>
          <div className="d-flex justify-content-around">
            <p>{song.notes}</p>
            <p>{song.tabs}</p>
            <p>{song.video}</p>
          </div>
        </td>
      </tr>
    </>
  );
}
