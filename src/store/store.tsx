import { configureStore } from "@reduxjs/toolkit";
import songsReducer from "./songsSlice";
import controlsReducer from "./controlsSlice";

export const store = configureStore({
  reducer: {
    songs: songsReducer,
    controls: controlsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
