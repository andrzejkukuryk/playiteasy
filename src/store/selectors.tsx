import { SongInfo } from "models/songInfo";
import { SortType } from "./songsSlice";
import { RootState } from "./store";

export const filteredSongsSelector = (state: RootState): SongInfo[] => {
  const searchQuery = state.songs.searchQuery;
  const sortType = state.songs.sortType;
  const difficulty = state.songs.filterDifficulty;
  const allSongs = state.songs.allSongs;

  const filteredUnsorted = allSongs
    .filter((song) => difficulty.includes(song.difficulty))
    .filter(
      (song) =>
        song.artist.toLowerCase().includes(searchQuery.toLowerCase()) ||
        song.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const filteredSorted = (sortType: SortType) => {
    switch (sortType) {
      case "sortArtistAZ": {
        return filteredUnsorted.sort((a, b) => {
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
      }
      case "sortArtistZA": {
        return filteredUnsorted.sort((a, b) => {
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
      }
      case "sortTitleAZ": {
        return filteredUnsorted.sort((a, b) => {
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
      }
      case "sortTitleZA": {
        return filteredUnsorted.sort((a, b) => {
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
      }
      case "sortDifficulty15": {
        return filteredUnsorted.sort((a, b) => {
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
      }
      case "sortDifficulty51": {
        return filteredUnsorted.sort((a, b) => {
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
      }
      default: {
        return filteredUnsorted;
      }
    }
  };
  return filteredSorted(sortType);
};

export const difficultyFiltersSelector = (state: RootState) => {
  return state.songs.filterDifficulty;
};

export const expendedRecordsSelector = (state: RootState) => {
  return state.songs.expendedRecords;
};

export const sortTypeSelector = (state: RootState) => {
  return state.songs.sortType;
};

export const statusSelector = (state: RootState) => {
  return state.songs.status;
};

export const searchQuerySelector = (state: RootState) => {
  return state.songs.searchQuery;
};

export const activePageSelector = (state: RootState) => {
  return state.controls.activePage;
};

export const numberOfPagesSelector = (state: RootState) => {
  return Math.ceil(filteredSongsSelector(state).length / 10);
};