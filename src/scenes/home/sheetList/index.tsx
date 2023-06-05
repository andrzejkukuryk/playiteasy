import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
import { ListItem } from "./listItem";
import { useSelector, useDispatch } from "react-redux";
import { SortType, updateSortType, fetchSongs } from "store/songsSlice";
import {
  filteredSongsSelector,
  sortTypeSelector,
  statusSelector,
} from "store/selectors";
//uncomment when new songs added
// import { uploadToFirebase } from "dummyData/songs";
import { ReactComponent as BiSortAZ } from "assets/bi-sortAZ.svg";
import { ReactComponent as BiSortZA } from "assets/bi-sortZA.svg";
import { ReactComponent as BiSort15 } from "assets/bi-sort15.svg";
import { ReactComponent as BiSort51 } from "assets/bi-sort51.svg";
import { SortButton } from "./sortButton";

import { AppDispatch } from "store/store";
import { SortDoubleButton } from "./sortDoubleButton";

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

  const handleClick = (sortType: SortType) => {
    dispatch(updateSortType(sortType));
  };

  return (
    <Table striped bordered>
      <thead>
        <tr>
          {/* <th>#</th> */}
          <th>
            <SortDoubleButton />
            Artist
            {/* <SortButton
              activeSortType={activeSortType}
              sortType="sortArtistAZ"
              handleClick={handleClick}
            >
              <BiSortAZ />
            </SortButton>
            <SortButton
              activeSortType={activeSortType}
              sortType="sortArtistZA"
              handleClick={handleClick}
            >
              <BiSortZA />
            </SortButton> */}
          </th>
          <th>
            <SortDoubleButton />
            Title
            {/* <SortButton
              activeSortType={activeSortType}
              sortType="sortTitleAZ"
              handleClick={handleClick}
            >
              <BiSortAZ />
            </SortButton>
            <SortButton
              activeSortType={activeSortType}
              sortType="sortTitleZA"
              handleClick={handleClick}
            >
              <BiSortZA />
            </SortButton> */}
          </th>
          <th>
            <SortDoubleButton />
            Difficulty
            {/* <SortButton
              activeSortType={activeSortType}
              sortType="sortDifficulty15"
              handleClick={handleClick}
            >
              <BiSort15 />
            </SortButton>
            <SortButton
              activeSortType={activeSortType}
              sortType="sortDifficulty51"
              handleClick={handleClick}
            >
              <BiSort51 />
            </SortButton> */}
          </th>
        </tr>
      </thead>
      <tbody>{createList()}</tbody>
      {songs.length === 0 && (
        <tr>
          {/* <td></td> */}
          <td colSpan={3}>Nothing found here</td>
        </tr>
      )}
    </Table>
  );
}
