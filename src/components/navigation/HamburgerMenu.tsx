import React from "react";
import styled from "styled-components";

interface HamburgerProps {
  isOpen: boolean;
  onClick: () => void;
}

const StyledHamburger = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== "isOpen",
})<{ isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: ${({ theme }) => theme.metrics.zIndex.fixed};
  position: fixed;
  top: 1.5rem;
  left: 1.5rem;

  &:focus {
    outline: none;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.text.primary};
    outline-offset: 4px;
    border-radius: 4px;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ theme }) => theme.colors.text.primary};
    border-radius: ${({ theme }) => theme.metrics.radius.sm};
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    transform-origin: 1px;
    box-shadow: 0 0 10px ${({ theme }) => theme.colors.text.primary}40;

    &:hover {
      box-shadow: 0 0 15px ${({ theme }) => theme.colors.text.primary}60;
    }

    &:first-child {
      transform: ${({ isOpen }) => (isOpen ? "rotate(45deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      opacity: ${({ isOpen }) => (isOpen ? "0" : "1")};
      transform: ${({ isOpen }) =>
        isOpen ? "translateX(20px)" : "translateX(0)"};
    }

    &:nth-child(3) {
      transform: ${({ isOpen }) => (isOpen ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

export const HamburgerMenu: React.FC<HamburgerProps> = ({
  isOpen,
  onClick,
}) => {
  return (
    <StyledHamburger
      id="hamburger-menu"
      isOpen={isOpen}
      onClick={onClick}
      aria-expanded={isOpen}
      aria-label="Menu principal"
      aria-controls="navigation-menu"
    >
      <div />
      <div />
      <div />
    </StyledHamburger>
  );
};
