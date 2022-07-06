import React from "react";
import { links } from "../Navbar/data";
import { social } from "./footerdata";

import {
  FooterContainer,
  FooterCt,
  FooterIcons,
  FooterLink,
  FooterLinks,
  FooterLogo,
  FooterSocial,
} from "./Style";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterCt>
        <FooterLogo>
          <h2>OlaCommerce</h2>
        </FooterLogo>
        <FooterLinks>
          <h6>Quick Links</h6>
          {links.map((link, index) => {
            const { url, text, icon } = link;
            return (
              <p key={index}>
                <FooterLink to={url}>
                  {text} {icon}
                </FooterLink>
              </p>
            );
          })}
        </FooterLinks>
        <FooterIcons>
          <h6>Let's Connect!</h6>
          {social.map((link, index) => {
            const { url, icon } = link;
            return (
              <FooterSocial key={index} to={url} style={{ fontSize: 20 }}>
                {icon}
              </FooterSocial>
            );
          })}
        </FooterIcons>
      </FooterCt>
      <div className="container text-center text-white small mt-2">
        <p>
          @ 2022 Website Created by:{" "}
          <a href="linked.com" className="text-light bold">
            Olagunju Olaniyi
          </a>
        </p>
      </div>
    </FooterContainer>
  );
};

export default Footer;
