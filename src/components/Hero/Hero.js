import React from "react";
import { BlinkIcon, ButtonOne } from "../Button/Button";
import { BigText, Container, SmallText, TextContainer } from "./Style";

const Hero = () => {
  return (
    <Container>
      <TextContainer>
        <BigText>Your One Stop Shop</BigText>
        <SmallText>Trending. Affordable. Convenient</SmallText>
        <ButtonOne to="/shop">
          Shop Now <BlinkIcon />
        </ButtonOne>
      </TextContainer>
    </Container>
  );
};

export default Hero;
