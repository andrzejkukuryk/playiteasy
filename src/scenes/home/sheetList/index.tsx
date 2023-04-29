import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
import { ListItem } from "./listItem";
import { RootState } from "../../../store/store";
import { useSelector, useDispatch } from "react-redux";
import { loadSongs } from "../../../store/songsSlice";
import { songs as dummySongs } from "../../../dummyData/songs";

export function SheetList() {
  const songs = useSelector((state: RootState) => state.songs.currentSongs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadSongs(dummySongs));
  }, []);

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
      {songs.length === 0 && (
        <tr>
          <td></td>
          <td colSpan={3}>Nothing found here</td>
        </tr>
      )}
    </Table>
  );
}
