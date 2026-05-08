import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Character } from "../../types/character";
import { memo } from "react";
import { useTheme } from "styled-components";

interface CharacterListItemProps {
  character: Character;
}

const CharacterListItem = memo(({ character }: CharacterListItemProps) => {
  const theme = useTheme();
  return (
    <Card
      sx={{
        transition: theme.transitions.normal,
        backgroundColor: theme.colors.background.surface,
        borderRadius: theme.metrics.radius.lg,
        boxShadow: theme.shadows.sm,
        "&:hover": {
          transform: theme.components.card.hoverTransform,
          boxShadow: theme.shadows.lg,
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
        <Typography
          variant="h5"
          component="div"
          sx={{
            fontFamily: theme.typography.fontFamily.body,
            fontWeight: theme.typography.fontWeight.bold,
            fontSize: theme.typography.fontSize.lg,
            marginBottom: theme.metrics.spacing.sm,
          }}
        >
          {character.name}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: theme.colors.text.secondary,
            fontSize: theme.typography.fontSize,
            marginBottom: theme.metrics.spacing.xs,
          }}
        >
          Status: {character.status}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: theme.colors.text.secondary,
            fontSize: theme.typography.fontSize,
            marginBottom: theme.metrics.spacing.xs,
          }}
        >
          Species: {character.species}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: theme.colors.text.secondary,
            fontSize: theme.typography.fontSize,
          }}
        >
          Location: {character.location?.name ?? "Unknown"}
        </Typography>
      </CardContent>
    </Card>
  );
});

CharacterListItem.displayName = "CharacterListItem";

export default CharacterListItem;
