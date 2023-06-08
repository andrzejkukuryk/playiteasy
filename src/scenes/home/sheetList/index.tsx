import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
import { ListItem } from "./listItem";
import { useSelector, useDispatch } from "react-redux";
import { fetchSongs } from "store/songsSlice";
import {
  filteredSongsSelector,
  sortTypeSelector,
  statusSelector,
} from "store/selectors";
//uncomment when new songs added
// import { uploadToFirebase } from "dummyData/songs";

import { AppDispatch } from "store/store";
import { TableHead } from "./tableHead";

export function SheetList() {
  const songs = useSelector(filteredSongsSelector);
  const status = useSelector(statusSelector);
  const activeSortType = useSelector(sortTypeSelector);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    //uncomment when new songs added
    // uploadToFirebase();
    if (status === "idle") {
      dispatch(fetchSongs());
    }
  }, []);

  const createList = () => {
    return songs.map((song, index) => (
      <ListItem number={index + 1} song={song} key={`song${index}`} />
    ));
  };

  return (
    <Table>
      <thead className="table border">
        <tr>
          <th className="p-0">
            <TableHead
              upperButton="sortArtistZA"
              lowerButton="sortArtistAZ"
              activeSortType={activeSortType}
              label="Artist"
            />
          </th>
          <th className="p-0">
            <TableHead
              upperButton="sortTitleZA"
              lowerButton="sortTitleAZ"
              activeSortType={activeSortType}
              label="Song"
            />
          </th>
          <th className="p-0">
            <TableHead
              upperButton="sortDifficulty51"
              lowerButton="sortDifficulty15"
              activeSortType={activeSortType}
              label="Level"
            />
          </th>
          <th className="p-0 bg-black"></th>
        </tr>
      </thead>
      <tbody>{createList()}</tbody>
      {songs.length === 0 && (
        <tr>
          <td colSpan={3}>Nothing found here</td>
        </tr>
      )}
    </Table>
  );
}
