import React from "react";
import styled from "styled-components";

interface HamburgerProps {
  isOpen: boolean;
  onClick: () => void;
}

const StyledHamburger = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== "$isOpen",
})<{ $isOpen: boolean }>`
  position: fixed;
  top: ${({ theme }) => theme.metrics.spacing.lg};
  left: ${({ theme }) => theme.metrics.spacing.lg};
  z-index: ${({ theme }) => theme.metrics.zIndex.fixed};

  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;

  width: 52px;
  height: 52px;
  padding: 0 12px;

  border: 1px solid ${({ theme }) => theme.colors.border.soft};
  border-radius: ${({ theme }) => theme.metrics.radius.md};
  background: ${({ theme }) => theme.colors.background.surface};
  backdrop-filter: blur(10px);
  box-shadow: ${({ theme }) => theme.metrics.shadows.md};

  transition:
    transform ${({ theme }) => theme.metrics.transitions.normal},
    border-color ${({ theme }) => theme.metrics.transitions.normal},
    background ${({ theme }) => theme.metrics.transitions.normal};

  &:hover {
    transform: translateY(-1px);
    border-color: ${({ theme }) => theme.colors.border.strong};
    background: ${({ theme }) => theme.colors.background.surfaceStrong};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.accent.primary};
    outline-offset: 4px;
  }

  @media (min-width: ${({ theme }) => theme.metrics.breakpoints.lg}) {
    top: ${({ theme }) => theme.metrics.spacing.xl};
    left: ${({ theme }) => theme.metrics.spacing.xl};
  }
`;

const Line = styled.span.withConfig({
  shouldForwardProp: (prop) => prop !== "$isOpen",
})<{ $isOpen: boolean }>`
  display: block;
  width: 100%;
  height: 2px;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.text.primary};
  transform-origin: left center;
  transition:
    transform ${({ theme }) => theme.metrics.transitions.normal},
    opacity ${({ theme }) => theme.metrics.transitions.normal};

  &:nth-child(1) {
    transform: ${({ $isOpen }) =>
      $isOpen ? "translateY(7px) rotate(45deg)" : "translateY(0) rotate(0)"};
  }

  &:nth-child(2) {
    opacity: ${({ $isOpen }) => ($isOpen ? 0 : 1)};
    transform: ${({ $isOpen }) =>
      $isOpen ? "translateX(8px)" : "translateX(0)"};
  }

  &:nth-child(3) {
    transform: ${({ $isOpen }) =>
      $isOpen ? "translateY(-7px) rotate(-45deg)" : "translateY(0) rotate(0)"};
  }
`;

export const HamburgerMenu: React.FC<HamburgerProps> = ({
  isOpen,
  onClick,
}) => {
  return (
    <StyledHamburger
      id="hamburger-menu"
      $isOpen={isOpen}
      onClick={onClick}
      aria-expanded={isOpen}
      aria-label="Abrir menu principal"
      aria-controls="navigation-menu"
      type="button"
    >
      <Line $isOpen={isOpen} />
      <Line $isOpen={isOpen} />
      <Line $isOpen={isOpen} />
    </StyledHamburger>
  );
};
