import React from "react";
import styled from "styled-components";
import { useStart } from "../../../zustand/useStartGame";
import CustomButton from "../../CustomButton/CustomButton";

const Container = styled.div`
  padding: 5rem 15rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  user-select: none;
`;

const Logo = styled.h1`
  font-size: 5rem;
  font-weight: 700;

  color: var(--color-dark-blue);
`;

const BtnContainer = styled.div``;

type GameHeaderProps = {};

const GameHeader: React.FC<GameHeaderProps> = () => {
  const setCondition = useStart((state) => state.setCondition);

  const handleNewGame = () => {
    setCondition(null);
  };

  return (
    <Container>
      <Logo>memory</Logo>

      <BtnContainer>
        <CustomButton
          bType="primary"
          text="Restart"
          font="small"
          onClick={() => {}}
        />
        <CustomButton
          bType="secondary"
          text="New Game"
          font="small"
          onClick={handleNewGame}
        />
      </BtnContainer>
    </Container>
  );
};
export default GameHeader;
