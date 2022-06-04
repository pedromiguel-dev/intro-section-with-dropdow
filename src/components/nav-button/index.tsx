//@ts-ignore
import styled from "styled-components";

interface NavButtonProps {
  hasDropdown?: boolean;
}

const NavButtons = styled.button<NavButtonProps>`
  background-color: ${(props: NavButtonProps) =>
    props.hasDropdown ? "var(--almost-Black)" : "transparent"};

  border: none;
  cursor: pointer;
  outline: none;
  padding: 1em;
  font-size: 0.8em;
  & > a {
    color: var(--medium-gray);
    cursor: pointer;
    text-decoration: none;

    &:hover {
      color: var(--almost-black);
    }
  }

  font-size: var(--font-base-paragraph);
  font-weight: bold;
`;

export default NavButtons;
