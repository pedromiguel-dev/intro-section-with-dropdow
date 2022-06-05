//@ts-ignore
import styled from "styled-components";
//@ts-ignore
import dropDown from "../../../../assets/icons/icon-arrow-down.svg";

interface NavButtonProps {
  hasDropdown?: boolean;
  isActive?: boolean;
  dropItens?: React.ReactNode[];
  children: React.ReactNode;
}

const Buttons = styled.button<NavButtonProps>`
  position: relative;
  background-color: transparent;
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

  &:after {
    content: url(${dropDown});
    display: ${(props: NavButtonProps) =>
      props.hasDropdown ? `block` : `none`};
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    transition: transform 0.2s ease-in-out;
  }
`;
const Dropdown = styled.ul`
  position: absolute;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 5px;
  padding: 5px 0;
  margin: 10px 0 0 0;
  min-width: 100px;
  min-height: 100px;

  list-style: none;
  background-color: var(--almost-white);
  border-radius: 10px;
`;
const NavButtons = (props: NavButtonProps) => {
  console.log(props);

  return (
    <Buttons>
      {props.children}
      {props.hasDropdown && props.isActive && (
        <Dropdown>{props.dropItens}</Dropdown>
      )}
    </Buttons>
  );
};

export default NavButtons;