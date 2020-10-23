import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Button({ text, href }) {
  return (
    <Border>
      <StyledSpan to={href}>{text}</StyledSpan>
    </Border>
  );
}

const Border = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  background-image: linear-gradient(115deg, #4fcf70, #fad648, #a767e5, #12bcfe, #44ce7b);
  border-radius: 6px;

  &:hover {
    animation: slide 0.25s linear infinite;
  }

  @keyframes slide {
    0%,
    to {
      background-image: linear-gradient(115deg, #4fcf70, #fad648, #a767e5, #12bcfe);
    }
    25% {
      background-image: linear-gradient(115deg, #fad648, #a767e5, #12bcfe, #4fcf70);
    }
    50% {
      background-image: linear-gradient(115deg, #a767e5, #12bcfe, #4fcf70, #fad648);
    }
    75% {
      background-image: linear-gradient(115deg, #12bcfe, #4fcf70, #fad648, #a767e5);
    }
  }
`;

const StyledSpan = styled(Link)`
  display: block;
  text-align: center;
  font-weight: bold;
  font-size: 1.2em;
  text-decoration: none;
  letter-spacing: 2px;
  color: #fff;
  padding: 2rem;
  width: 100%;
  background-color: #000;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
