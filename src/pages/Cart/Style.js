import styled from "styled-components";

export const CartContainer = styled.div`
  padding: 20px 40px;
`;

export const CartProduct = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 10px;
  border-bottom: 1px solid lightgray;
  font-size: 20px;

  div {
    flex-grow: 1;
  }

  div.desc {
    flex-grow: 3;
  }

  div.imgCt {
    flex-grow: 3;
  }

  img {
    width: 200px;
  }

  @media screen and (max-width: 780px) {
    flex-direction: column;
    gap: 0.3rem;
  }
`;

export const CartIncDec = styled.div`
  display: flex;
  //   justify-content: center;
  align-items: center;
  gap: 0.6rem;
`;

export const CartButtonCt = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
`;
