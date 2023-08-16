import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
import { ListItem } from "./listItem/listItem";
import { useSelector, useDispatch } from "react-redux";
import { fetchSongs } from "store/songsSlice";
import { updateNumberOfPages } from "store/controlsSlice";
import {
  filteredSongsSelector,
  sortTypeSelector,
  statusSelector,
  activePageSelector,
  numberOfPagesSelector,
} from "store/selectors";
//uncomment when new songs added
// import { uploadToFirebase } from "dummyData/songs";

import { AppDispatch } from "store/store";
import { TableHead } from "./tableHead/tableHead";
import { TablePagination } from "./tablePagination/tablePagination";
import "./sheetList.css";
import { useUrlParams } from "hooks/useUrlParams";

export function SheetList() {
  const activePage = useSelector(activePageSelector);
  const numberOfPages = useSelector(numberOfPagesSelector);
  const songs = useSelector(filteredSongsSelector);
  const status = useSelector(statusSelector);
  const activeSortType = useSelector(sortTypeSelector);
  const dispatch = useDispatch<AppDispatch>();

  useUrlParams();

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

  const indexOfLastItem = activePage * 10;
  const indexOfFirstItem = indexOfLastItem - 10;

  const displayPage = () => {
    return createList().slice(indexOfFirstItem, indexOfLastItem);
  };

  return (
    <div className="p-0 p-sm-2">
      <Table className="tableLayout">
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
            <th className="p-0">
              <div className="dummyPlug bg-black"></div>
            </th>
          </tr>
        </thead>
        <tbody>{displayPage()}</tbody>
        {songs.length === 0 && (
          <tr>
            <td colSpan={3}>Nothing found here</td>
          </tr>
        )}
      </Table>
      {numberOfPages > 1 && <TablePagination />}
    </div>
  );
}
