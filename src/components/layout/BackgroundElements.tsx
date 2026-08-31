import React from "react";
import styled, { keyframes } from "styled-components";

const drift = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }
  50% {
    transform: translate3d(0, -12px, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
`;

const pulse = keyframes`
  0% {
    opacity: 0.18;
    transform: scale(1);
  }
  50% {
    opacity: 0.28;
    transform: scale(1.03);
  }
  100% {
    opacity: 0.18;
    transform: scale(1);
  }
`;

const rotateSlow = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const BackgroundContainer = styled.div`
  position: fixed;
  inset: 0;
  z-index: -1;
  overflow: hidden;
  pointer-events: none;
  background:
    radial-gradient(circle at top, rgba(108, 255, 141, 0.06), transparent 35%),
    linear-gradient(180deg, #050816 0%, #0b1020 100%);
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: radial-gradient(
    circle at center,
    transparent 0%,
    rgba(5, 8, 22, 0.18) 55%,
    rgba(5, 8, 22, 0.45) 100%
  );
`;

const Portal = styled.div`
  position: absolute;
  border-radius: 999px;
  filter: blur(1px);
  opacity: 0.75;
  animation: ${pulse} 10s ease-in-out infinite;

  background: ${({ theme }) => `radial-gradient(
    circle at center,
    ${theme.colors.accent.primary}22 0%,
    ${theme.colors.accent.primary}10 35%,
    transparent 70%
  )`};

  &::before {
    content: "";
    position: absolute;
    inset: 12%;
    border-radius: inherit;
    border: 1px solid ${({ theme }) => theme.colors.border.soft};
    box-shadow: 0 0 24px ${({ theme }) => theme.colors.accent.primary}18;
    animation: ${rotateSlow} 18s linear infinite;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 24%;
    border-radius: inherit;
    border: 1px solid ${({ theme }) => theme.colors.accent.primary}20;
    animation: ${rotateSlow} 26s linear infinite reverse;
  }
`;

const GlowingLine = styled.div`
  position: absolute;
  width: 1px;
  height: 220px;
  background: linear-gradient(
    to bottom,
    transparent,
    ${({ theme }) => theme.colors.accent.primary}55,
    transparent
  );
  opacity: 0.22;
  filter: blur(0.4px);
  animation: ${drift} 12s ease-in-out infinite;

  @media (max-width: ${({ theme }) => theme.metrics.breakpoints.md}) {
    display: none;
  }
`;

const CircuitPattern = styled.div`
  position: absolute;
  width: 240px;
  height: 240px;
  border: 1px solid ${({ theme }) => theme.colors.border.soft};
  opacity: 0.12;
  animation: ${rotateSlow} 30s linear infinite;

  &::before,
  &::after {
    content: "";
    position: absolute;
    background: ${({ theme }) => theme.colors.accent.primary}22;
  }

  &::before {
    top: 50%;
    left: -20%;
    width: 140%;
    height: 1px;
    transform: rotate(35deg);
  }

  &::after {
    top: -20%;
    left: 50%;
    width: 1px;
    height: 140%;
    transform: rotate(35deg);
  }

  @media (max-width: ${({ theme }) => theme.metrics.breakpoints.md}) {
    display: none;
  }
`;

export const BackgroundElements: React.FC = () => {
  return (
    <BackgroundContainer aria-hidden="true">
      <Portal
        style={{
          width: "280px",
          height: "280px",
          top: "8%",
          left: "6%",
        }}
      />

      <Portal
        style={{
          width: "220px",
          height: "220px",
          bottom: "12%",
          right: "10%",
        }}
      />

      <GlowingLine
        style={{
          top: "14%",
          left: "30%",
          transform: "rotate(24deg)",
        }}
      />

      <GlowingLine
        style={{
          bottom: "18%",
          right: "28%",
          transform: "rotate(-18deg)",
        }}
      />

      <CircuitPattern
        style={{
          top: "34%",
          right: "12%",
          transform: "rotate(18deg)",
        }}
      />

      <Overlay />
    </BackgroundContainer>
  );
};
