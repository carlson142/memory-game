import React, { useState } from "react";
import styled from "styled-components";
import { useStart } from "../../../zustand/useStartGame";
import CustomButton from "../../CustomButton/CustomButton";

const Container = styled.div`
  height: max-content;
  width: 60rem;

  border-radius: 1rem;
  background-color: white;

  display: flex;
  flex-direction: column;

  padding: 4rem;
`;

const Block = styled.div`
  display: flex;
  flex-direction: column;

  :not(:last-child) {
    margin-bottom: 3rem;
  }
`;

const BtnBlock = styled.div`
  display: flex;
  margin-top: 2rem;
`;

const Heading = styled.h3`
  font-size: 2rem;
  color: var(--color-light-blue);
`;

interface SelectionProps {
  index: number;
  value: number;
}
const Selection = styled.div<SelectionProps>`
  width: 100%;
  padding: 1.5rem;

  font-size: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 4rem;

  background-color: var(--color-light-blue);
  background-color: ${(props) =>
    props.index === props.value && "var(--color-dark-blue)"};

  color: white;
  cursor: pointer;
  user-select: none;

  transition: all 0.2s ease-in;

  :hover {
    transform: scale(1.02);
  }

  :not(:last-child) {
    margin-right: 2rem;
  }
`;

type SelectionComponentProps = {};

const SelectionComponent: React.FC<SelectionComponentProps> = () => {
  // Hooks
  const [themeS, setThemeS] = useState<number>(0);
  const [numOfPl, setNumOfPl] = useState<number>(0);
  const [gridSize, setGridSize] = useState<number>(0);

  const setCondition = useStart((state) => state.setCondition);

  // Selections
  const theme = ["Numbers", "Icons"];
  const numOfPlayers = [1, 2, 3, 4];
  const grid = ["4x4", "6x6"];

  // Handlers
  const handleStartGame = () => {
    setCondition({ theme: themeS, players: numOfPl, grid: gridSize });
  };

  return (
    <Container>
      {/* THEME */}
      <Block>
        <Heading>Select Theme</Heading>
        <BtnBlock>
          {theme.map((el, idx) => {
            return (
              <Selection
                key={idx}
                index={idx}
                value={themeS}
                onClick={() => setThemeS(idx)}
              >
                {el}
              </Selection>
            );
          })}
        </BtnBlock>
      </Block>

      {/* PLAYERS */}
      <Block>
        <Heading>Number of Players</Heading>
        <BtnBlock>
          {numOfPlayers.map((el, idx) => {
            return (
              <Selection
                key={idx}
                index={idx}
                value={numOfPl}
                onClick={() => setNumOfPl(idx)}
              >
                {el}
              </Selection>
            );
          })}
        </BtnBlock>
      </Block>

      {/* GRID */}
      <Block>
        <Heading>Grid Size</Heading>
        <BtnBlock>
          {grid.map((el, idx) => {
            return (
              <Selection
                key={idx}
                index={idx}
                value={gridSize}
                onClick={() => setGridSize(idx)}
              >
                {el}
              </Selection>
            );
          })}
        </BtnBlock>
      </Block>

      <CustomButton
        bType="primary"
        text="Start Game"
        font="big"
        onClick={handleStartGame}
      />
    </Container>
  );
};
export default SelectionComponent;
