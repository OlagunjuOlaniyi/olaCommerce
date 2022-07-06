import styled from "styled-components";
import img from "../../images/heroDesktop.jpg";

export const Container = styled.section`
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${img}) no-repeat center / cover;
  min-height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  color: #fff;
`;

export const BigText = styled.h1`
  font-size: 50px;
`;

export const SmallText = styled.p`
  font-size: 25px;
`;
