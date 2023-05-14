import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
import { ListItem } from "./listItem";
import { useSelector, useDispatch } from "react-redux";
import { loadSongs, updateSortType } from "../../../store/songsSlice";
import {
  filteredSongsSelector,
  expendedRecordsSelector,
} from "../../../store/selectors";
import { songs as dummySongs } from "../../../dummyData/songs";

export function SheetList() {
  const songs = useSelector(filteredSongsSelector);
  const expended = useSelector(expendedRecordsSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadSongs(dummySongs));
  }, []);

  const createList = () => {
    return songs.map((song, index) => (
      <ListItem number={index + 1} song={song} key={`song${index}`} />
    ));
  };

  const handleSortArtistAZ = () => {
    dispatch(updateSortType("sortArtistAZ"));
  };

  const handleSortArtistZA = () => {
    dispatch(updateSortType("sortArtistZA"));
  };

  const handleSortTitleAZ = () => {
    dispatch(updateSortType("sortTitleAZ"));
  };

  const handleSortTitleZA = () => {
    dispatch(updateSortType("sortTitleZA"));
  };

  const handleSortDifficulty15 = () => {
    dispatch(updateSortType("sortDifficulty15"));
  };

  const handleSortDifficulty51 = () => {
    dispatch(updateSortType("sortDifficulty51"));
  };
  console.log(expended, songs);

  return (
    <Table striped bordered>
      <thead>
        <tr>
          <th>#</th>
          <th onClick={handleSortArtistZA}>Artist</th>
          <th onClick={handleSortTitleZA}>Title</th>
          <th onClick={handleSortDifficulty51}>Difficulty</th>
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
