import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Button from "../components/Button";

import { setColorsAmount, createBoard, selectPossibleColors } from "../features/board/boardSlice";

const options = [
  { value: 9, dimensions: [3, 3] },
  { value: 12, dimensions: [4, 3] },
  { value: 16, dimensions: [4, 4] },
  { value: 20, dimensions: [4, 5] },
  { value: 24, dimensions: [6, 4] },
  { value: 25, dimensions: [5, 5] },
];

export default function Settings() {
  const possibleColors = useSelector(selectPossibleColors);
  const dispatch = useDispatch();

  const handleColorsPick = (e) => {
    const value = e.target.value;
    const max = possibleColors.length - 1;
    if (value <= max) dispatch(setColorsAmount(e.target.value));
    else {
      e.target.value = max;
      dispatch(setColorsAmount(max));
      alert(`Colors amount can't be more than ${max}`);
    }
  };

  return (
    <Container>
      <FormPosition>
        <FormLabel>colors amount</FormLabel>
        <FormInput type="number" onChange={handleColorsPick} />
      </FormPosition>
      <FormPosition>
        <FormLabel>blocks amount</FormLabel>
        <FormSelect onChange={(e) => dispatch(createBoard(e.target.value))}>
          <FormOption>{""}</FormOption>
          {options.map((option) => (
            <FormOption value={option.dimensions} key={option.value}>
              {option.value}
            </FormOption>
          ))}
        </FormSelect>
      </FormPosition>
      <Button href="/game" text="GO" />
    </Container>
  );
}

const FormLabel = styled.label`
  padding: 0 1em;
`;

const FormInput = styled.input`
  height: 3em;
  width: 100px;
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

const FormSelect = styled.select`
  height: 3em;
  width: 3em;
  min-width: 3em;
  color: #fff;
  font-size: 1em;
  text-align-last: center;
  background-color: transparent;
  border: 3px solid #fff;
  border-radius: 6px;
  -webkit-appearance: none;
`;

const FormOption = styled.option`
  color: #fff;
  font-size: 1em;
  background: #333231;

  :first-of-type {
    display: none;
  }
`;

const FormPosition = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1em;
  color: #fff;
  font-size: 2em;
  text-transform: uppercase;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
