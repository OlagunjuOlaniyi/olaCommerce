import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  padding: 15px 10px;
  background-color: var(--olacommerce-bg);
`;

export const FooterCt = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 2rem;
  color: #fff;

  @media screen and (max-width: 780px) {
    margin: 0 0.2rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const FooterLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    font-weight: 700;
  }
`;

export const FooterLinks = styled.div`
  text-align: center;

  h6 {
    font-weight: 700;
  }

  p {
    display: flex;
    flex-direction: column;
  }
`;

export const FooterLink = styled(Link)`
  font-size: 15px;
  color: #fff;
  text-decoration: none;

  &:hover {
    color: #000;
    transition: 0.3sec;
  }
`;

export const FooterIcons = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  h6 {
    font-weight: 650;
  }
`;

export const FooterSocial = styled(Link)`
  display: flex;
  flex-direction: column;
  margin: 5px 0;
  font-size: 25px;
  color: #fff;
  text-decoration: none;

  &:hover {
    color: #000;
    transition: 0.3sec;
  }
`;
