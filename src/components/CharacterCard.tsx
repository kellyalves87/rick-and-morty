import { Typography } from "@mui/material";
import { Character } from "../types/character";
import { memo } from "react";
import styled, { keyframes } from "styled-components";

const glowingBorder = keyframes`
  0% {
    box-shadow: 0 0 5px ${({ theme }) => theme.colors.brand.primary}60,
                0 0 10px ${({ theme }) => theme.colors.brand.primary}40;
  }
  50% {
    box-shadow: 0 0 10px ${({ theme }) => theme.colors.brand.primary}80,
                0 0 20px ${({ theme }) => theme.colors.brand.primary}60,
                0 0 30px ${({ theme }) => theme.colors.brand.primary}40;
  }
  100% {
    box-shadow: 0 0 5px ${({ theme }) => theme.colors.brand.primary}60,
                0 0 10px ${({ theme }) => theme.colors.brand.primary}40;
  }
`;

const StyledCard = styled.div`
  background: linear-gradient(
    145deg,
    ${({ theme }) => theme.colors.background.card} 0%,
    ${({ theme }) => theme.colors.background.main} 100%
  );
  border-radius: 16px;
  backdrop-filter: blur(8px);
  border: 2px solid ${({ theme }) => theme.colors.brand.primary};
  opacity: 1;
  visibility: visible;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  animation: ${glowingBorder} 3s infinite;
  position: relative;
  overflow: hidden;
  transform: translateZ(0);
  will-change: transform, box-shadow;
  height: 450px;

  &::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      circle at center,
      ${({ theme }) => theme.colors.brand.primary}10,
      transparent 70%
    );
    opacity: 0.5;
    pointer-events: none;
  }
`;

const CharacterImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1rem;
  border: 2px solid ${({ theme }) => theme.colors.brand.primary}30;
`;

const scanLine = keyframes`
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(100%);
  }
`;

const CardTitle = styled(Typography)`
  font-family: ${({ theme }) => theme.typography.fontFamily.title};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.brand.primary};
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
  text-shadow: 0 0 10px ${({ theme }) => theme.colors.brand.primary}60;
  position: relative;
`;

const CardInfo = styled(Typography)`
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 0.5rem;
  font-size: 1rem;
  position: relative;
  padding-left: 1rem;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    width: 8px;
    height: 8px;
    background: ${({ theme }) => theme.colors.brand.primary};
    border-radius: 50%;
    transform: translateY(-50%);
    box-shadow: 0 0 10px ${({ theme }) => theme.colors.brand.primary};
  }
`;

const ScanLine = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 10px;
  background: linear-gradient(
    to bottom,
    transparent,
    ${({ theme }) => theme.colors.brand.primary}20,
    transparent
  );
  animation: ${scanLine} 3s linear infinite;
  pointer-events: none;
`;

interface CharacterCardProps {
  character: Character;
}

const CharacterCard = memo(({ character }: CharacterCardProps) => {
  return (
    <StyledCard>
      <ScanLine />
      <CharacterImage src={character.image} alt={character.name} />
      <div>
        <CardTitle variant="h5">{character.name}</CardTitle>
        <CardInfo>Status: {character.status}</CardInfo>
        <CardInfo>Species: {character.species}</CardInfo>
        <CardInfo>Location: {character.location?.name ?? "Unknown"}</CardInfo>
      </div>
    </StyledCard>
  );
});

CharacterCard.displayName = "CharacterCard";

export default CharacterCard;
