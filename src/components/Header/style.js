import styled from "styled-components";
import { FiShoppingCart, FiSearch } from "react-icons/fi";
// import { Center } from "../App/style";

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  background: white;
  border-bottom: 1px solid #00cc96;

  @media all and (min-width: 992px) {
    flex-wrap: nowrap;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  max-width: 1400px;
  width: 90vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  @media all and (min-width: 992px) {
    flex-direction: row;
  }
`;

export const SubContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  @media all and (min-width: 992px) {
  }
`;

export const StyledLogo = styled.h1`
  color: #00cc96;
`;

export const StyledSearchIcon = styled(FiSearch)`
  font-size: 1.3rem;
`;
