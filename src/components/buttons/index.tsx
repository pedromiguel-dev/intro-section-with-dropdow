//@ts-ignore
import styled from "styled-components";

interface ButtonProps {
  isOutlined?: boolean;
  isPrimary?: boolean;
}

const Button = styled.button<ButtonProps>`
  transition: all 0.2s ease-in-out;
  --border-color: var(--medium-gray);
  --background-color: var(--almost-Black);
  --color: var(--medium-gray);

  --btn-pri: white;
  &:hover {
    --background-color: var(--almost-White);
    --border-color: var(--almost-Black);
    --color: var(--almost-Black);
    --btn-pri: var(--almost-Black);
  }
  text-align: center;
  background-color: transparent;
  border-radius: 14px;
  border: ${(props: ButtonProps) =>
    props.isOutlined ? "2px solid var(--border-color)" : "none"};

  color: ${(props: ButtonProps) =>
    props.isPrimary ? "var(--btn-pri)" : "var(--color) !important"};
  background-color: ${(props: ButtonProps) =>
    props.isPrimary ? "var(--background-color)" : "transparent"};

  cursor: pointer;
  outline: none;

  font-size: 0.8em;
  font-weight: bold;
  min-width: 100px;
  min-height: 40px;
  padding: 0.8em 1em;
`;

export default Button;
