import React from "react";
import styled from "styled-components";

type BProps = Pick<CustomButtonProps, "bType" | "font">;

const Button = styled.button<BProps>`
  cursor: pointer;

  padding: 1.5rem 3rem;

  border-radius: ${(props) => (props.font === "big" ? "2rem" : "4rem")};
  border: none;

  font-weight: 700;

  font-size: ${(props) => (props.font === "big" ? "3rem" : "2rem")};

  transition: all 0.2s ease-in;

  :not(:last-child) {
    margin-right: 2rem;
  }

  ${(props) =>
    props.bType === "primary" &&
    `
    background-color: var(--color-orange);
    color: white;

    :hover {
         background-color: rgb(252, 187, 84);
     }
  `}

  ${(props) =>
    props.bType === "secondary" &&
    `
    background-color: var(--color-ll-blue);
    color: var(--color-dark-blue);

    :hover {
         background-color: var(--color-light-blue);
         color: white;
     }
  `}
`;

type CustomButtonProps = {
  bType: "primary" | "secondary";
  text: string;
  font: "big" | "small";
  onClick: () => void;
};

const CustomButton: React.FC<CustomButtonProps> = ({
  bType,
  text,
  font,
  onClick,
}) => {
  return (
    <Button bType={bType} onClick={onClick} font={font}>
      {text}
    </Button>
  );
};
export default CustomButton;
