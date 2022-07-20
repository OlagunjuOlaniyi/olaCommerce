import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
import { FiChevronRight } from "react-icons/fi";

export const ButtonOne = styled(Link)`
  padding: 8px 15px;
  background-color: #00cc96;
  font-size: 16px;
  color: #fff;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-self: center;
  font-weight: 500;

  &:hover {
    transform: scale(1.2);
    color: #000;
    transition: 0.5sec ease-in-out;
  }
`;

export const BlinkIcon = styled(FiChevronRight)`
  font-size: 1.5rem;
  color: #fff;
  animation: blink 1s linear infinite;

  @keyframes blink {
    from {
      transform: scale(1.2);
    }
    to {
      transform: scale(0.75);
    }
  }
`;

export const ButtonTwo = styled(Link)`
  padding: 8px 15px;
  border: 2px solid var(--olacommerce-bg);
  font-size: 18px;
  color: #00cc96;
  text-decoration: none;
  align-self: center;
  font-weight: 500;
  transition: 0.5sec;

  &:hover {
    background-color: var(--olacommerce-bg);
    color: #fff;
  }
`;

export const ButtonIncDec = styled.button`
  border-radius: 50%;
  background-color: var(--olacommerce-bg);
  padding: 5px;
  height: 35px;
  width: 35px;
  color: #fff;
  border: none;
  font-size: 18px;
`;

export const ButtonClickBd = styled.button`
  padding: 8px 15px;
  border: 2px solid var(--olacommerce-bg);
  background-color: inherit;
  font-size: 18px;
  color: #00cc96;
  align-self: center;
  font-weight: 500;

  transition: 0.5sec;

  &:hover {
    background-color: var(--olacommerce-bg);
    color: #fff;
  }
`;

export const ButtonClick = styled.button`
  padding: 8px 15px;
  border: 2px solid var(--olacommerce-bg);
  background-color: var(--olacommerce-bg);
  font-size: 18px;
  color: #fff;
  align-self: center;
  font-weight: 500;
  transition: 0.5sec;

  &:hover {
    border: 2px solid var(--olacommerce-bg);
    color: var(--olacommerce-bg);
    background-color: #fff;
  }
`;
