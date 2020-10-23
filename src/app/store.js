import { configureStore } from "@reduxjs/toolkit";
import scoreReducer from "../features/score/scoreSlice";
import boardReducer from "../features/board/boardSlice";

export default configureStore({
  reducer: {
    score: scoreReducer,
    board: boardReducer,
  },
});
