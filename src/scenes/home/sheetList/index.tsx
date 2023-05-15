import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
import { ListItem } from "./listItem";
import { useSelector, useDispatch } from "react-redux";
import { loadSongs, updateSortType } from "../../../store/songsSlice";
import {
  filteredSongsSelector,
  sortTypeSelector,
  // expendedRecordsSelector,
} from "../../../store/selectors";
import { songs as dummySongs } from "../../../dummyData/songs";
import { ReactComponent as BiSortAZ } from "../../../assets/bi-sortAZ.svg";
import { ReactComponent as BiSortZA } from "../../../assets/bi-sortZA.svg";
import { ReactComponent as BiSort15 } from "../../../assets/bi-sort15.svg";
import { ReactComponent as BiSort51 } from "../../../assets/bi-sort51.svg";
import "./style.css";
import classNames from "classnames";

export function SheetList() {
  const songs = useSelector(filteredSongsSelector);
  const sortType = useSelector(sortTypeSelector);
  // const expended = useSelector(expendedRecordsSelector);
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

  const buttonArtistAZClass = classNames({
    "btn btn-link p-0 activeSort": sortType === "sortArtistAZ",
    "btn btn-link p-0 inactiveSort": sortType !== "sortArtistAZ",
  });

  const buttonArtistZAClass = classNames({
    "btn btn-link p-0 activeSort": sortType === "sortArtistZA",
    "btn btn-link p-0 inactiveSort": sortType !== "sortArtistZA",
  });

  const buttonTitleAZClass = classNames({
    "btn btn-link p-0 activeSort": sortType === "sortTitleAZ",
    "btn btn-link p-0 inactiveSort": sortType !== "sortTitleAZ",
  });

  const buttonTitleZAClass = classNames({
    "btn btn-link p-0 activeSort": sortType === "sortTitleZA",
    "btn btn-link p-0 inactiveSort": sortType !== "sortTitleZA",
  });

  const buttonDifficulty15Class = classNames({
    "btn btn-link p-0 activeSort": sortType === "sortDifficulty15",
    "btn btn-link p-0 inactiveSort": sortType !== "sortDifficulty15",
  });

  const buttonDifficulty51Class = classNames({
    "btn btn-link p-0 activeSort": sortType === "sortDifficulty51",
    "btn btn-link p-0 inactiveSort": sortType !== "sortDifficulty51",
  });

  return (
    <Table striped bordered>
      <thead>
        <tr>
          <th>#</th>
          <th>
            Artist{" "}
            <button
              type="button"
              className={buttonArtistAZClass}
              onClick={handleSortArtistAZ}
            >
              <BiSortAZ />
            </button>{" "}
            <button
              type="button"
              className={buttonArtistZAClass}
              onClick={handleSortArtistZA}
            >
              <BiSortZA />
            </button>{" "}
          </th>
          <th>
            Title{" "}
            <button
              type="button"
              className={buttonTitleAZClass}
              onClick={handleSortTitleAZ}
            >
              <BiSortAZ />
            </button>{" "}
            <button
              type="button"
              className={buttonTitleZAClass}
              onClick={handleSortTitleZA}
            >
              <BiSortZA />
            </button>{" "}
          </th>
          <th>
            Difficulty
            <button
              type="button"
              className={buttonDifficulty15Class}
              onClick={handleSortDifficulty15}
            >
              <BiSort15 />
            </button>{" "}
            <button
              type="button"
              className={buttonDifficulty51Class}
              onClick={handleSortDifficulty51}
            >
              <BiSort51 />
            </button>
          </th>
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
