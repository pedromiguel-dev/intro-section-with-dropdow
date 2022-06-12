import React from "react";
//@ts-ignore
import iconCloseMenu from "../../../assets/icons/icon-close-menu.svg";
//@ts-ignore
import styled from "styled-components";
//@ts-ignore
import arowDown from "../../../assets/icons/icon-arrow-down.svg";

const Shadow = styled.div`
  transition: all 0.3s ease-in-out;
  --opacity: ${(props: State) => (props.isShowing ? "0.5" : "0")};
  pointer-events: none;
  position: fixed;
  inset: 0;
  z-index: 1;
  background-color: rgba(0, 0, 0, var(--opacity));

  @media (min-width: 768px) {
    --opacity: 0;
    visibility: hidden !important;
  }
`;
const Container = styled.div<State>`
  will-change: transform;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: clamp(230px, 50vw, 400px);
  height: 100vh;
  position: fixed;
  inset: 0 0 0 auto;
  background-color: var(--almost-white);
  padding: 0 1rem;
  transition: all 0.3s ease-in-out;

  transform: ${(props: State) =>
    props.isShowing
      ? "translateX(-0px)"
      : "translateX(clamp(240px, 50vw, 410px))"};

  @media (min-width: 768px) {
    transform: translateX(100%) !important;
  }
`;
const Menu = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
const Colapsable = styled.details<{ hasDropdown: boolean }>`
  width: 100%;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  padding: 0.5rem;

  & summary {
    margin: 10px 0;
    display: flex;
    position: relative;
    cursor: pointer;
  }
  & summary::after {
    display: ${(props: { hasDropdown: boolean }) =>
      props.hasDropdown ? "block" : "none"};
    content: url(${arowDown});
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    transition: transform 0.2s ease-in-out;
  }

  &[open] summary::after {
    transform: translateY(-50%) rotate(180deg);
  }
  & > ul {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    gap: 5px;

    list-style: none;
  }
`;

interface Props {
  isShowing: boolean;
  dropItens: dropItensInterface;
  onClick: () => void;
}
interface dropItensInterface {
  [key: string]: {
    name?: string;
    icon?: string;
    link?: string;
  }[];
}

interface State {
  isShowing: boolean;
}

const SideBar = (props: Props) => {
  return (
    <>
      <Shadow isShowing={props.isShowing} />
      <Container isShowing={props.isShowing}>
        <div
          style={{
            height: "clamp(60px,100vh,80px)",
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Menu
            aria-label="Abrir Menu"
            onClick={props.onClick}
            style={{
              height: "fit-content",
              alignSelf: "center",
            }}
          >
            <img src={iconCloseMenu} alt="Menu" />
          </Menu>
        </div>
        {Object.keys(props.dropItens).map((item: string, index) => (
          <Colapsable
            key={item}
            hasDropdown={props.dropItens[item].length == 0 ? false : true}
          >
            <summary>{item}</summary>
            <ul>
              {props.dropItens[item].map((dropItem, index) => (
                <li key={index}>
                  <a href={dropItem.link}>
                    {/*<img src={dropItem.icon} alt={dropItem.name} />*/}
                    {dropItem.name}
                  </a>
                </li>
              ))}
            </ul>
          </Colapsable>
        ))}
      </Container>
    </>
  );
};

export default SideBar;
