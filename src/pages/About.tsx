import React from "react";
import styled from "styled-components";
import PageHeader from "../components/common/PageHeader";

const AboutContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.metrics.spacing.xl};
  width: 100%;
`;

const HeroCard = styled.article`
  position: relative;
  overflow: hidden;

  display: grid;
  grid-template-columns: 1.4fr 0.8fr;
  gap: ${({ theme }) => theme.metrics.spacing.lg};

  padding: ${({ theme }) => theme.metrics.spacing.xl};

  background: ${({ theme }) => theme.colors.background.surface};
  border: 1px solid ${({ theme }) => theme.colors.border.soft};
  border-radius: ${({ theme }) => theme.metrics.radius.xl};
  box-shadow: ${({ theme }) => theme.metrics.shadows.md};
  backdrop-filter: blur(10px);

  @media (max-width: ${({ theme }) => theme.metrics.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }

  @media (max-width: ${({ theme }) => theme.metrics.breakpoints.md}) {
    padding: ${({ theme }) => theme.metrics.spacing.lg};
  }
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.metrics.spacing.lg};
`;

const IntroText = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};

  @media (max-width: ${({ theme }) => theme.metrics.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.fontSize.md};
  }
`;

const Highlight = styled.span`
  color: ${({ theme }) => theme.colors.text.primary};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
`;

const SidePanel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${({ theme }) => theme.metrics.spacing.md};
  padding: ${({ theme }) => theme.metrics.spacing.lg};

  border: 1px solid ${({ theme }) => theme.colors.border.soft};
  border-radius: ${({ theme }) => theme.metrics.radius.lg};
  background: ${({ theme }) => theme.colors.background.surfaceStrong};
`;

const SideLabel = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.text.muted};
`;

const SideTitle = styled.h2`
  font-family: ${({ theme }) => theme.typography.fontFamily.decorative};
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  line-height: ${({ theme }) => theme.typography.lineHeight.tight};
  color: ${({ theme }) => theme.colors.accent.primary};
`;

const SideDescription = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
`;

const HighlightsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: ${({ theme }) => theme.metrics.spacing.lg};

  @media (max-width: ${({ theme }) => theme.metrics.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`;

const HighlightCard = styled.article`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.metrics.spacing.sm};

  padding: ${({ theme }) => theme.metrics.spacing.lg};

  background: ${({ theme }) => theme.colors.background.surface};
  border: 1px solid ${({ theme }) => theme.colors.border.soft};
  border-radius: ${({ theme }) => theme.metrics.radius.lg};
  box-shadow: ${({ theme }) => theme.metrics.shadows.md};

  transition:
    transform ${({ theme }) => theme.metrics.transitions.normal},
    border-color ${({ theme }) => theme.metrics.transitions.normal},
    box-shadow ${({ theme }) => theme.metrics.transitions.normal};

  &:hover {
    transform: translateY(-4px);
    border-color: ${({ theme }) => theme.colors.border.strong};
    box-shadow: ${({ theme }) => theme.metrics.shadows.glow};
  }
`;

const HighlightTitle = styled.h3`
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text.primary};
`;

const HighlightDescription = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
`;

const About: React.FC = () => {
  return (
    <AboutContainer>
      <PageHeader
        eyebrow="Multiverse Overview"
        title="Rick and Morty"
        description="Uma experiência interdimensional para explorar personagens, curiosidades e o caos sci-fi de uma das animações mais icônicas da cultura pop."
      />

      <HeroCard>
        <HeroContent>
          <IntroText>
            <Highlight>Rick and Morty</Highlight> é uma série de animação para
            adultos criada por <Highlight>Justin Roiland</Highlight> e{" "}
            <Highlight>Dan Harmon</Highlight>, conhecida por combinar ficção
            científica, humor ácido e aventuras absurdas em diferentes
            realidades.
          </IntroText>

          <IntroText>
            A história acompanha o cientista genial e caótico{" "}
            <Highlight>Rick Sanchez</Highlight> e seu neto ansioso{" "}
            <Highlight>Morty Smith</Highlight>, viajando por dimensões
            alternativas, enfrentando criaturas bizarras, dilemas existenciais e
            situações tão engraçadas quanto perturbadoras.
          </IntroText>

          <IntroText>
            Este projeto foi criado para apresentar esse universo de forma mais
            visual, moderna e explorável, com foco em personagens, filtros
            dinâmicos e curiosidades marcantes.
          </IntroText>
        </HeroContent>

        <SidePanel>
          <SideLabel>Project theme</SideLabel>
          <SideTitle>Explore the multiverse</SideTitle>
          <SideDescription>
            Uma interface inspirada em Rick and Morty com estética dark sci-fi,
            navegação moderna e foco em descoberta de personagens.
          </SideDescription>
        </SidePanel>
      </HeroCard>

      <HighlightsGrid>
        <HighlightCard>
          <HighlightTitle>Multiverse Travel</HighlightTitle>
          <HighlightDescription>
            Explore diferentes dimensões e mergulhe em um universo caótico cheio
            de possibilidades absurdas.
          </HighlightDescription>
        </HighlightCard>

        <HighlightCard>
          <HighlightTitle>Iconic Characters</HighlightTitle>
          <HighlightDescription>
            Descubra personagens marcantes, suas espécies, status e últimas
            localizações conhecidas.
          </HighlightDescription>
        </HighlightCard>

        <HighlightCard>
          <HighlightTitle>Sci-Fi Chaos</HighlightTitle>
          <HighlightDescription>
            Uma mistura de humor sombrio, ciência maluca, relações familiares e
            aventuras interdimensionais.
          </HighlightDescription>
        </HighlightCard>
      </HighlightsGrid>
    </AboutContainer>
  );
};

export default About;
