import React from "react";
import styled from "styled-components";
import Button from "../components/Button";

export default function Welcome() {
  return (
    <Container>
      <Text>
        Welcome To <Colors>Colors</Colors> Game
      </Text>
      <Button text="New Game" href="/settings" />
    </Container>
  );
}

const Text = styled.h1`
  color: #fff;
  margin: 2rem;
`;

const Colors = styled.span`
  background: linear-gradient(115deg, #4fcf70, #fad648, #a767e5, #12bcfe, #44ce7b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
