import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface ControlsState {
  activePage: number;
  numberOfPages: number;
}

const initialState: ControlsState = {
  activePage: 1,
  numberOfPages: 1,
};

export const controlsSlice = createSlice({
  name: "controls",
  initialState: initialState,
  reducers: {
    updateActivePage: (state, action: PayloadAction<number>) => {
      state.activePage = action.payload;
    },
    updateNumberOfPages: (state, action: PayloadAction<number>) => {
      state.numberOfPages = action.payload;
    },
  },
});

export const { updateActivePage, updateNumberOfPages } = controlsSlice.actions;

export default controlsSlice.reducer;
