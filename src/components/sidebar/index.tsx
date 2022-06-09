import React from "react";
//@ts-ignore
import iconCloseMenu from "../../../assets/icons/icon-close-menu.svg";
//@ts-ignore
import styled from "styled-components";

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
  transition: all 0.3s ease-in-out;
  z-index: 2;
  will-change: transform drop-shadow;
  display: flex;
  justify-content: center;
  align-items: center;
  width: clamp(220px, 50vw, 400px);
  height: 100vh;
  position: fixed;
  inset: 0 0 0 auto;
  background-color: blue;

  transform: ${(props: State) =>
    props.isShowing
      ? "translateX(-1px)"
      : "translateX(clamp(220px, 50vw, 400px))"};

  @media (min-width: 768px) {
    transform: translateX(100%) !important;
  }
`;
const Menu = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

interface Props {
  isShowing: boolean;
  onClick: () => void;
}

interface State {
  isShowing: boolean;
}

const SideBar = ({ isShowing, onClick }: Props) => {
  return (
    <>
      <Shadow isShowing={isShowing} />
      <Container isShowing={isShowing}>
        <Menu aria-label="Abrir Menu" onClick={onClick}>
          <img src={iconCloseMenu} alt="Menu" />
        </Menu>
        <h1>SideBar</h1>
      </Container>
    </>
  );
};

export default SideBar;
