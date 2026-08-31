import { memo } from "react";
import styled from "styled-components";
import { Character } from "../types/character";

interface CharacterCardProps {
  character: Character;
}

const Card = styled.article`
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      120deg,
      transparent 20%,
      rgba(255, 255, 255, 0.04) 50%,
      transparent 80%
    );
    transform: translateX(-120%);
    transition: transform ${({ theme }) => theme.metrics.transitions.slow};
    pointer-events: none;
  }

  &:hover::after {
    transform: translateX(120%);
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  aspect-ratio: 16 / 11;
  overflow: hidden;
`;

const CharacterImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const ImageOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(5, 8, 22, 0.85) 0%,
    rgba(5, 8, 22, 0.1) 50%,
    transparent 100%
  );
`;

const StatusBadge = styled.span<{ $status: Character["status"] }>`
  position: absolute;
  top: ${({ theme }) => theme.metrics.spacing.md};
  left: ${({ theme }) => theme.metrics.spacing.md};

  display: inline-flex;
  align-items: center;
  gap: 8px;

  padding: 8px 12px;
  border-radius: ${({ theme }) => theme.metrics.radius.sm};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};

  color: ${({ theme }) => theme.colors.text.primary};
  background: rgba(5, 8, 22, 0.72);
  border: 1px solid ${({ theme }) => theme.colors.border.soft};
  backdrop-filter: blur(8px);

  &::before {
    content: "";
    width: 8px;
    height: 8px;
    border-radius: 999px;
    background: ${({ theme, $status }) => {
      if ($status === "Alive") return theme.colors.status.alive;
      if ($status === "Dead") return theme.colors.status.dead;
      return theme.colors.status.unknown;
    }};
    box-shadow: 0 0 12px
      ${({ theme, $status }) => {
        if ($status === "Alive") return theme.colors.status.alive;
        if ($status === "Dead") return theme.colors.status.dead;
        return theme.colors.status.unknown;
      }};
  }
`;

const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: ${({ theme }) => theme.metrics.spacing.md};
  padding: ${({ theme }) => theme.metrics.spacing.lg};
`;

const Name = styled.h3`
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  line-height: ${({ theme }) => theme.typography.lineHeight.tight};
  color: ${({ theme }) => theme.colors.text.primary};
`;

const MetaRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.metrics.spacing.sm};
`;

const MetaBadge = styled.span`
  display: inline-flex;
  align-items: center;
  min-height: 36px;
  padding: 0 12px;

  border-radius: ${({ theme }) => theme.metrics.radius.pill || "999px"};
  border: 1px solid ${({ theme }) => theme.colors.border.soft};
  background: ${({ theme }) => theme.colors.accent.soft};
  color: ${({ theme }) => theme.colors.text.secondary};

  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`;

const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Label = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.text.muted};
`;

const Value = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  line-height: ${({ theme }) => theme.typography.lineHeight.normal};
  color: ${({ theme }) => theme.colors.text.secondary};

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const CharacterCard = memo(({ character }: CharacterCardProps) => {
  return (
    <Card>
      <ImageWrapper>
        <CharacterImage src={character.image} alt={character.name} />
        <ImageOverlay />
        <StatusBadge $status={character.status}>{character.status}</StatusBadge>
      </ImageWrapper>

      <Content>
        <Name>{character.name}</Name>

        <MetaRow>
          <MetaBadge>{character.species}</MetaBadge>
          {character.gender && <MetaBadge>{character.gender}</MetaBadge>}
        </MetaRow>

        <InfoBlock>
          <Label>Last known location</Label>
          <Value>{character.location?.name ?? "Unknown"}</Value>
        </InfoBlock>
      </Content>
    </Card>
  );
});

CharacterCard.displayName = "CharacterCard";

export default CharacterCard;
