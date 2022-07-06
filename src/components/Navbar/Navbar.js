import React, { useContext } from "react";
import { StyledNav, NavLinks, StyledNavLink, StyledSpan } from "./style";
import { links } from "./data";
// import { ProductsContext } from "../../Contexts/ProductsContext";
// import { CartContext } from "../../Contexts/CartContext";

function Navbar() {
  // const { openMenu, toggleMenu } = useContext(ProductsContext);
  // const { totalNumCartItems } = useContext(CartContext);

  return (
    <StyledNav>
      <NavLinks>
        {links.map((link, index) => {
          const { url, text, icon } = link;
          return (
            <li key={index}>
              <StyledSpan></StyledSpan>

              <StyledNavLink to={url}>
                {text} {icon}
              </StyledNavLink>
            </li>
          );
        })}
      </NavLinks>
    </StyledNav>
  );
}

export default Navbar;
