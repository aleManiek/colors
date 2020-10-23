import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectScore } from "./scoreSlice";

export default function Score() {
  const score = useSelector(selectScore);
  return <ScoreContainer>Score: {score}</ScoreContainer>;
}

const ScoreContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  padding: 0.5em 0;
  font-size: 2em;
  color: #fff;
`;
