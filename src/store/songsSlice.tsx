import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { SongInfo } from "../models/songInfo";
import { songs } from "../dummyData/songs";

interface SongsState {
  allSongs: SongInfo[];
  currentSongs: SongInfo[];
}

const initialState: SongsState = {
  allSongs: songs,
  currentSongs: [],
};

export const songsSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {
    loadSongs: (state, action: PayloadAction<SongInfo[]>) => {
      state.allSongs = action.payload;
      state.currentSongs = action.payload;
    },
    search: (state, action: PayloadAction<string>) => {
      state.currentSongs = state.allSongs.filter(
        (song) =>
          song.artist.toLowerCase().includes(action.payload.toLowerCase()) ||
          song.title.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { loadSongs, search } = songsSlice.actions;

export default songsSlice.reducer;
