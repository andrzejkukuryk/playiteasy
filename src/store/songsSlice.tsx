import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { SongInfo } from "models/songInfo";

interface SongsState {
  allSongs: SongInfo[];
  filterDifficulty: number[];
  searchQuery: string;
  sortType: SortType;
  expendedRecords: string[];
  status: ApiStatus;
}

export type SortType =
  | "sortArtistAZ"
  | "sortArtistZA"
  | "sortTitleAZ"
  | "sortTitleZA"
  | "sortDifficulty15"
  | "sortDifficulty51";

type ApiStatus = "idle" | "loading" | "completed" | "failed";

const initialState: SongsState = {
  allSongs: [],
  filterDifficulty: [1, 2, 3, 4, 5],
  searchQuery: "",
  sortType: "sortArtistAZ",
  expendedRecords: [],
  status: "idle",
};

export const songsSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {
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
    clearExpendedRecords: (state) => {
      state.expendedRecords = [];
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchSongs.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchSongs.fulfilled, (state, action) => {
        state.allSongs = action.payload;
        state.status = "completed";
      })
      .addCase(fetchSongs.rejected, (state, action) => {
        state.status = "failed";
      });
  },
});

export const fetchSongs = createAsyncThunk("songs/fetchSongs", async () => {
  const endpoint =
    "https://play-it-easy-default-rtdb.europe-west1.firebasedatabase.app/songs.json";
  const jsonResponse = await fetch(endpoint, { method: "GET" });
  const response = await jsonResponse.json();
  return response;
});

// Action creators are generated for each case reducer function
export const {
  updateSearchQuery,
  updateSortType,
  addDifficulty,
  updateExpendedRecords,
  clearExpendedRecords,
} = songsSlice.actions;

export default songsSlice.reducer;
