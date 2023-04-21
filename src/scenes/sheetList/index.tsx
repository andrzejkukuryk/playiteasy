import React from "react";
import { Table } from "react-bootstrap";
import { ListItem } from "./listItem";

export function SheetList() {
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
      <tbody>
        <ListItem
          number={1}
          artist="Eric Clapton"
          title="Tears In Heaven"
          difficulty={1}
        />
        <ListItem
          number={2}
          artist="The Beatles"
          title="Let It Be"
          difficulty={1}
        />
        <ListItem
          number={3}
          artist="Guns N' Roses"
          title="November Rain"
          difficulty={5}
        />
        <ListItem
          number={4}
          artist="Bon Jovi"
          title="Bed Of Roses"
          difficulty={4}
        />
      </tbody>
    </Table>
  );
}
