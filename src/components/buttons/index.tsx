//@ts-ignore
import styled from "styled-components";

interface ButtonProps {
  isOutlined?: boolean;
  isPrimary?: boolean;
}

const Button = styled.button<ButtonProps>`
  --border-color: var(--medium-gray);
  --color: var(--medium-gray);
  &:hover {
    --border-color: var(--almost-Black);
    --color: var(--almost-Black);
  }
  text-align: center;
  background-color: transparent;
  border-radius: 10px;
  border: ${(props: ButtonProps) =>
    props.isOutlined ? "2px solid var(--border-color)" : "none"};

  color: ${(props: ButtonProps) =>
    props.isPrimary ? "white" : "var(--color)"};
  background-color: ${(props: ButtonProps) =>
    props.isPrimary ? "var(--almost-Black)" : "#fff"};

  cursor: pointer;
  outline: none;

  font-size: 0.8em;
  font-weight: bold;
  width: 100px;
  height: 40px;
`;

export default Button;
