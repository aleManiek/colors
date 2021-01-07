import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "firebase/firestore";
import { useFirebaseApp } from "reactfire";
import { useSelector } from "react-redux";
import { selectIsEnd } from "./boardSlice";
import { selectScore } from "../score/scoreSlice";

export default function EndGame() {
  const isEnd = useSelector(selectIsEnd);
  const score = useSelector(selectScore);
  const [name, setName] = useState("");
  const [success, setSuccess] = useState(false);
  const firebase = useFirebaseApp();
  const firestore = firebase.firestore();

  const sendScore = () => {
    if (name.length > 1) {
      firestore
        .collection("scores")
        .add({
          name: name,
          score: score,
        })
        .then((e) => setSuccess(true))
        .catch((err) => console.log("err: " + err));
    }
  };

  return (
    isEnd && (
      <StyledBackgrond>
        <Border>
          {success ? (
            <Container>
              Success! <br />
              check your position in ranking{" "}
              <Link style={{ color: "white" }} to="/scores">
                Here
              </Link>
            </Container>
          ) : (
            <Container>
              Your Score is {score} <br />
              If you want to save your score, provide your name below and click save <br />
              <br />
              <FormInput onChange={(e) => setName(e.target.value)} />
              <StyledButton onClick={sendScore}>Send</StyledButton>
              <br />
              <br />
              Or Start{" "}
              <Link style={{ color: "white" }} to="/settings">
                {" "}
                New Game
              </Link>
            </Container>
          )}
        </Border>
      </StyledBackgrond>
    )
  );
}

const StyledButton = styled.button`
  height: 3em;
  width: 100px;
  color: #fff;
  font-size: 1em;
  text-align: center;
  background-color: transparent;
  border: 3px solid #fff;
  border-radius: 6px;
`;

const FormInput = styled.input`
  height: 3em;
  width: 200px;
  color: #fff;
  font-size: 1em;
  text-align: center;
  background-color: transparent;
  border: 3px solid #fff;
  border-radius: 6px;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type="number"] {
    -moz-appearance: textfield;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  color: white;
  text-align: center;
  padding: 2em;
`;

const StyledBackgrond = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.7);
`;

const Border = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  background-image: linear-gradient(115deg, #4fcf70, #fad648, #a767e5, #12bcfe, #44ce7b);
  border-radius: 6px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
