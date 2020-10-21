import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectBoard, move } from "./boardSlice";
import styled from "styled-components";

const colors = ["blue", "red", "green", "pink", "purple", "yellow"];
export default function Board() {
  const dispatch = useDispatch();
  const board = useSelector(selectBoard);

  return (
    <StyledBoard>
      {board.map((boardCols, x) => (
        <Col key={x}>
          {boardCols.map((boardRow, y) => (
            <Row key={y} onClick={() => dispatch(move({ x, y }))} color={board[x][y]}>
              {board[x][y]}
            </Row>
          ))}
        </Col>
      ))}
    </StyledBoard>
  );
}

const Row = styled.div`
  display: ${(props) => (props.color === 0 ? "none" : "flex")};
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  background-color: ${(props) => colors[props.color]};
`;

const Col = styled.div`
  width: 100px;
  height: 500px;
  display: flex;
  flex-direction: column-reverse;
  background-color: blue;
`;

const StyledBoard = styled.div`
  width: 500px;
  height: 500px;
  display: flex;
  flex-direction: row;
`;
