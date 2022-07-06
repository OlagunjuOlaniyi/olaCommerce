import React, { useContext } from "react";
import { StyledHamburger, MiddleLine, TopLine, BottomLine } from "./style";
// import { ProductsContext } from '../../Contexts/ProductsContext';

function Hamburger() {
  // const { openMenu, toggleMenu } = useContext(ProductsContext);

  return (
    <StyledHamburger aria-expanded="{openMenu}">
      <TopLine />
      <MiddleLine />
      <BottomLine />
    </StyledHamburger>
  );
}

export default Hamburger;
