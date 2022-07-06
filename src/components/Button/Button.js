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
