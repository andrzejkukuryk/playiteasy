import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface ControlsState {
  activePage: number;
}

const initialState: ControlsState = {
  activePage: 1,
};

export const controlsSlice = createSlice({
  name: "controls",
  initialState: initialState,
  reducers: {
    updateActivePage: (state, action: PayloadAction<number>) => {
      state.activePage = action.payload;
    },
  },
});

export const { updateActivePage } = controlsSlice.actions;

export default controlsSlice.reducer;
