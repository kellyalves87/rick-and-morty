import React from "react";
import styled, { keyframes } from "styled-components";
import { DefaultTheme } from "styled-components";

const AboutContainer = styled.section`
  min-height: 100vh;
  padding: ${({ theme }) => theme.spacing["3xl"]};
  padding-top: calc(80px + ${({ theme }) => theme.spacing["3xl"]});
  background-color: ${({ theme }) => theme.colors.background.main};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing.xl};
    padding-top: calc(80px + ${({ theme }) => theme.spacing.xl});
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => theme.spacing.md};
    padding-top: calc(80px + ${({ theme }) => theme.spacing.md});
  }
`;

const glowAnimation = keyframes`
  0% {
    text-shadow: 0 0 10px ${({ theme }: { theme: DefaultTheme }) =>
      theme.colors.brand.primary}80,
                0 0 20px ${({ theme }: { theme: DefaultTheme }) =>
                  theme.colors.brand.primary}60,
                0 0 30px ${({ theme }: { theme: DefaultTheme }) =>
                  theme.colors.brand.primary}40;
  }
  50% {
    text-shadow: 0 0 20px ${({ theme }: { theme: DefaultTheme }) =>
      theme.colors.brand.primary}80,
                0 0 30px ${({ theme }: { theme: DefaultTheme }) =>
                  theme.colors.brand.primary}60,
                0 0 40px ${({ theme }: { theme: DefaultTheme }) =>
                  theme.colors.brand.primary}40,
                0 0 50px ${({ theme }: { theme: DefaultTheme }) =>
                  theme.colors.brand.primary}20;
  }
  100% {
    text-shadow: 0 0 10px ${({ theme }: { theme: DefaultTheme }) =>
      theme.colors.brand.primary}80,
                0 0 20px ${({ theme }: { theme: DefaultTheme }) =>
                  theme.colors.brand.primary}60,
                0 0 30px ${({ theme }: { theme: DefaultTheme }) =>
                  theme.colors.brand.primary}40;
  }
`;

const Title = styled.h1`
  font-family: ${({ theme }) => theme.typography.fontFamily.title};
  font-size: 5rem;
  color: ${({ theme }) => theme.colors.brand.primary};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  letter-spacing: 4px;
  animation: ${glowAnimation} 3s ease-in-out infinite;
  text-transform: uppercase;
  position: relative;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 120%;
    height: 120%;
    background: radial-gradient(
      circle at center,
      ${({ theme }) => theme.colors.brand.primary}10 0%,
      transparent 70%
    );
    z-index: -1;
    filter: blur(20px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 3.5rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 2.5rem;
  }
`;

const ContentCard = styled.div`
  background: ${({ theme }) => theme.colors.background.card};
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  max-width: 800px;
  width: 100%;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: ${({ theme }) => theme.colors.brand.primary};
    box-shadow: 0 0 15px ${({ theme }) => theme.colors.brand.primary};
  }
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.typography.fontSize.large};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  margin-bottom: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.fontSize.base};
  }
`;

const HighlightText = styled.span`
  color: ${({ theme }) => theme.colors.brand.secondary};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
`;

const About: React.FC = () => {
  return (
    <AboutContainer>
      <Title>Rick and Morty</Title>
      <ContentCard>
        <Description>
          Rick and Morty é uma série de animação para adultos criada por{" "}
          <HighlightText>Justin Roiland</HighlightText> e{" "}
          <HighlightText>Dan Harmon</HighlightText>.
        </Description>

        <Description>
          A série segue as aventuras interdimensionais do cientista genial e
          alcoólatra <HighlightText>Rick Sanchez</HighlightText> e seu neto
          ansioso <HighlightText>Morty Smith</HighlightText>.
        </Description>

        <Description>
          Com sua pistola de portais, eles viajam através de dimensões
          alternativas, encontrando situações bizarras e vivendo aventuras
          absurdas que misturam ciência, família e humor ácido.
        </Description>
      </ContentCard>
    </AboutContainer>
  );
};

export default About;
