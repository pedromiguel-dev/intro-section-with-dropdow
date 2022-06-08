import React, { useId } from "react";
//@ts-ignore
import styled from "styled-components";
//@ts-ignore
import LogoSnap from "../../../assets/logo/logo.svg";
import Button from "../buttons";
import NavButtons from "./nav-button";

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;

  height: clamp(60px, 100vh, 80px);
  margin: 15px 20px 0 20px;
  background-color: #fff;
`;
const GridContainer = styled.div`
  max-width: var(--break-desktop);
  display: grid;
  grid-template-areas: "Logo List Buttons";
  grid-template-columns: 1fr 4fr 1fr;
  & > .Hamburger {
    display: none;
  }
  @media (max-width: 768px) {
    grid-template-areas: "Logo Hamburger";
    grid-template-columns: 4fr 1fr;
    & > .Hamburger {
      display: block;
    }
    & > .List,
    .Buttons {
      display: none !important;
    }
  }
`;
const ButtonsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: clamp(0.5em, 2vw, 5em);
  list-style: none;

  height: 100%;
  width: 100%;
`;
const dropItens = ["Todo list", "Calendar", "Reminders", "Planing"];

const NavBar = () => {
  return (
    <Nav data-testid="navbar">
      <GridContainer>
        <div
          className="Logo"
          style={{
            gridArea: "Logo",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            style={{ width: "clamp(100px, 100vh, 110px)" }}
            src={LogoSnap}
            alt="Snap company website"
          />
        </div>
        <div className="List" style={{ gridArea: "List" }}>
          <ButtonsList>
            <li>
              <NavButtons hasDropdown dropItens={dropItens}>
                <a href="#">Features</a>
              </NavButtons>
            </li>
            <li>
              <NavButtons hasDropdown dropItens={dropItens}>
                <a href="#">Company</a>
              </NavButtons>
            </li>
            <li>
              <NavButtons>
                <a href="#">Careers</a>
              </NavButtons>
            </li>
            <li>
              <NavButtons>
                <a href="#">About</a>
              </NavButtons>
            </li>
          </ButtonsList>
        </div>
        <div
          className="Buttons"
          style={{
            gridArea: "Buttons",
            display: "flex",
            alignItems: "center",
            justifyContent: "Center",
            gap: "0.5em",
          }}
        >
          <Button>Login</Button>
          <Button isOutlined>Register</Button>
        </div>
        <div className="Hamburger" style={{ gridArea: "Hamburger" }}>
          <Button>Hamburger U+1F354 </Button>
        </div>
      </GridContainer>
    </Nav>
  );
};

export default NavBar;
