import { createSlice } from "@reduxjs/toolkit";

export const scoreSlice = createSlice({
  name: "score",
  initialState: 0,
  reducers: {
    addPoints: (state, action) => (state += action.payload),
  },
});

export default scoreSlice.reducer;

export const { addPoints } = scoreSlice.actions;

export const selectScore = (state) => state.score;
