import React from "react";
import styled from "styled-components";
import Game from "./components/Game/Game";
import StarterComponent from "./components/StarterComponent/StarterComponent";
import { useStart } from "./zustand/useStartGame";

const Contianer = styled.main`
  min-height: 100vh;
  height: 100%;

  width: 100vw;
`;

const App: React.FC = () => {
  const conditions = useStart((state) => state.condition);

  return <Contianer>{conditions ? <Game /> : <StarterComponent />}</Contianer>;
};
export default App;
