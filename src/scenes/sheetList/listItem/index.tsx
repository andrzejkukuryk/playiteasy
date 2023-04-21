import React from "react";
interface ListItemProps {
  number: number;
  artist: string;
  title: string;
  difficulty: number;
}
export function ListItem({ number, artist, title, difficulty }: ListItemProps) {
  return (
    <>
      <tr
        className="table table-hover"
        data-bs-toggle="collapse"
        data-bs-target={`#collapseLinks${number}`}
        aria-controls={`collapseLinks${number}`}
        itemType="button"
      >
        <td style={{ width: 40 }}>{number}</td>
        <td style={{ width: 300 }}>{artist}</td>
        <td style={{ width: 300 }}>{title}</td>
        <td style={{ width: 120 }}>{difficulty} stars</td>
      </tr>
      <tr className="collapse" id={`collapseLinks${number}`}>
        <td></td>
        <td>notes link</td>
        <td>tabs link</td>
        <td>YT link</td>
      </tr>
    </>
  );
}
