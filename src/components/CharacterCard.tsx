import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Character } from "../types/character";
import { memo } from "react";
import { useTheme } from "styled-components";

interface CharacterCardProps {
  character: Character;
}

const CharacterCard = memo(({ character }: CharacterCardProps) => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        transition: "transform 0.3s, box-shadow 0.3s",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: 6,
          color: theme.colors.text.primary,
        },
      }}
    >
      <CardMedia
        component="img"
        height="250"
        image={character.image}
        alt={character.name}
        style={{ objectFit: "contain", marginTop: "1rem" }}
      />
      <CardContent>
        <Typography variant="h5" component="div" fontWeight="bold">
          {character.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Status: {character.status}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Species: {character.species}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Location: {character.location?.name ?? "Unknown"}
        </Typography>
      </CardContent>
    </Card>
  );
});

CharacterCard.displayName = "CharacterCard";

export default CharacterCard;
