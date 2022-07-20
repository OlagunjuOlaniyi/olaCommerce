import styled from "styled-components";

export const FormCt = styled.div`
  display: flex;
  justify-content: center;

  form {
    width: 40%;
  }

  button {
    float: right;
  }

  @media screen and (max-width: 780px) {
    form {
      width: 95%;
    }
  }
`;
