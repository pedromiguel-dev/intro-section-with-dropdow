//@ts-ignore
import styled from "styled-components";
//@ts-ignore
import dropDown from "../../../../assets/icons/icon-arrow-down.svg";

interface itemDropItensInterface {
  name?: string;
  icon?: string;
  link?: string;
}
interface NavButtonProps {
  hasDropdown?: boolean;
  isActive?: boolean;
  dropItens?: itemDropItensInterface[];
  children: React.ReactNode;
  onClick?: () => void;
  id?: string;
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
  }
  &:hover > div.dropdown {
    display: flex !important;
  }
  &:hover > a {
    color: var(--almost-black);
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
const Dropdown = styled.div`
  display: none;
  position: absolute;
  right: 0;
  margin: 20px 0 0 0;
  background-color: var(--almost-white);
  border-radius: 10px;
  box-shadow: 0px 0px 35px rgba(0, 0, 0, 0.2);

  & ul {
    margin: 20px;
    min-width: 70px;
  }

  & ul > li {
    display: flex;
    gap: 8px;
    padding: 5px;
    font-size: 12px;
    color: var(--medium-gray);
    box-radius: 5px;
    cursor: pointer;
    &:hover {
      background-color: var(--light-gray);
    }
  }
`;
const NavButtons = (props: NavButtonProps) => {
  return (
    <Buttons hasDropdown={props.hasDropdown}>
      {props.children}
      {props.hasDropdown && (
        <Dropdown className="dropdown">
          <ul>
            {props.dropItens?.map((item) => (
              <li key={item.name}>
                {item.icon && <img src={item.icon} alt={item.name} />}
                {item.name}
              </li>
            ))}
          </ul>
        </Dropdown>
      )}
    </Buttons>
  );
};

export default NavButtons;
