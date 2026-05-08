import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

interface NavigationProps {
  isOpen: boolean;
  onNavigate?: () => void;
}

const StyledLink = styled(Link)<{ $isActive?: boolean }>`
  text-decoration: none;
  color: ${({ theme, $isActive }) =>
    $isActive ? theme.colors.text.primary : theme.colors.text.primary};
  transition: color 0.3s ease;
  position: relative;
  padding: 0.5rem 0;

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: ${({ $isActive }) => ($isActive ? "100%" : "0")};
    height: 2px;
    background: ${({ theme }) => theme.colors.text.primary};
    transition: width 0.3s ease;
    box-shadow: 0 0 10px ${({ theme }) => theme.colors.text.primary};
  }

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.text.primary};
    outline: none;

    &::before {
      width: 100%;
    }
  }
`;

const StyledNav = styled.nav.withConfig({
  shouldForwardProp: (prop) => prop !== "isOpen",
})<{ isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: ${({ theme }) => theme.colors.background.primary};
  height: calc(100vh - 80px);
  width: 100%;
  max-width: 400px;
  text-align: left;
  padding: 2rem;
  margin-top: 80px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${({ theme }) => theme.metrics.zIndex.modal};
  transform: ${({ isOpen }) =>
    isOpen ? "translateX(0)" : "translateX(-100%)"};
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: ${({ theme, isOpen }) =>
    isOpen ? `4px 0 15px ${theme.colors.text.primary}40` : "none"};

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: ${({ theme }) => theme.colors.text.primary};
    box-shadow: 0 0 15px ${({ theme }) => theme.colors.text.primary};
  }
`;

const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const MenuItem = styled.li`
  margin: 2rem 0;
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.fontSize["xxl"]};
`;

const Overlay = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isOpen",
})<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(13, 13, 13, 0.7);
  backdrop-filter: blur(4px);
  z-index: ${({ theme }) => theme.metrics.zIndex.dropdown};
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  transition: all 0.3s ease;
`;

export const Navigation: React.FC<NavigationProps> = ({
  isOpen,
  onNavigate,
}) => {
  const location = useLocation();

  return (
    <>
      <StyledNav isOpen={isOpen} id="navigation-menu" aria-hidden={!isOpen}>
        <MenuList>
          <MenuItem>
            <StyledLink
              to="/"
              $isActive={location.pathname === "/"}
              onClick={onNavigate}
            >
              Sobre
            </StyledLink>
          </MenuItem>
          <MenuItem>
            <StyledLink
              to="/personagens"
              $isActive={location.pathname === "/personagens"}
              onClick={onNavigate}
            >
              Personagens
            </StyledLink>
          </MenuItem>
          <MenuItem>
            <StyledLink
              to="/curiosidades"
              $isActive={location.pathname === "/curiosidades"}
              onClick={onNavigate}
            >
              Curiosidades
            </StyledLink>
          </MenuItem>
        </MenuList>
      </StyledNav>
      <Overlay isOpen={isOpen} onClick={onNavigate} />
    </>
  );
};
