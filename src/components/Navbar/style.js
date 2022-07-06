import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNav = styled.nav`
  width: 100%;
  height: ${({ openMenu }) => (openMenu ? "100vh" : "0")};
  overflow: hidden;
  transition: all 0.3s linear;
  transform: ${({ openMenu }) => (openMenu ? "scale(1)" : "scale(0)")};

  @media all and (min-width: 992px) {
    width: 100%;
    transform: none;
    height: auto;
  }
`;

export const NavLinks = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  height: calc(100vh - 59px);
  align-items: center;

  li {
    position: relative;
  }

  @media all and (min-width: 992px) {
    flex-direction: row;
    gap: 2rem;
    height: auto;
    justify-content: flex-end;
  }
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-weight: bold;
  color: black;
  display: block;
  padding: 0.5rem 0;
  text-align: center;
  display: flex;
  align-items: center;
  gap: 0.2rem;
  height: 100%;
  color: #00cc96;
  font-size: 1.5rem;

  &.active {
    text-decoration: underline;
    color: #00cc96;
  }

  &:hover {
    text-decoration: underline;
    text-decoration-color: orange;
    text-decoration-thickness: 3px;
    text-decoration-style: wavy;
    text-underline-offset: 0.1rem;
  }

  @media all and (min-width: 992px) {
    text-align: left;
    /* padding: 0; */
    color: black;
    font-size: 1rem;
  }
`;

export const StyledSpan = styled.span`
  position: absolute;
  background: #800020;
  color: white;
  padding: 0 0.1rem;
  right: -0px;
  bottom: 55%;
  font-weight: bold;
`;
