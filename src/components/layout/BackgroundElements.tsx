import React from "react";
import styled, { keyframes } from "styled-components";

const float = keyframes`
  0% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(5deg);
  }
  100% {
    transform: translateY(0) rotate(0deg);
  }
`;

const pulse = keyframes`
  0% {
    opacity: 0.5;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.05);
  }
  100% {
    opacity: 0.5;
    transform: scale(1);
  }
`;

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  overflow: hidden;
  pointer-events: none;
  background: radial-gradient(circle at 50% 50%, #0d0d0d 0%, #000000 100%);
`;

const Portal = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: ${({ theme }) => `radial-gradient(circle at center, 
    ${theme.colors.brand.primary}30 0%,
    ${theme.colors.brand.primary}10 50%,
    transparent 70%
  )`};
  box-shadow: 0 0 60px ${({ theme }) => theme.colors.brand.primary}40,
    inset 0 0 40px ${({ theme }) => theme.colors.brand.primary};
  animation: ${pulse} 4s ease-in-out infinite;
  filter: blur(1px);

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 90%;
    height: 90%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    border: 3px solid ${({ theme }) => theme.colors.brand.primary}80;
    box-shadow: 0 0 20px ${({ theme }) => theme.colors.brand.primary}60,
      inset 0 0 20px ${({ theme }) => theme.colors.brand.primary}60;
    animation: ${spin} 8s linear infinite;
  }

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 70%;
    height: 70%;
    transform: translate(-50%, -50%) rotate(45deg);
    border-radius: 50%;
    border: 2px solid ${({ theme }) => theme.colors.brand.secondary}60;
    box-shadow: 0 0 30px ${({ theme }) => theme.colors.brand.secondary}40,
      inset 0 0 30px ${({ theme }) => theme.colors.brand.secondary}40;
    animation: ${spin} 12s linear infinite reverse;
  }
`;

const GlowingLine = styled.div`
  position: absolute;
  width: 3px;
  height: 200px;
  background: ${({ theme }) => theme.colors.brand.primary};
  box-shadow: 0 0 20px ${({ theme }) => theme.colors.brand.primary},
    0 0 40px ${({ theme }) => theme.colors.brand.primary}40;
  opacity: 0.6;
  animation: ${float} 6s ease-in-out infinite;
  filter: blur(0.5px);
`;

const CircuitPattern = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  border: 2px solid ${({ theme }) => theme.colors.brand.primary}30;
  &::before,
  &::after {
    content: "";
    position: absolute;
    background: ${({ theme }) => theme.colors.brand.primary}20;
    box-shadow: 0 0 15px ${({ theme }) => theme.colors.brand.primary}40;
  }
  &::before {
    top: 50%;
    left: -50%;
    width: 200%;
    height: 2px;
    transform: rotate(45deg);
  }
  &::after {
    top: -50%;
    left: 50%;
    width: 2px;
    height: 200%;
    transform: rotate(45deg);
  }
  animation: ${spin} 20s linear infinite;
`;

export const BackgroundElements: React.FC = () => {
  return (
    <BackgroundContainer>
      {/* Portais */}
      <Portal style={{ top: "15%", left: "10%", transform: "scale(1.2)" }} />
      <Portal
        style={{ bottom: "20%", right: "15%", transform: "scale(0.8)" }}
      />
      <Portal style={{ top: "60%", left: "80%", transform: "scale(0.6)" }} />

      {/* Linhas brilhantes */}
      <GlowingLine
        style={{ top: "10%", left: "30%", transform: "rotate(45deg)" }}
      />
      <GlowingLine
        style={{ bottom: "20%", right: "40%", transform: "rotate(-30deg)" }}
      />
      <GlowingLine
        style={{ top: "40%", right: "20%", transform: "rotate(15deg)" }}
      />

      {/* Padrões de circuito */}
      <CircuitPattern style={{ top: "30%", left: "60%" }} />
      <CircuitPattern
        style={{
          bottom: "40%",
          right: "70%",
          transform: "rotate(30deg) scale(0.7)",
        }}
      />
    </BackgroundContainer>
  );
};
