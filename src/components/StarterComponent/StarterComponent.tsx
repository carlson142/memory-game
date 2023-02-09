import React from "react";
import styled from "styled-components";
import SelectionComponent from "./SelectionComponent/SelectionComponent";

const Contianer = styled.div`
  min-height: 100vh;
  height: 100%;

  width: 100vw;
  background-color: var(--color-dark-blue);

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
`;

const Heading = styled.h1`
  font-size: 5rem;
  color: white;

  margin-bottom: 5rem;
`;

type StarterComponentProps = {};

const StarterComponent: React.FC<StarterComponentProps> = () => {
  return (
    <Contianer>
      <Heading>memory</Heading>
      <SelectionComponent />
    </Contianer>
  );
};
export default StarterComponent;
