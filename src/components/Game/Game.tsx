import React from "react";
import styled from "styled-components";
import { useStart } from "../../zustand/useStartGame";
import GameFooter from "./GameFooter/GameFooter";
import GameGrid from "./GameGrid/GameGrid";
import GameHeader from "./GameHeader/GameHeader";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
`;

type GameProps = {};

const Game: React.FC<GameProps> = () => {
  const conditions = useStart((state) => state.condition);

  return (
    <Container>
      <GameHeader />
      <GameGrid />
      <GameFooter />
    </Container>
  );
};
export default Game;
