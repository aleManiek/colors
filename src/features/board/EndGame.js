import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectIsEnd } from "./boardSlice";

export default function EndGame() {
  const isEnd = useSelector(selectIsEnd);

  return <StyledSpan>{isEnd && "GameOver"}</StyledSpan>;
}

const StyledSpan = styled.span`
  font-size: 2em;
  color: #fff;
`;
