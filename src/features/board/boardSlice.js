import { createSlice } from "@reduxjs/toolkit";
import { getBlocksToDestroy, generateRandomNumber, isPossibleMove } from "./boardUtils";
import { addPoints } from "../score/scoreSlice";

const possibleColors = [
  "black",
  "#b8c2cc",
  "#e3342f",
  "#f6993f",
  "#ffed4a",
  "#38c172",
  "#4dc0b5",
  "#3490dc",
  "#6574cd",
  "#9561e2",
  "#f66d9b",
  "#8c0cf3",
  "#78a346",
];

export const boardSlice = createSlice({
  name: "board",
  initialState: {
    possibleColors: possibleColors,
    colors: 0,
    height: 0,
    array: [],
    isEnd: false,
  },
  reducers: {
    setColorsAmount: (state, action) => {
      state.colors = action.payload;
    },
    createBoard: (state, action) => {
      const [x, y] = action.payload.split(",");
      const min = 1;
      const max = Number(state.colors);
      const board = [...Array(Number(x))].map(() => [...Array(Number(y))].map(() => generateRandomNumber(min, max)));
      state.height = y;
      state.array = board;
      state.isEnd = !isPossibleMove(board);
    },
    updateBoard: (state, action) => {
      action.payload.map(([x, y]) => (state.array[x][y] = 0));
      state.array = state.array.map((col) => col.filter((el) => el !== 0));
      state.array.map((col) => {
        const length = col.length;
        const difference = state.height - length;
        if (difference) {
          for (let i = 0; i < difference; i++) col.push(generateRandomNumber(1, Number(state.colors)));
        }
      });
      state.isEnd = !isPossibleMove(state.array);
    },
  },
});

export const { setColorsAmount, createBoard, updateBoard } = boardSlice.actions;

export const move = ({ x, y }) => (dispatch, getState) => {
  const { board } = getState();
  const blocks = getBlocksToDestroy(x, y, board.array);
  if (blocks) {
    dispatch(addPoints(blocks.length));
    dispatch(updateBoard(blocks));
  }
};

export const selectPossibleColors = (state) => state.board.possibleColors;

export const selectBoard = (state) => state.board.array;

export const selectIsEnd = (state) => state.board.isEnd;

export default boardSlice.reducer;
