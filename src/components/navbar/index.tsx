import React, { useEffect, useId } from "react";
import * as NavComponent from "./navbar-components";

//dont really know why its point a error and i just gave up please help me 😭
/*@ts-ignore*/
/*@ts-ignore*/ import LogoSnap from "../../../assets/logo/logo.svg";
/*@ts-ignore*/ import iconMenu from "../../../assets/icons/icon-menu.svg";
/*@ts-ignore*/ import icCalendar from "../../../assets/icons/icon-calendar.svg";
/*@ts-ignore*/ import icPlanning from "../../../assets/icons/icon-planning.svg";
/*@ts-ignore*/ import icReminders from "../../../assets/icons/icon-reminders.svg";
/*@ts-ignore*/ import icTodo from "../../../assets/icons/icon-todo.svg";

import Button from "../buttons";
import NavButtons from "./nav-button";
import SideBar from "../sidebar";

const dropItens: dropItensInterface = {
  Features: [
    {
      name: "Todo list",
      icon: icTodo,
      link: "Eita bbsssss",
    },
    {
      name: "Calendar",
      icon: icCalendar,
      link: "#",
    },
    {
      name: "Reminders",
      icon: icReminders,
      link: "#",
    },
    {
      name: "Planing",
      icon: icPlanning,
      link: "#",
    },
  ],
  Company: [
    {
      name: "History",
      icon: "",
      link: "#",
    },
    {
      name: "Our Team",
      icon: "",
      link: "#",
    },
    {
      name: "Blog",
      icon: "",
      link: "#",
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
  return (
    <>
      <NavComponent.Nav data-testid="navbar">
        <NavComponent.GridContainer>
          <NavComponent.LogoContainer
            aria-label="Snap Company WebSite"
            className="Logo"
          >
            <img
              style={{ width: "clamp(100px, 100vh, 110px)" }}
              src={LogoSnap}
              alt="Snap company website"
            />
          </NavComponent.LogoContainer>
          <div className="List" style={{ gridArea: "List" }}>
            <NavComponent.ButtonsList>
              {Object.keys(dropItens).map((item, index) => (
                <li key={item}>
                  <NavButtons
                    key={item}
                    hasDropdown={dropItens[item].length == 0 ? false : true}
                    dropItens={dropItens[item] ? dropItens[item] : []}
                  >
                    <a href={dropItens[item][index]?.link || "#"}>{item}</a>
                  </NavButtons>
                </li>
              ))}
            </NavComponent.ButtonsList>
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
            <NavComponent.Menu
              aria-label="Abrir Menu"
              onClick={() => setIsOpen(true)}
            >
              <img src={iconMenu} alt="Menu" />
            </NavComponent.Menu>
          </div>
        </NavComponent.GridContainer>
      </NavComponent.Nav>
      <SideBar
        isShowing={isOpen}
        onClick={() => setIsOpen(false)}
        dropItens={dropItens}
      />
    </>
  );
};

export default NavBar;
