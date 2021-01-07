import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "firebase/firestore";
import { useFirebaseApp } from "reactfire";

export default function Scores() {
  const firebase = useFirebaseApp();
  const [scores, setScores] = useState([]);

  useEffect(() => {
    const getCollection = async () => {
      const db = firebase.firestore();
      const scoresRef = db.collection("scores");
      const scores = await scoresRef.get();
      console.log(scores);
      setScores(scores.docs.map((doc) => doc.data()));
    };
    getCollection();
  }, [firebase]);

  return (
    <Border>
      <Container>
        {scores.map((el) => (
          <Position>
            <Name>{el.name}</Name>
            <Score>{el.score}</Score>
          </Position>
        ))}
      </Container>
    </Border>
  );
}

const Name = styled.div`
  font-size: 2em;
  width: 50%;
`;

const Score = styled.div`
  font-size: 2em;
  width: 50%;
`;

const Position = styled.div`
  display: flex;
  width: 100%;
  border: 2px solid white;
  margin: 1em 0;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  color: white;
  text-align: center;
  padding: 2em;
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
