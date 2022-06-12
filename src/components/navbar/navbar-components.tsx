import styled from "styled-components";

const Nav = styled.nav`
  position: fixed;
  inset: 0 0 100% 0;
  display: flex;
  justify-content: center;
  align-items: center;

  height: clamp(60px, 20vh, 80px);
  padding-left: 1rem;
  padding-right: 1rem;
  background-color: #fff;
  z-index: 1;
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

export { Nav, GridContainer, LogoContainer, ButtonsList, Menu };
