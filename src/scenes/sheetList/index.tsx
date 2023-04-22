import React from "react";
import { Table } from "react-bootstrap";
import { ListItem } from "./listItem";
import { songs } from "../../dummyData/songs";

export function SheetList() {
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
