import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectBoard, move, selectPossibleColors } from "./boardSlice";
import styled from "styled-components";

export default function Board() {
  const dispatch = useDispatch();
  const colors = useSelector(selectPossibleColors);
  const board = useSelector(selectBoard);

  return board.length ? (
    <StyledBoard>
      {board.map((boardCols, x) => (
        <Col key={x}>
          {boardCols.map((boardRow, y) => (
            <Row key={y} onClick={() => dispatch(move({ x, y }))} color={colors[board[x][y]]} />
          ))}
        </Col>
      ))}
    </StyledBoard>
  ) : (
    <Redirect to="/" />
  );
}

const Row = styled.div`
  visibility: ${(props) => (props.color === "black" ? "hidden" : "visible")};
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.color};
  transition: visibility 1s;
`;

const Col = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column-reverse;
`;

const StyledBoard = styled.div`
  width: 60vw;
  height: 60vh;
  min-width: 320px;
  display: flex;
  flex-direction: row;
`;
