import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Board from "../features/board/Board";
import Score from "../features/score/Score";
import EndGame from "../features/board/EndGame";

export default function Game() {
  return (
    <div>
      <Score />
      <Board />
      <StyledDiv>
        <BackButton to="/settings">Back</BackButton>
        <EndGame />
      </StyledDiv>
    </div>
  );
}

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BackButton = styled(Link)`
  font-size: 2em;
  color: #fff;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
