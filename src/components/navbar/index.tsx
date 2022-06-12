import React, { useEffect, useId } from "react";

//@ts-ignore
import styled from "styled-components";
//@ts-ignore
import LogoSnap from "../../../assets/logo/logo.svg";

//@ts-ignore
import iconMenu from "../../../assets/icons/icon-menu.svg";

import Button from "../buttons";
import NavButtons from "./nav-button";
import SideBar from "../sidebar";

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;

  height: clamp(60px, 100vh, 80px);
  margin-left: 1rem;
  margin-right: 1rem;
  background-color: #fff;
`;
const GridContainer = styled.div`
  --grid-template-areas: "Logo List Buttons";
  --grid-template-columns: 1fr 4fr 1fr;
  @media (max-width: 768px) {
    --grid-template-areas: "Logo Hamburger";
    --grid-template-columns: 4fr 1fr;
  }

  max-width: var(--break-desktop);
  display: grid;
  grid-template-areas: var(--grid-template-areas);
  grid-template-columns: var(--grid-template-columns);
  & > .Hamburger {
    display: none;
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
    align-items: center;

    & > .Hamburger {
      display: block;
      justify-self: end;
    }
    & > .List,
    .Buttons {
      display: none !important;
    }
  }
`;
const LogoContainer = styled.div`
  --just-cont: center;
  @media (max-width: 768px) {
    --just-cont: flex-start;
  }
  grid-area: Logo;
  display: flex;
  align-items: center;
  justify-content: var(--just-cont);
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
const Menu = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const dropItens: dropItensInterface = {
  Features: [
    {
      name: "Todo list",
      icon: "",
      link: "",
    },
    {
      name: "Calendar",
      icon: "",
      link: "",
    },
    {
      name: "Reminders",
      icon: "",
      link: "",
    },
    {
      name: "Planing",
      icon: "",
      link: "",
    },
  ],
  Company: [
    {
      name: "History",
      icon: "",
      link: "",
    },
    {
      name: "Our Team",
      icon: "",
      link: "",
    },
    {
      name: "Blog",
      icon: "",
      link: "",
    },
  ],
  Careers: [],
  About: [],
};

interface dropItensInterface {
  [key: string]: {
    name?: string;
    icon?: string;
    link?: string;
  }[];
}

const NavBar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  useEffect(() => {
    console.log("isOpen", isOpen);
  });
  return (
    <>
      <Nav data-testid="navbar">
        <GridContainer>
          <LogoContainer aria-label="Snap Company WebSite" className="Logo">
            <img
              style={{ width: "clamp(100px, 100vh, 110px)" }}
              src={LogoSnap}
              alt="Snap company website"
            />
          </LogoContainer>
          <div className="List" style={{ gridArea: "List" }}>
            <ButtonsList>
              {Object.keys(dropItens).map((item) => (
                <li key={item}>
                  <NavButtons
                    key={item}
                    hasDropdown={dropItens[item].length == 0 ? false : true}
                    dropItens={dropItens[item] ? dropItens[item] : []}
                  >
                    <a href="">{item}</a>
                  </NavButtons>
                </li>
              ))}
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
          <div
            className="Hamburger"
            style={{
              gridArea: "Hamburger",
              height: "fit-content",
              width: "fit-content",
            }}
          >
            <Menu aria-label="Abrir Menu" onClick={() => setIsOpen(true)}>
              <img src={iconMenu} alt="Menu" />
            </Menu>
          </div>
        </GridContainer>
      </Nav>
      <SideBar
        isShowing={isOpen}
        onClick={() => setIsOpen(false)}
        dropItens={dropItens}
      />
    </>
  );
};

export default NavBar;
