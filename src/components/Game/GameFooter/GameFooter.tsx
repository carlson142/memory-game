import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 40rem; // ?
  align-self: center;

  display: flex;
`;

const Block = styled.div`
  padding: 2rem;
  border-radius: 0.5rem;

  background-color: var(--color-ll-blue);

  display: flex;
  justify-content: space-between;
`;

const BlockText = styled.h4`
  font-size: 2rem;
  color: var(--color-hover-blue);
`;

type GameFooterProps = {};

const GameFooter: React.FC<GameFooterProps> = () => {
  return (
    <Container>
      <Block>
        <BlockText>Time</BlockText>
      </Block>

      <Block>
        <BlockText>Moves</BlockText>
      </Block>
    </Container>
  );
};
export default GameFooter;
