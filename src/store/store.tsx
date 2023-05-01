import { configureStore } from "@reduxjs/toolkit";
import songsReducer from "./songsSlice";
import filtersReducer from "./filtersSlice";

export const store = configureStore({
  reducer: {
    songs: songsReducer,
    filters: filtersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
