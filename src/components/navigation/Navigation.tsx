import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

interface NavigationProps {
  isOpen: boolean;
  onNavigate?: () => void;
}

const Overlay = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== "$isOpen",
})<{ $isOpen: boolean }>`
  position: fixed;
  inset: 0;
  z-index: ${({ theme }) => theme.metrics.zIndex.dropdown};
  border: none;
  background: rgba(5, 8, 22, 0.62);
  backdrop-filter: blur(6px);
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  visibility: ${({ $isOpen }) => ($isOpen ? "visible" : "hidden")};
  transition:
    opacity ${({ theme }) => theme.metrics.transitions.normal},
    visibility ${({ theme }) => theme.metrics.transitions.normal};
`;

const StyledNav = styled.nav.withConfig({
  shouldForwardProp: (prop) => prop !== "$isOpen",
})<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${({ theme }) => theme.metrics.zIndex.modal};

  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.metrics.spacing.xl};

  width: min(360px, 88vw);
  height: 100vh;
  padding: 96px ${({ theme }) => theme.metrics.spacing.lg}
    ${({ theme }) => theme.metrics.spacing.xl};

  background: rgba(11, 16, 32, 0.9);
  border-right: 1px solid ${({ theme }) => theme.colors.border.soft};
  box-shadow: ${({ theme }) => theme.metrics.shadows.lg};
  backdrop-filter: blur(14px);

  transform: ${({ $isOpen }) =>
    $isOpen ? "translateX(0)" : "translateX(-100%)"};
  transition: transform ${({ theme }) => theme.metrics.transitions.normal};
`;

const Brand = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const BrandEyebrow = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.text.muted};
`;

const BrandTitle = styled.h2`
  font-family: ${({ theme }) => theme.typography.fontFamily.decorative};
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  color: ${({ theme }) => theme.colors.accent.primary};
  line-height: ${({ theme }) => theme.typography.lineHeight.tight};
`;

const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.metrics.spacing.sm};
  list-style: none;
  padding: 0;
  margin: 0;
`;

const MenuItem = styled.li`
  width: 100%;
`;

const StyledLink = styled(Link).withConfig({
  shouldForwardProp: (prop) => prop !== "$isActive",
})<{ $isActive?: boolean }>`
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 52px;
  padding: 0 ${({ theme }) => theme.metrics.spacing.md};

  border: 1px solid
    ${({ theme, $isActive }) =>
      $isActive ? theme.colors.border.strong : "transparent"};
  border-radius: ${({ theme }) => theme.metrics.radius.md};

  background: ${({ theme, $isActive }) =>
    $isActive ? theme.colors.accent.soft : "transparent"};

  color: ${({ theme }) => theme.colors.text.primary};
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  font-weight: ${({ theme, $isActive }) =>
    $isActive
      ? theme.typography.fontWeight.semibold
      : theme.typography.fontWeight.medium};

  transition:
    background ${({ theme }) => theme.metrics.transitions.normal},
    border-color ${({ theme }) => theme.metrics.transitions.normal},
    transform ${({ theme }) => theme.metrics.transitions.normal},
    color ${({ theme }) => theme.metrics.transitions.normal};

  &:hover,
  &:focus-visible {
    background: ${({ theme }) => theme.colors.state.hover};
    border-color: ${({ theme }) => theme.colors.border.soft};
    transform: translateX(4px);
    outline: none;
  }
`;

const FooterText = styled.p`
  margin-top: auto;
  color: ${({ theme }) => theme.colors.text.muted};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  line-height: ${({ theme }) => theme.typography.lineHeight.normal};
`;

export const Navigation: React.FC<NavigationProps> = ({
  isOpen,
  onNavigate,
}) => {
  const location = useLocation();

  return (
    <>
      <StyledNav $isOpen={isOpen} id="navigation-menu" aria-hidden={!isOpen}>
        <Brand>
          <BrandEyebrow>Multiverse Explorer</BrandEyebrow>
          <BrandTitle>Rick and Morty</BrandTitle>
        </Brand>

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

        <FooterText>
          Explore personagens, dimensões e curiosidades do multiverso.
        </FooterText>
      </StyledNav>

      <Overlay
        type="button"
        aria-label="Fechar menu"
        $isOpen={isOpen}
        onClick={onNavigate}
      />
    </>
  );
};
