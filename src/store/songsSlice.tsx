import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { SongInfo } from "../models/songInfo";
import { songs } from "../dummyData/songs";

const initialState: SongInfo[] = songs;

export const songsSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {
    loadSongs: (state, action: PayloadAction<SongInfo[]>) => {
      state = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { loadSongs } = songsSlice.actions;

export default songsSlice.reducer;
