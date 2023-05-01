import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: number[] = [1, 2, 3, 4, 5];

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    addDifficulty: (state, action: PayloadAction<number>) => {
      if (state.includes(action.payload)) {
        state = state.filter((diff) => diff !== action.payload);
      } else {
        state.push(action.payload);
      }
      return state;
    },
  },
});

export const { addDifficulty } = filtersSlice.actions;
export default filtersSlice.reducer;
