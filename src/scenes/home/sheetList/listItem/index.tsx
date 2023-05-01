import React from "react";
import { SongInfo } from "../../../../models/songInfo";
import { DifficultyStars } from "../../../../components/difficultyStars";
interface ListItemProps {
  number: number;
  song: SongInfo;
}
export function ListItem({ number, song }: ListItemProps) {
  return (
    <>
      <tr
        data-bs-toggle="collapse"
        data-bs-target={`#collapseLinks${number}`}
        aria-controls={`collapseLinks${number}`}
        itemType="button"
      >
        <td style={{ width: 40 }}>{number}</td>
        <td style={{ width: 300 }}>{song.artist}</td>
        <td style={{ width: 300 }}>{song.title}</td>
        <td style={{ width: 120 }}>
          <DifficultyStars difficulty={song.difficulty} />
        </td>
      </tr>
      <tr className="collapse" id={`collapseLinks${number}`}>
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
