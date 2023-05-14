import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { SongInfo } from "../models/songInfo";
import { songs } from "../dummyData/songs";


interface SongsState {
  allSongs: SongInfo[];
  filterDifficulty: number[];
  searchQuery: string;
  sortType: SortType;
  expendedRecords: string[];
}

export type SortType =
  | "sortArtistAZ"
  | "sortArtistZA"
  | "sortTitleAZ"
  | "sortTitleZA"
  | "sortDifficulty15"
  | "sortDifficulty51";

const initialState: SongsState = {
  allSongs: songs,
  filterDifficulty: [1, 2, 3, 4, 5],
  searchQuery: "",
  sortType: "sortArtistAZ",
  expendedRecords: [],
};

export const songsSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {
    loadSongs: (state, action: PayloadAction<SongInfo[]>) => {
      state.allSongs = action.payload;
    },
    updateSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    updateSortType: (state, action: PayloadAction<SortType>) => {
      state.sortType = action.payload;
    },
    addDifficulty: (state, action: PayloadAction<number>) => {
      if (state.filterDifficulty.includes(action.payload)) {
        state.filterDifficulty = state.filterDifficulty.filter(
          (diff) => diff !== action.payload
        );
      } else {
        state.filterDifficulty.push(action.payload);
      }
      state.filterDifficulty.sort();
      return state;
    },
    updateExpendedRecords: (state, action: PayloadAction<string>) => {
      if (state.expendedRecords.includes(action.payload)) {
        state.expendedRecords = state.expendedRecords.filter(
          (record) => record !== action.payload
        );
      } else {
        state.expendedRecords.push(action.payload);
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  loadSongs,
  updateSearchQuery,
  updateSortType,
  addDifficulty,
  updateExpendedRecords,
} = songsSlice.actions;

export default songsSlice.reducer;
