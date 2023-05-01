import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { SongInfo } from "../models/songInfo";
import { songs } from "../dummyData/songs";


interface SongsState {
  allSongs: SongInfo[];
  currentSongs: SongInfo[];
  filterDifficulty: number[];
}

const initialState: SongsState = {
  allSongs: songs,
  currentSongs: [],
  filterDifficulty: [1, 2, 3, 4, 5],
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
    sortArtistAZ: (state) => {
      state.currentSongs = state.currentSongs.sort((a, b) => {
        const artistA = a.artist.toLowerCase();
        const artistB = b.artist.toLowerCase();
        if (artistA < artistB) {
          return -1;
        }
        if (artistA > artistB) {
          return 1;
        }
        return 0;
      });
    },
    sortArtistZA: (state) => {
      state.currentSongs = state.currentSongs.sort((a, b) => {
        const artistA = a.artist.toLowerCase();
        const artistB = b.artist.toLowerCase();
        if (artistA < artistB) {
          return 1;
        }
        if (artistA > artistB) {
          return -1;
        }
        return 0;
      });
    },
    sortTitleAZ: (state) => {
      state.currentSongs = state.currentSongs.sort((a, b) => {
        const titleA = a.title.toLowerCase();
        const titleB = b.title.toLowerCase();
        if (titleA < titleB) {
          return -1;
        }
        if (titleA > titleB) {
          return 1;
        }
        return 0;
      });
    },
    sortTitleZA: (state) => {
      state.currentSongs = state.currentSongs.sort((a, b) => {
        const titleA = a.title.toLowerCase();
        const titleB = b.title.toLowerCase();
        if (titleA < titleB) {
          return 1;
        }
        if (titleA > titleB) {
          return -1;
        }
        return 0;
      });
    },
    sortDifficulty15: (state) => {
      state.currentSongs = state.currentSongs.sort((a, b) => {
        const songA = a.difficulty;
        const songB = b.difficulty;
        if (songA < songB) {
          return -1;
        }
        if (songA > songB) {
          return 1;
        }
        return 0;
      });
    },
    sortDifficulty51: (state) => {
      state.currentSongs = state.currentSongs.sort((a, b) => {
        const songA = a.difficulty;
        const songB = b.difficulty;
        if (songA < songB) {
          return 1;
        }
        if (songA > songB) {
          return -1;
        }
        return 0;
      });
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
    filterByDifficulty: (state) => {
      state.currentSongs = state.allSongs.filter((song) =>
        state.filterDifficulty.includes(song.difficulty)
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  loadSongs,
  search,
  sortArtistAZ,
  sortArtistZA,
  sortTitleAZ,
  sortTitleZA,
  sortDifficulty15,
  sortDifficulty51,
  addDifficulty,
  filterByDifficulty,
} = songsSlice.actions;

export default songsSlice.reducer;
