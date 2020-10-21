import { createSlice } from "@reduxjs/toolkit";
import { getBlocksToDestroy, findEmptyBlocks } from "./boardUtils";

const initiialBoard = [
  [3, 5, 1, 1, 1],
  [3, 5, 5, 3, 1],
  [3, 5, 3, 3, 3],
  [3, 1, 1, 2, 4],
  [3, 3, 4, 4, 4],
];

export const boardSlice = createSlice({
  name: "board",
  initialState: initiialBoard,
  reducers: {
    destroyBlocks: (state, action) => {
      action.payload.map(([x, y]) => (state[x][y] = 0));
    },
    slideBlocks: (state) => state.map((col) => col.filter((el) => el !== 0)),
    generateNewBlocks: (state) => {
      state.map((col, i, arr) => {
        const length = col.length;
        const difference = 5 - length;
        if (difference) {
          for (let i = 0; i < difference; i++) col.push(Math.floor(Math.random() * (5 - 1) + 1));
        }
      });
    },
  },
});

export const { destroyBlocks, slideBlocks, generateNewBlocks } = boardSlice.actions;

export const move = ({ x, y }) => (dispatch, getState) => {
  const { board } = getState();
  const blocks = getBlocksToDestroy(x, y, board);
  if (blocks) {
    dispatch(destroyBlocks(blocks));
    dispatch(slideBlocks());
    dispatch(generateNewBlocks());
  }
};

export const selectBoard = (state) => state.board;

export default boardSlice.reducer;
