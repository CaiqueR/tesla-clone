import { motion } from "framer-motion";
import styled from "styled-components";
import { BurgerSVG, LogoSVG } from "./IconSVG";
export const Container = styled.div`
  position: sticky;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export const Header = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 20px;
  min-height: 52px;
`;

export const Logo = styled(LogoSVG)`
  height: 17px;
  cursor: pointer;
`;
export const Burger = styled(BurgerSVG)`
  width: 24px;
  height: 24px;
  cursor: pointer;
  padding-right: 5px;
`;
export const Footer = styled(motion.footer)`
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    li {
      list-style: none;
      font-size: 14px;

      &:not(:first-child) {
        margin: 10px 0 0;
      }

      a {
        text-decoration: none;
        color: #393c41;

        &:hover {
          color: #000;
        }
      }
    }
  }

  font-size: 10px;

  margin-bottom: 2em;

  @media (min-width: 600px) {
    margin-bottom: 3.8em;

    ul {
      flex-direction: row;

      li {
        &:not(:first-child) {
          margin: 0 0 0 30px;
        }
      }
    }
  }
`;
