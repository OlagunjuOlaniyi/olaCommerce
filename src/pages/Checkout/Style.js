import styled from "styled-components";

export const CheckoutCt = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 15px;

  @media screen and (max-width: 780px) {
    flex-direction: column;
  }
`;

export const CheckoutForm = styled.div`
  width: 50%;

  form {
    width: 80%;
  }

  @media screen and (max-width: 780px) {
    width: 100%;

    form {
      width: 100%;
      margin-bottom: 15px;
    }
  }
`;

export const CheckoutBtnCt = styled.div`
  display: flex;
  justify-content: center;
`;
