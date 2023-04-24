import React from "react";
import { Table } from "react-bootstrap";
import { ListItem } from "./listItem";
import { RootState } from "../../store/store";
// import { songs } from "../../dummyData/songs";
import { useSelector } from "react-redux";

export function SheetList() {
  const songs = useSelector((state: RootState) => state.songs);
  const createList = () => {
    return songs.map((song, index) => (
      <ListItem number={index + 1} song={song} key={`song${index}`} />
    ));
  };

  return (
    <Table striped bordered>
      <thead>
        <tr>
          <th>#</th>
          <th>Artist</th>
          <th>Title</th>
          <th>Difficulty</th>
        </tr>
      </thead>
      <tbody>{createList()}</tbody>
    </Table>
  );
}
